import type { ComponentProps } from "react";

import classNames from "classnames";
import { Heading2 } from "./Typographies";

export const Logo = ({ className }: ComponentProps<"h2">) => (
  <Heading2 className={classNames(className, "font-museo")}>@shotanue</Heading2>
);
