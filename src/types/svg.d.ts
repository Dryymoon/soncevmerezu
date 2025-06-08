// https://github.com/vercel/next.js/discussions/52690
declare module "*.svg?react" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module "*.svg" {
  const content: unknown;
  export default content;
}
