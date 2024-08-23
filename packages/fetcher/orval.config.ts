import { existsSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "orval";

export default defineConfig(async () => {
  const esaSchemaPath = resolve(__dirname, "esa.schema.json");

  await (async () => {
    if (existsSync(esaSchemaPath)) {
      console.log("skip to fetch esa.schema.json: already exists");
      return;
    }
    const res = await fetch(
      "https://raw.githubusercontent.com/suin/esa-openapi/main/esa-api.json",
    );

    if (!res.ok) {
      throw new Error(`status:${res.status}, msg:${res.statusText}`);
    }

    const text = await res.text();
    writeFileSync(esaSchemaPath, text);
  })();

  return {
    esa: {
      input: esaSchemaPath,
      output: {
        target: "./src/_generated/esa.ts",
        clean: true,
        override: {
          mutator: {
            path: "./src/esaAxios.ts",
            name: "customInstance",
          },
        },
      },
      hooks: {
        afterAllFilesWrite: "biome format --write --no-errors-on-unmatched",
      },
    },
  } satisfies ReturnType<typeof defineConfig>;
});
