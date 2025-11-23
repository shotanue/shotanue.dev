import type { Meta, StoryObj } from "@storybook/react";

import { Article as Component } from "@repo/ui";

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    category: "shotanue.dev",
    dateModified: "2021-09-01",
    datePublished: "2021-09-01",
    identifier: "https://shotanue.dev/readme",
    name: "README",
    tagCollection: ["web", "development"],
    articleBody: `
## Hello, there :metal:

I'm a web developer, working in Japan.

## Capabilities
Web development, TypeScript, React, Next.js, PHP, MySQL

## You can find me on

[X](https://x.com/shotanue)
[Qiita](https://github.com/shotanue)
[Hatena](https://shotanue.hatenablog.com)
    `,
  },
};
