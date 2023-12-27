export { makeRenderHTML };
import { minify } from "html-minifier";
import mustache from "mustache";

// render html with mustache.
const makeRenderHTML =
  ({
    template,
    templatePlaceholder,
    partials,
  }: { template: string; templatePlaceholder: string; partials: Record<string, string> }) =>
  async (args: { children: string; params: Record<string, unknown> }): Promise<string> => {
    // mustache does not support dynamic partial.
    // specify page partial with simple text replacement, before mustache rendering.
    const html = mustache.render(template.replace(templatePlaceholder, args.children), args.params, partials);

    return minify(html, {
      collapseWhitespace: true,
      // minifyCSS: true,
      minifyJS: true,
    });
  };
