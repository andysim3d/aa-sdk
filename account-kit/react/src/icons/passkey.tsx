import type { SVGProps } from "react";
import { Spinner } from "./spinner.js";
import { PasskeyIllustration } from "./illustrations/passkey.js";

// eslint-disable-next-line jsdoc/require-jsdoc
export function LoadingPasskey() {
  return (
    <div className="relative flex flex-col items-center justify-center h-12 w-12">
      <Spinner className="absolute top-0 left-0 right-0 bottom-0" />
      <PasskeyIllustration width="32" height="32" />
    </div>
  );
}

// eslint-disable-next-line jsdoc/require-jsdoc
export const PasskeyIcon = ({
  fill = "currentColor",
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <g fill={fill}>
      <path d="M6.49.516C4.946.836 3.656 2.1 3.262 3.666c-.136.543-.136 1.449 0 1.992.398 1.589 1.68 2.825 3.264 3.15.258.055.511.069 1.027.055.58-.023.734-.04 1.064-.15.915-.294 1.594-.764 2.128-1.48.34-.448.548-.86.71-1.38.114-.367.123-.457.123-1.19 0-.734-.01-.825-.122-1.191-.43-1.395-1.43-2.404-2.839-2.861C8.273.497 8.156.484 7.508.47c-.484-.01-.82.004-1.018.045ZM14.729 5.676a3.24 3.24 0 0 0-1.698.955 3.292 3.292 0 0 0-.679 3.518c.249.615.81 1.258 1.372 1.575l.276.159.004 2.535v2.535l.693.688.693.692 1.172-1.177 1.177-1.177-.702-.701-.701-.702.692-.693c.376-.38.688-.71.688-.733 0-.023-.249-.294-.552-.598-.303-.303-.543-.56-.534-.57l.385-.217c.751-.417 1.353-1.195 1.561-2.015.11-.425.123-1.217.023-1.625-.267-1.14-1.19-2.087-2.34-2.404-.349-.095-1.173-.117-1.53-.045Zm1.19 1.503c.222.154.44.539.44.783 0 .231-.19.607-.376.747-.209.159-.584.236-.824.172a.999.999 0 0 1-.702-.905c-.005-.752.851-1.218 1.462-.797ZM5.11 10.393A5.676 5.676 0 0 0 .6 14.227c-.226.698-.267 1.05-.267 2.39v1.218H12.555v-5.16l-.361-.344a4.921 4.921 0 0 1-.96-1.24l-.154-.295-.498-.167c-.81-.272-1.195-.308-3.26-.304-1.29.005-1.923.023-2.213.068Z" />
    </g>
  </svg>
);
