import { type SVGProps } from "react";
import { useUiConfig } from "../../hooks/useUiConfig.js";

// eslint-disable-next-line jsdoc/require-jsdoc
export const SuccessIllustration = ({
  className,
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  const { illustrationStyle } = useUiConfig();

  return (
    <>
      {illustrationStyle === "outline" && (
        <>
          <SuccessOutlineLight
            className={`dark:hidden text-fg-accent-brand ${className ?? ""}`}
            {...props}
          />
          <SuccessOutlineDark
            className={`hidden dark:block text-fg-accent-brand ${
              className ?? ""
            }`}
            {...props}
          />
        </>
      )}
      {illustrationStyle === "linear" && (
        <>
          <SuccessLinearLight
            className={`dark:hidden text-fg-accent-brand ${className ?? ""}`}
            {...props}
          />
          <SuccessLinearDark
            className={`hidden dark:block text-fg-accent-brand ${
              className ?? ""
            }`}
            {...props}
          />
        </>
      )}
      {illustrationStyle === "filled" && (
        <>
          <SuccessFilledLight
            className={`dark:hidden text-fg-accent-brand ${className ?? ""}`}
            {...props}
          />
          <SuccessFilledDark
            className={`hidden dark:block text-fg-accent-brand ${
              className ?? ""
            }`}
            {...props}
          />
        </>
      )}
      {illustrationStyle === "flat" && (
        <>
          <SuccessFlatLight
            className={`dark:hidden text-fg-accent-brand ${className ?? ""}`}
            {...props}
          />
          <SuccessFlatDark
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

const SuccessOutlineLight = ({
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
      d="M30 50C41.0457 50 50 41.0457 50 30C50 27.2563 49.4475 24.6416 48.4477 22.2612L46.4281 24.2782C47.0522 26.0701 47.3913 27.9954 47.3913 30C47.3913 39.605 39.605 47.3913 30 47.3913C20.395 47.3913 12.6087 39.605 12.6087 30C12.6087 20.395 20.395 12.6087 30 12.6087C34.1425 12.6087 37.9467 14.057 40.9339 16.4749L42.7888 14.6225C39.3219 11.7362 34.8637 10 30 10C18.9543 10 10 18.9543 10 30C10 41.0457 18.9543 50 30 50Z"
      fill="currentColor"
    />
    <path
      d="M49.4901 17.2399C50.1366 16.6119 50.1732 15.5555 49.5718 14.8803C48.9704 14.2052 47.9587 14.1669 47.3122 14.7949L30.9049 31.3139L24.8086 25.5174C24.136 24.92 23.1269 25.0052 22.5548 25.7076C21.9828 26.4101 22.0643 27.4637 22.737 28.0611L29.9167 34.8197C30.5345 35.3682 31.4477 35.347 32.0414 34.7703L49.4901 17.2399Z"
      fill="currentColor"
    />
  </svg>
);

const SuccessLinearLight = ({
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
      d="M49.5718 14.8803C50.1732 15.5555 50.1366 16.6119 49.4901 17.2399L32.0415 34.7703C31.4477 35.347 30.5345 35.3682 29.9167 34.8197L22.737 28.0611C22.0643 27.4637 21.9828 26.41 22.5548 25.7076C23.1269 25.0052 24.1359 24.92 24.8086 25.5174L30.9049 31.3139L47.3122 14.7949C47.9587 14.1669 48.9704 14.2051 49.5718 14.8803Z"
      fill="#020617"
    />
    <path
      d="M50 30C50 41.0457 41.0457 50 30 50C18.9543 50 10 41.0457 10 30C10 18.9543 18.9543 10 30 10C34.8637 10 39.3219 11.7361 42.7888 14.6225L40.9339 16.4749C37.9467 14.057 34.1425 12.6087 30 12.6087C20.395 12.6087 12.6087 20.395 12.6087 30C12.6087 39.605 20.395 47.3913 30 47.3913C39.605 47.3913 47.3913 39.605 47.3913 30C47.3913 27.9955 47.0522 26.0701 46.4281 24.2782L48.4477 22.2612C49.4475 24.6417 50 27.2563 50 30Z"
      fill="#020617"
    />
    <path
      opacity="0.3"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.4783 18.6694L30.8309 34.7826L46.8981 19.3581C43.3581 13.7358 37.096 10 29.9614 10C23.1222 10 17.0848 13.4328 13.4783 18.6694Z"
      fill="currentColor"
    />
  </svg>
);

const SuccessFilledLight = ({
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
      d="M30 50C41.0457 50 50 41.0457 50 30C50 26.3931 49.0452 23.0093 47.3746 20.0874L30.674 36.342C29.9456 37.0273 28.8254 37.0525 28.0676 36.4006L21.3939 30.4358C20.5687 29.726 20.4687 28.4738 21.1704 27.6391C21.8721 26.8044 23.1099 26.7032 23.935 27.4131L29.2798 32.2346L45.062 16.8415C41.3959 12.6485 36.0072 10 30 10C18.9543 10 10 18.9543 10 30C10 41.0457 18.9543 50 30 50Z"
      fill="currentColor"
    />
  </svg>
);

const SuccessFlatLight = ({
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
      d="M53.8977 21.0612C53.917 21.1182 53.9129 21.1728 53.8796 21.2318C53.8436 21.2957 53.776 21.3556 53.6778 21.3819C53.515 21.4255 53.2471 21.3375 53.1434 21.0427C52.1066 18.0937 50.5403 15.3523 48.5163 12.9557C46.0683 10.057 43.0109 7.73407 39.5621 6.15252C36.1134 4.57097 32.3582 3.76973 28.5642 3.80594C25.4275 3.83587 22.3281 4.43765 19.4167 5.57611C19.1257 5.6899 18.8842 5.54434 18.811 5.39245C18.7669 5.30092 18.7681 5.21061 18.7931 5.1416C18.8161 5.07786 18.8548 5.03911 18.9106 5.01664C21.9736 3.78304 25.2453 3.13083 28.5575 3.09923C32.4554 3.06204 36.3135 3.88523 39.8567 5.51011C43.4 7.135 46.5411 9.52156 49.0562 12.4997C51.1935 15.0303 52.8339 17.9352 53.8977 21.0612ZM11.3525 49.5347C11.3073 49.4951 11.2836 49.4458 11.2829 49.378C11.2821 49.3046 11.3107 49.2189 11.3826 49.1471C11.5018 49.0279 11.7778 48.9702 12.015 49.1737C14.8374 51.5952 18.1565 53.3831 21.7482 54.4056C25.3399 55.4281 29.103 55.6563 32.7776 55.0843C33.0864 55.0363 33.2906 55.2307 33.3292 55.3948C33.3524 55.4937 33.3317 55.5816 33.2924 55.6436C33.2561 55.7008 33.2099 55.7303 33.1506 55.7402C29.2916 56.3808 25.3309 56.1603 21.5547 55.0853C17.7785 54.0103 14.2955 52.1118 11.3525 49.5347ZM49.41 46.2685C49.3722 46.3153 49.3238 46.3409 49.2561 46.3442C49.1828 46.3479 49.0961 46.3226 49.0215 46.2536C48.8978 46.1391 48.8294 45.8655 49.0235 45.6206C50.9677 43.168 52.4494 40.3817 53.3959 37.3985C53.4904 37.1006 53.7554 37.0043 53.9195 37.0429C54.0184 37.0662 54.0879 37.1239 54.1259 37.1867C54.161 37.2447 54.1668 37.2992 54.1492 37.3567C53.1551 40.6034 51.5461 43.6291 49.41 46.2685ZM11.1381 9.85112C11.1829 9.81101 11.2348 9.79344 11.3021 9.80097C11.3751 9.80912 11.4566 9.84794 11.5192 9.92796C11.6231 10.0608 11.6469 10.3417 11.4162 10.5525C9.14829 12.6237 7.26843 15.0836 5.86546 17.8158C5.72273 18.0937 5.44535 18.1446 5.28994 18.0792C5.19629 18.0398 5.13742 17.9713 5.11041 17.9031C5.08545 17.8401 5.08878 17.7854 5.11571 17.7316C6.60926 14.7493 8.65263 12.0755 11.1381 9.85112Z"
      stroke="currentColor"
      stroke-width="3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.8105 47.5979C38.7517 47.5979 46.8105 39.539 46.8105 29.5979C46.8105 19.6568 38.7517 11.5979 28.8105 11.5979C18.8694 11.5979 10.8105 19.6568 10.8105 29.5979C10.8105 39.539 18.8694 47.5979 28.8105 47.5979ZM40.1727 25.0623C40.9815 24.3101 41.0273 23.0446 40.275 22.2358C39.5227 21.427 38.2572 21.3812 37.4484 22.1335L26.925 31.9219L23.1063 28.6743C22.2648 27.9588 21.0026 28.0608 20.287 28.9022C19.5714 29.7437 19.6735 31.0059 20.5149 31.7215L25.6888 36.1215C26.4616 36.7786 27.6039 36.7532 28.3466 36.0623L40.1727 25.0623Z"
      fill="currentColor"
    />
  </svg>
);

const SuccessOutlineDark = ({
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
      d="M30 50C41.0457 50 50 41.0457 50 30C50 27.2563 49.4475 24.6416 48.4477 22.2612L46.4281 24.2782C47.0522 26.0701 47.3913 27.9954 47.3913 30C47.3913 39.605 39.605 47.3913 30 47.3913C20.395 47.3913 12.6087 39.605 12.6087 30C12.6087 20.395 20.395 12.6087 30 12.6087C34.1425 12.6087 37.9467 14.057 40.9339 16.4749L42.7888 14.6225C39.3219 11.7362 34.8637 10 30 10C18.9543 10 10 18.9543 10 30C10 41.0457 18.9543 50 30 50Z"
      fill="currentColor"
    />
    <path
      d="M49.4901 17.2399C50.1366 16.6119 50.1732 15.5555 49.5718 14.8803C48.9704 14.2052 47.9587 14.1669 47.3122 14.7949L30.9049 31.3139L24.8086 25.5174C24.136 24.92 23.1269 25.0052 22.5548 25.7076C21.9828 26.4101 22.0643 27.4637 22.737 28.0611L29.9167 34.8197C30.5345 35.3682 31.4477 35.347 32.0414 34.7703L49.4901 17.2399Z"
      fill="currentColor"
    />
  </svg>
);

const SuccessLinearDark = ({
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
      d="M49.5718 14.8803C50.1732 15.5555 50.1366 16.6119 49.4901 17.2399L32.0415 34.7703C31.4477 35.347 30.5345 35.3682 29.9167 34.8197L22.737 28.0611C22.0643 27.4637 21.9828 26.41 22.5548 25.7076C23.1269 25.0052 24.1359 24.92 24.8086 25.5174L30.9049 31.3139L47.3122 14.7949C47.9587 14.1669 48.9704 14.2051 49.5718 14.8803Z"
      fill="white"
    />
    <path
      d="M50 30C50 41.0457 41.0457 50 30 50C18.9543 50 10 41.0457 10 30C10 18.9543 18.9543 10 30 10C34.8637 10 39.3219 11.7361 42.7888 14.6225L40.9339 16.4749C37.9467 14.057 34.1425 12.6087 30 12.6087C20.395 12.6087 12.6087 20.395 12.6087 30C12.6087 39.605 20.395 47.3913 30 47.3913C39.605 47.3913 47.3913 39.605 47.3913 30C47.3913 27.9955 47.0522 26.0701 46.4281 24.2782L48.4477 22.2612C49.4475 24.6417 50 27.2563 50 30Z"
      fill="white"
    />
    <path
      opacity="0.3"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.4783 18.6694L30.8309 34.7826L46.8981 19.3581C43.3581 13.7358 37.096 10 29.9614 10C23.1222 10 17.0848 13.4328 13.4783 18.6694Z"
      fill="currentColor"
    />
  </svg>
);

const SuccessFilledDark = ({
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
      d="M30 50C41.0457 50 50 41.0457 50 30C50 26.3931 49.0452 23.0093 47.3746 20.0874L30.674 36.342C29.9456 37.0273 28.8254 37.0525 28.0676 36.4006L21.3939 30.4358C20.5687 29.726 20.4687 28.4738 21.1704 27.6391C21.8721 26.8044 23.1099 26.7032 23.935 27.4131L29.2798 32.2346L45.062 16.8415C41.3959 12.6485 36.0072 10 30 10C18.9543 10 10 18.9543 10 30C10 41.0457 18.9543 50 30 50Z"
      fill="currentColor"
    />
  </svg>
);

const SuccessFlatDark = ({
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
      d="M53.8977 21.0612C53.917 21.1182 53.9129 21.1728 53.8796 21.2318C53.8436 21.2957 53.776 21.3556 53.6778 21.3819C53.515 21.4255 53.2471 21.3375 53.1434 21.0427C52.1066 18.0937 50.5403 15.3523 48.5163 12.9557C46.0683 10.057 43.0109 7.73407 39.5621 6.15252C36.1134 4.57097 32.3582 3.76973 28.5642 3.80594C25.4275 3.83587 22.3281 4.43765 19.4167 5.57611C19.1257 5.6899 18.8842 5.54434 18.811 5.39245C18.7669 5.30092 18.7681 5.21061 18.7931 5.1416C18.8161 5.07786 18.8548 5.03911 18.9106 5.01664C21.9736 3.78304 25.2453 3.13083 28.5575 3.09923C32.4554 3.06204 36.3135 3.88523 39.8567 5.51011C43.4 7.135 46.5411 9.52156 49.0562 12.4997C51.1935 15.0303 52.8339 17.9352 53.8977 21.0612ZM11.3525 49.5347C11.3073 49.4951 11.2836 49.4458 11.2829 49.378C11.2821 49.3046 11.3107 49.2189 11.3826 49.1471C11.5018 49.0279 11.7778 48.9702 12.015 49.1737C14.8374 51.5952 18.1565 53.3831 21.7482 54.4056C25.3399 55.4281 29.103 55.6563 32.7776 55.0843C33.0864 55.0363 33.2906 55.2307 33.3292 55.3948C33.3524 55.4937 33.3317 55.5816 33.2924 55.6436C33.2561 55.7008 33.2099 55.7303 33.1506 55.7402C29.2916 56.3808 25.3309 56.1603 21.5547 55.0853C17.7785 54.0103 14.2955 52.1118 11.3525 49.5347ZM49.41 46.2685C49.3722 46.3153 49.3238 46.3409 49.2561 46.3442C49.1828 46.3479 49.0961 46.3226 49.0215 46.2536C48.8978 46.1391 48.8294 45.8655 49.0235 45.6206C50.9677 43.168 52.4494 40.3817 53.3959 37.3985C53.4904 37.1006 53.7554 37.0043 53.9195 37.0429C54.0184 37.0662 54.0879 37.1239 54.1259 37.1867C54.161 37.2447 54.1668 37.2992 54.1492 37.3567C53.1551 40.6034 51.5461 43.6291 49.41 46.2685ZM11.1381 9.85112C11.1829 9.81101 11.2348 9.79344 11.3021 9.80097C11.3751 9.80912 11.4566 9.84794 11.5192 9.92796C11.6231 10.0608 11.6469 10.3417 11.4162 10.5525C9.14829 12.6237 7.26843 15.0836 5.86546 17.8158C5.72273 18.0937 5.44535 18.1446 5.28994 18.0792C5.19629 18.0398 5.13742 17.9713 5.11041 17.9031C5.08545 17.8401 5.08878 17.7854 5.11571 17.7316C6.60926 14.7493 8.65263 12.0755 11.1381 9.85112Z"
      stroke="currentColor"
      stroke-width="3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.8105 47.5979C38.7517 47.5979 46.8105 39.539 46.8105 29.5979C46.8105 19.6568 38.7517 11.5979 28.8105 11.5979C18.8694 11.5979 10.8105 19.6568 10.8105 29.5979C10.8105 39.539 18.8694 47.5979 28.8105 47.5979ZM40.1727 25.0623C40.9815 24.3101 41.0273 23.0446 40.275 22.2358C39.5227 21.427 38.2572 21.3812 37.4484 22.1335L26.925 31.9219L23.1063 28.6743C22.2648 27.9588 21.0026 28.0608 20.287 28.9022C19.5714 29.7437 19.6735 31.0059 20.5149 31.7215L25.6888 36.1215C26.4616 36.7786 27.6039 36.7532 28.3466 36.0623L40.1727 25.0623Z"
      fill="currentColor"
    />
  </svg>
);
