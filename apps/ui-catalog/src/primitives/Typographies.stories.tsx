import type { Meta, StoryObj } from "@storybook/react";

import { Heading1, Heading2, Heading3, Heading4, Label, Paragraph } from "ui";

type Typographies = typeof Heading1 | typeof Heading2 | typeof Heading3 | typeof Heading4;

const meta: Meta<Typographies> = {
};

export default meta;

type Story = StoryObj<Typographies>;

export const Default: Story = {
  args: {
    children: "Hello, World!",
  },
  render: ({children}) => {
    return (
      <>
        <Heading1>h1: {children}</Heading1>
        <Heading2>h2: {children}</Heading2>
        <Heading3>h3: {children}</Heading3>
        <Heading4>h4: {children}</Heading4>
        <Paragraph>p: {children}</Paragraph>
        <Label>label: {children}</Label>
     </>
    );
  },
};
