import { reactRenderer } from "@hono/react-renderer";
import { App } from "@repo/ui";
import { Hono } from "hono";

const app = new Hono();
app.get(
  "*",
  reactRenderer(({ children }) => {
    return (
      <html lang="ja">
        <head>
          <title>shotanue.dev</title>
          <link href="/global.css" rel="stylesheet" />
        </head>
        <body>
          <App txt="" />
        </body>
      </html>
    );
  }),
);

app.get("/", (c) => {
  return c.render(<h1>Hello!</h1>, {
    title: "Hello",
  });
});

export default app;
