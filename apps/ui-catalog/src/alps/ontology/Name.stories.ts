import type { Meta, StoryObj } from "@storybook/react";

import { Name as Component } from "@repo/ui";

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    children: "初めての記事",
  },
};

export const HelloWorld: Story = {
  args: {
    children: "Hello, World!",
  },
};
