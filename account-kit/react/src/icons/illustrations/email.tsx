import { type SVGProps } from "react";
import type { IllustrationProps } from "./types.js";

// eslint-disable-next-line jsdoc/require-jsdoc
export const EmailIllustration = ({
  className,
  illustrationStyle: style,
  ...props
}: IllustrationProps) => {
  return (
    <>
      {style === "outline" && (
        <>
          <EmailOutlineLight
            className={`dark:hidden text-fg-accent-brand ${className ?? ""}`}
            {...props}
          />
          <EmailOutlineDark
            className={`hidden dark:block text-fg-accent-brand ${
              className ?? ""
            }`}
            {...props}
          />
        </>
      )}
      {style === "linear" && (
        <>
          <EmailLinearLight
            className={`dark:hidden text-fg-accent-brand ${className ?? ""}`}
            {...props}
          />
          <EmailLinearDark
            className={`hidden dark:block text-fg-accent-brand ${
              className ?? ""
            }`}
            {...props}
          />
        </>
      )}
      {style === "filled" && (
        <>
          <EmailFilledLight
            className={`dark:hidden text-fg-accent-brand ${className ?? ""}`}
            {...props}
          />
          <EmailFilledDark
            className={`hidden dark:block text-fg-accent-brand ${
              className ?? ""
            }`}
            {...props}
          />
        </>
      )}
      {style === "flat" && (
        <>
          <EmailFlatLight
            className={`dark:hidden text-fg-accent-brand ${className ?? ""}`}
            {...props}
          />
          <EmailFlatDark
            className={`hidden dark:block text-fg-accent-brand ${
              className ?? ""
            }`}
            {...props}
          />
        </>
      )}
    </>
  );
};

const EmailOutlineLight = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="#363FF9"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.823 15.9387C20.2672 15.9387 18.9303 17.043 18.6365 18.5708L14.4764 40.2035C14.0916 42.2047 15.625 44.0612 17.6629 44.0612H48.9114C50.4672 44.0612 51.8041 42.9569 52.0979 41.4291L56.258 19.7964C56.6428 17.7952 55.1094 15.9387 53.0715 15.9387H21.823ZM53.0715 17.9387H21.823C21.7233 17.9387 21.6259 17.9506 21.5323 17.973L33.593 29.587C34.3673 30.3326 35.5614 30.4247 36.4409 29.8067L53.3003 17.9595C53.2263 17.9459 53.1499 17.9387 53.0715 17.9387ZM16.4404 40.5812L20.4539 19.7111L32.2057 31.0277C33.6698 32.4375 35.9278 32.6117 37.5907 31.4431L54.2302 19.7505L50.1339 41.0514C50.0211 41.6375 49.5082 42.0612 48.9114 42.0612H17.6629C16.8811 42.0612 16.2928 41.3489 16.4404 40.5812Z"
      fill="currentColor"
    />
    <path
      d="M4 18.1837C3.44772 18.1837 3 18.6314 3 19.1837C3 19.736 3.44772 20.1837 4 20.1837H13.1939C13.7462 20.1837 14.1939 19.736 14.1939 19.1837C14.1939 18.6314 13.7462 18.1837 13.1939 18.1837H4Z"
      fill="currentColor"
    />
    <path
      d="M12.1122 23.5918L5.08154 23.5918C4.52926 23.5918 4.08154 24.0395 4.08154 24.5918C4.08154 25.1441 4.52926 25.5918 5.08154 25.5918H12.1122C12.6644 25.5918 13.1122 25.1441 13.1122 24.5918C13.1122 24.0395 12.6644 23.5918 12.1122 23.5918Z"
      fill="currentColor"
    />
    <path
      d="M6.16333 29L11.0307 29C11.583 29 12.0307 29.4477 12.0307 30C12.0307 30.5523 11.583 31 11.0307 31L6.16333 31C5.61105 31 5.16333 30.5523 5.16333 30C5.16333 29.4477 5.61104 29 6.16333 29Z"
      fill="currentColor"
    />
  </svg>
);

const EmailLinearLight = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="#363FF9"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity="0.3"
      d="M42.3979 17.5613L21.8469 42.9796H49.6345C50.1451 42.9796 50.5862 42.6226 50.6924 42.1231L55.6403 18.868C55.7835 18.1951 55.2703 17.5613 54.5824 17.5613H42.3979Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.6597 16C20.1039 16 18.767 17.1043 18.4732 18.6321L14.3131 40.2648C13.9282 42.266 15.4617 44.1225 17.4996 44.1225H48.748C50.3038 44.1225 51.6407 43.0182 51.9345 41.4903L56.0947 19.8577C56.4795 17.8565 54.946 16 52.9081 16H21.6597ZM52.9081 18H21.6597C21.56 18 21.4626 18.0118 21.369 18.0343L33.4297 29.6483C34.2039 30.3939 35.3981 30.486 36.2775 29.868L53.137 18.0208C53.063 18.0072 52.9865 18 52.9081 18ZM16.2771 40.6425L20.2906 19.7724L32.0424 31.0889C33.5065 32.4988 35.7644 32.673 37.4274 31.5044L54.0668 19.8118L49.9705 41.1126C49.8578 41.6988 49.3449 42.1225 48.748 42.1225H17.4996C16.7178 42.1225 16.1294 41.4102 16.2771 40.6425Z"
      fill="#020617"
    />
    <path
      d="M4 18.1837C3.44772 18.1837 3 18.6314 3 19.1837C3 19.736 3.44772 20.1837 4 20.1837H13.1939C13.7462 20.1837 14.1939 19.736 14.1939 19.1837C14.1939 18.6314 13.7462 18.1837 13.1939 18.1837H4Z"
      fill="#020617"
    />
    <path
      d="M12.1122 23.5918H5.08154C4.52926 23.5918 4.08154 24.0395 4.08154 24.5918C4.08154 25.1441 4.52926 25.5918 5.08154 25.5918H12.1122C12.6644 25.5918 13.1122 25.1441 13.1122 24.5918C13.1122 24.0395 12.6644 23.5918 12.1122 23.5918Z"
      fill="#020617"
    />
    <path
      d="M6 29.0613L10.8673 29.0613C11.4196 29.0613 11.8673 29.509 11.8673 30.0613C11.8673 30.6136 11.4196 31.0613 10.8673 31.0613L6 31.0613C5.44772 31.0613 5 30.6136 5 30.0613C5 29.509 5.44771 29.0613 6 29.0613Z"
      fill="#020617"
    />
  </svg>
);

const EmailFilledLight = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="#363FF9"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.6001 16L34.534 26.9795C35.2165 27.6649 36.2917 27.7636 37.0876 27.214L53.328 16H23.6001Z"
      fill="currentColor"
    />
    <path
      d="M19.8381 16.8458L33.1793 30.2427C34.2867 31.3547 36.031 31.5149 37.3224 30.6232L56.1733 17.6066C56.5294 18.2447 56.6747 19.0094 56.5234 19.7964L52.3632 41.4291C52.0694 42.9569 50.7326 44.0612 49.1767 44.0612H17.9283C15.8904 44.0612 14.3569 42.2047 14.7418 40.2035L18.9019 18.5709C19.0324 17.8925 19.3685 17.2976 19.8381 16.8458Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 19C3 18.4477 3.44772 18 4 18H13.1939C13.7462 18 14.1939 18.4477 14.1939 19C14.1939 19.5523 13.7462 20 13.1939 20H4C3.44772 20 3 19.5523 3 19Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.08154 23.4081L12.1122 23.4081C12.6644 23.4081 13.1122 23.8558 13.1122 24.4081C13.1122 24.9604 12.6644 25.4081 12.1122 25.4081H5.08154C4.52926 25.4081 4.08154 24.9604 4.08154 24.4081C4.08154 23.8558 4.52926 23.4081 5.08154 23.4081Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.16333 28.8163L11.0307 28.8163C11.583 28.8163 12.0307 29.264 12.0307 29.8163C12.0307 30.3686 11.583 30.8163 11.0307 30.8163L6.16333 30.8163C5.61105 30.8163 5.16333 30.3686 5.16333 29.8163C5.16333 29.264 5.61104 28.8163 6.16333 28.8163Z"
      fill="currentColor"
    />
  </svg>
);

const EmailFlatLight = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="#363FF9"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity="0.4"
      d="M19.8381 16.8458L33.1793 30.2427C34.2867 31.3547 36.031 31.5149 37.3224 30.6232L56.1733 17.6066C56.5294 18.2447 56.6747 19.0094 56.5234 19.7964L52.3632 41.4291C52.0694 42.9569 50.7326 44.0612 49.1767 44.0612H17.9283C15.8904 44.0612 14.3569 42.2047 14.7418 40.2035L18.9019 18.5709C19.0324 17.8925 19.3685 17.2976 19.8381 16.8458Z"
      fill="currentColor"
    />
    <path
      d="M23.6001 16L34.534 26.9795C35.2165 27.6649 36.2917 27.7636 37.0876 27.214L53.328 16H23.6001Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 19C3 18.4477 3.44772 18 4 18H13.1939C13.7462 18 14.1939 18.4477 14.1939 19C14.1939 19.5523 13.7462 20 13.1939 20H4C3.44772 20 3 19.5523 3 19Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.08154 23.4081L12.1122 23.4081C12.6644 23.4081 13.1122 23.8558 13.1122 24.4081C13.1122 24.9604 12.6644 25.4081 12.1122 25.4081L5.08154 25.4081C4.52926 25.4081 4.08154 24.9604 4.08154 24.4081C4.08154 23.8558 4.52926 23.4081 5.08154 23.4081Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.16333 28.8163L11.0307 28.8163C11.583 28.8163 12.0307 29.264 12.0307 29.8163C12.0307 30.3686 11.583 30.8163 11.0307 30.8163L6.16333 30.8163C5.61105 30.8163 5.16333 30.3686 5.16333 29.8163C5.16333 29.264 5.61104 28.8163 6.16333 28.8163Z"
      fill="currentColor"
    />
  </svg>
);

const EmailOutlineDark = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="#9AB7FF"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.823 15.9387C20.2672 15.9387 18.9303 17.043 18.6365 18.5708L14.4764 40.2035C14.0916 42.2047 15.625 44.0612 17.6629 44.0612H48.9114C50.4672 44.0612 51.8041 42.9569 52.0979 41.4291L56.258 19.7964C56.6428 17.7952 55.1094 15.9387 53.0715 15.9387H21.823ZM53.0715 17.9387H21.823C21.7233 17.9387 21.6259 17.9506 21.5323 17.973L33.593 29.587C34.3673 30.3326 35.5614 30.4247 36.4409 29.8067L53.3003 17.9595C53.2263 17.9459 53.1499 17.9387 53.0715 17.9387ZM16.4404 40.5812L20.4539 19.7111L32.2057 31.0277C33.6698 32.4375 35.9278 32.6117 37.5907 31.4431L54.2302 19.7505L50.1339 41.0514C50.0211 41.6375 49.5082 42.0612 48.9114 42.0612H17.6629C16.8811 42.0612 16.2928 41.3489 16.4404 40.5812Z"
      fill="currentColor"
    />
    <path
      d="M4 18.1837C3.44772 18.1837 3 18.6314 3 19.1837C3 19.736 3.44772 20.1837 4 20.1837H13.1939C13.7462 20.1837 14.1939 19.736 14.1939 19.1837C14.1939 18.6314 13.7462 18.1837 13.1939 18.1837H4Z"
      fill="currentColor"
    />
    <path
      d="M12.1122 23.5918L5.08154 23.5918C4.52926 23.5918 4.08154 24.0395 4.08154 24.5918C4.08154 25.1441 4.52926 25.5918 5.08154 25.5918H12.1122C12.6644 25.5918 13.1122 25.1441 13.1122 24.5918C13.1122 24.0395 12.6644 23.5918 12.1122 23.5918Z"
      fill="currentColor"
    />
    <path
      d="M6.16333 29L11.0307 29C11.583 29 12.0307 29.4477 12.0307 30C12.0307 30.5523 11.583 31 11.0307 31L6.16333 31C5.61105 31 5.16333 30.5523 5.16333 30C5.16333 29.4477 5.61104 29 6.16333 29Z"
      fill="currentColor"
    />
  </svg>
);

const EmailLinearDark = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="#9AB7FF"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity="0.3"
      d="M42.3979 17.5613L21.8469 42.9796H49.6345C50.1451 42.9796 50.5862 42.6226 50.6924 42.1231L55.6403 18.868C55.7835 18.1951 55.2703 17.5613 54.5824 17.5613H42.3979Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.6597 16C20.1039 16 18.767 17.1043 18.4732 18.6321L14.3131 40.2648C13.9282 42.266 15.4617 44.1225 17.4996 44.1225H48.748C50.3038 44.1225 51.6407 43.0182 51.9345 41.4903L56.0947 19.8577C56.4795 17.8565 54.946 16 52.9081 16H21.6597ZM52.9081 18H21.6597C21.56 18 21.4626 18.0118 21.369 18.0343L33.4297 29.6483C34.2039 30.3939 35.3981 30.486 36.2775 29.868L53.137 18.0208C53.063 18.0072 52.9865 18 52.9081 18ZM16.2771 40.6425L20.2906 19.7724L32.0424 31.0889C33.5065 32.4988 35.7644 32.673 37.4274 31.5044L54.0668 19.8118L49.9705 41.1126C49.8578 41.6988 49.3449 42.1225 48.748 42.1225H17.4996C16.7178 42.1225 16.1294 41.4102 16.2771 40.6425Z"
      fill="white"
    />
    <path
      d="M4 18.1837C3.44772 18.1837 3 18.6314 3 19.1837C3 19.736 3.44772 20.1837 4 20.1837H13.1939C13.7462 20.1837 14.1939 19.736 14.1939 19.1837C14.1939 18.6314 13.7462 18.1837 13.1939 18.1837H4Z"
      fill="white"
    />
    <path
      d="M12.1122 23.5918H5.08154C4.52926 23.5918 4.08154 24.0395 4.08154 24.5918C4.08154 25.1441 4.52926 25.5918 5.08154 25.5918H12.1122C12.6644 25.5918 13.1122 25.1441 13.1122 24.5918C13.1122 24.0395 12.6644 23.5918 12.1122 23.5918Z"
      fill="white"
    />
    <path
      d="M6 29.0613L10.8673 29.0613C11.4196 29.0613 11.8673 29.509 11.8673 30.0613C11.8673 30.6136 11.4196 31.0613 10.8673 31.0613L6 31.0613C5.44772 31.0613 5 30.6136 5 30.0613C5 29.509 5.44771 29.0613 6 29.0613Z"
      fill="white"
    />
  </svg>
);

const EmailFilledDark = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="#9AB7FF"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.6001 16L34.534 26.9795C35.2165 27.6649 36.2917 27.7636 37.0876 27.214L53.328 16H23.6001Z"
      fill="currentColor"
    />
    <path
      d="M19.8381 16.8458L33.1793 30.2427C34.2867 31.3547 36.031 31.5149 37.3224 30.6232L56.1733 17.6066C56.5294 18.2447 56.6747 19.0094 56.5234 19.7964L52.3632 41.4291C52.0694 42.9569 50.7326 44.0612 49.1767 44.0612H17.9283C15.8904 44.0612 14.3569 42.2047 14.7418 40.2035L18.9019 18.5709C19.0324 17.8925 19.3685 17.2976 19.8381 16.8458Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 19C3 18.4477 3.44772 18 4 18H13.1939C13.7462 18 14.1939 18.4477 14.1939 19C14.1939 19.5523 13.7462 20 13.1939 20H4C3.44772 20 3 19.5523 3 19Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.08154 23.4081L12.1122 23.4081C12.6644 23.4081 13.1122 23.8558 13.1122 24.4081C13.1122 24.9604 12.6644 25.4081 12.1122 25.4081H5.08154C4.52926 25.4081 4.08154 24.9604 4.08154 24.4081C4.08154 23.8558 4.52926 23.4081 5.08154 23.4081Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.16333 28.8163L11.0307 28.8163C11.583 28.8163 12.0307 29.264 12.0307 29.8163C12.0307 30.3686 11.583 30.8163 11.0307 30.8163L6.16333 30.8163C5.61105 30.8163 5.16333 30.3686 5.16333 29.8163C5.16333 29.264 5.61104 28.8163 6.16333 28.8163Z"
      fill="currentColor"
    />
  </svg>
);

const EmailFlatDark = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="#9AB7FF"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity="0.4"
      d="M19.8381 16.8458L33.1793 30.2427C34.2867 31.3547 36.031 31.5149 37.3224 30.6232L56.1733 17.6066C56.5294 18.2447 56.6747 19.0094 56.5234 19.7964L52.3632 41.4291C52.0694 42.9569 50.7326 44.0612 49.1767 44.0612H17.9283C15.8904 44.0612 14.3569 42.2047 14.7418 40.2035L18.9019 18.5709C19.0324 17.8925 19.3685 17.2976 19.8381 16.8458Z"
      fill="currentColor"
    />
    <path
      d="M23.6001 16L34.534 26.9795C35.2165 27.6649 36.2917 27.7636 37.0876 27.214L53.328 16H23.6001Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 19C3 18.4477 3.44772 18 4 18H13.1939C13.7462 18 14.1939 18.4477 14.1939 19C14.1939 19.5523 13.7462 20 13.1939 20H4C3.44772 20 3 19.5523 3 19Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.08154 23.4081L12.1122 23.4081C12.6644 23.4081 13.1122 23.8558 13.1122 24.4081C13.1122 24.9604 12.6644 25.4081 12.1122 25.4081L5.08154 25.4081C4.52926 25.4081 4.08154 24.9604 4.08154 24.4081C4.08154 23.8558 4.52926 23.4081 5.08154 23.4081Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.16333 28.8163L11.0307 28.8163C11.583 28.8163 12.0307 29.264 12.0307 29.8163C12.0307 30.3686 11.583 30.8163 11.0307 30.8163L6.16333 30.8163C5.61105 30.8163 5.16333 30.3686 5.16333 29.8163C5.16333 29.264 5.61104 28.8163 6.16333 28.8163Z"
      fill="currentColor"
    />
  </svg>
);
