import type { Meta, StoryObj } from "@storybook/react";

import { Identifier as Component } from "@repo/ui";

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    children: "#14",
  },
};

export const goodFirstIssue: Story = {
  args: {
    children: "good-first-issue",
  },
};
