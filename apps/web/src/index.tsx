import { reactRenderer } from "@hono/react-renderer";
import { Heading1 } from "@repo/ui";
import { Hono } from "hono";

const app = new Hono();

app.get(
  "*",
  reactRenderer(({ children }) => {
    return (
      <html lang="ja">
        <head>
          <title>React + Hono</title>
        </head>

        <body>
          <h1>React + Hono</h1>
          <Heading1>Heading 1</Heading1>
          <div>{children}</div>
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
