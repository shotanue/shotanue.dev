import type { Meta, StoryObj } from "@storybook/react";

import { DateModified as Component } from "@repo/ui";

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;
type Story = StoryObj<typeof Component>;

export const aMinAgo: Story = {
  args: {
    children: "2024-01-01T00:00:00+09:00",
    from: "2024-01-01T00:00:00+09:00",
  },
};

export const aHourAgo: Story = {
  args: {
    children: "2024-01-01T00:00:00+09:00",
    from: "2024-01-01T01:00:00+09:00",
  },
};

export const aDayAgo: Story = {
  args: {
    children: "2024-01-01T00:00:00+09:00",
    from: "2024-01-02T00:00:00+09:00",
  },
};

export const aMonthAgo: Story = {
  args: {
    children: "2024-01-01T00:00:00+09:00",
    from: "2024-02-01T00:00:00+09:00",
  },
};

export const aYearAgo: Story = {
  args: {
    children: "2024-01-01T00:00:00+09:00",
    from: "2025-01-01T00:00:00+09:00",
  },
};
