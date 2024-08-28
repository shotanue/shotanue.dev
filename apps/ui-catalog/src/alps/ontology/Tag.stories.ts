import type { Meta, StoryObj } from "@storybook/react";

import { Tag as Component } from "@repo/ui";

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    children: "tag",
  },
};
