declare module '*.svg?react' {
  import type { FC, SVGProps } from 'react';

  const SVGComponent: FC<SVGProps<SVGSVGElement>>;
  export default SVGComponent;
}
