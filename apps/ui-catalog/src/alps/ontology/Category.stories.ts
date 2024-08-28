import type { Meta, StoryObj } from "@storybook/react";

import { Category as Component } from "@repo/ui";

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    children: "notes",
  },
};

export const shotanueDev: Story = {
  args: {
    children: "shotanue.dev",
  },
};

export const hatena: Story = {
  args: {
    children: "hatena",
  },
};

export const qiita: Story = {
  args: {
    children: "qiita",
  },
};
