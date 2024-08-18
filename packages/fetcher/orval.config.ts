import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "orval";

// biome-ignore lint/style/noDefaultExport:
export default defineConfig(async () => {
  const esaSchemaPath = resolve(__dirname, "esa.schema.json");

  await (async () => {
    const res = await fetch("https://raw.githubusercontent.com/suin/esa-openapi/main/esa-api.json");

    if (!res.ok) {
      throw new Error(`status:${res.status}, msg:${res.statusText}`);
    }

    const text = await res.text();
    writeFileSync(esaSchemaPath, text);
  })();

  return {
    esa: {
      input: esaSchemaPath,
      output: "./src/_generated/esa.ts",
      hooks: {
        afterAllFilesWrite: "biome format --write --no-errors-on-unmatched",
      },
    },
  };
});
