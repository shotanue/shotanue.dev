import { hostname } from "os";
import { dirname } from "path";
import { create } from "browser-sync";

import { build } from "@";

const bs = create();

const projectDir = dirname(import.meta.dir);

await build();

const refresh = async () => {
  await build();
  bs.reload();
};

for (const watchDir of ["templates", "partials", "resources", "assets"]) {
  bs.watch(`${projectDir}/${watchDir}`).on("change", refresh);
}

bs.init({
  server: `${projectDir}/public`,
  host: hostname(),
});
