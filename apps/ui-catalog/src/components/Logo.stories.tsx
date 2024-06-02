import type { Meta, StoryObj } from "@storybook/react";

import { Logo } from "ui";

const meta: Meta<typeof Logo> = {
  component: Logo,
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {};
