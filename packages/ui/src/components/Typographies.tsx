// Typographies
import classNames from "classnames";
import type { ComponentProps } from "react";

export const Heading1 = ({ children, className }: ComponentProps<"h1">) => (
  <h1 className={classNames(className, "text-4xl font-bold")}>{children}</h1>
);

export const Heading2 = ({ children, className }: ComponentProps<"h2">) => (
  <h2 className={classNames(className, "text-3xl font-bold")}>{children}</h2>
);

export const Heading3 = ({ children, className }: ComponentProps<"h3">) => (
  <h3 className={classNames(className, "text-2xl font-bold")}>{children}</h3>
);

export const Heading4 = ({ children, className }: ComponentProps<"h4">) => (
  <h4 className={classNames(className, "text-xl font-bold")}>{children}</h4>
);

export const Paragraph = ({ children, className }: ComponentProps<"p">) => (
  <p className={classNames(className, "text-base")}>{children}</p>
);

export const Label = ({ children, className }: ComponentProps<"span">) => (
  <span className={classNames(className, "text-sm")}>{children}</span>
);

