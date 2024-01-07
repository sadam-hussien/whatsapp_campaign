type Props = {
  fill?: string;
  width?: number;
  height?: number;
};

type OtherProps = {
  innerFill?: string;
};

export function Logo({
  className,
  fill = "fill-white",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      // width="2000"
      // height="1500"
      viewBox="0 0 2000 1500"
      className={`fill-transparent ${className}`}
    >
      <path d="M0 0H2000V1500H0z"></path>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        // width="2000"
        // height="1247"
        // data-background-color="#000000"
        transform="matrix(.75 0 0 .75 249.09 282.754)"
        viewBox="0 0 396 247"
      >
        <svg
          // width="395.52"
          // height="247.2"
          transform="translate(.24 -.1)"
          viewBox="0 0 395.52 247.2"
        >
          <svg></svg>
          <svg
            //  width="395.52" height="247.2"
            viewBox="0 0 395.52 247.2"
          >
            <svg
              // width="244.431"
              // height="72.462"
              transform="translate(75.544 87.369)"
              viewBox="0 0 244.431 72.462"
            >
              <svg
                // width="244.431" height="72.462"
                viewBox="0 0 244.431 72.462"
              >
                <svg
                  // width="244.431"
                  // height="72.462"
                  viewBox="0 0 244.431 72.462"
                >
                  <svg
                    // width="244.431"
                    // height="72.462"
                    viewBox="0 0 244.431 72.462"
                  >
                    <g>
                      <svg
                        // width="244.431"
                        // height="72.462"
                        viewBox="0 0 244.431 72.462"
                      >
                        <svg
                          // width="244.431"
                          // height="72.462"
                          viewBox="0 0 244.431 72.462"
                        >
                          <svg
                            // width="244.431"
                            // height="72.462"
                            viewBox="4.65 -34.3 155.66 46.15"
                          >
                            <path
                              d="M10.55 0h-5.9v-34.3h5.9V0zm18.87.7Q26.1.7 23.41-.73q-2.69-1.42-4.26-4.26-1.58-2.84-1.58-7.11 0-4.35 1.58-7.2 1.57-2.85 4.26-4.25 2.69-1.4 6.01-1.4 3.28 0 5.94 1.4 2.66 1.4 4.24 4.25 1.57 2.85 1.57 7.2 0 4.27-1.57 7.11-1.58 2.84-4.24 4.26Q32.7.7 29.42.7zm-.2-5.15q1.75 0 3.12-.86 1.36-.87 2.15-2.57.78-1.7.78-4.22 0-3.85-1.51-5.8-1.51-1.95-4.14-1.95-1.77 0-3.15.86-1.37.86-2.16 2.59-.79 1.72-.79 4.3 0 3.8 1.54 5.72 1.54 1.93 4.16 1.93zM57.72.7Q54.4.7 51.71-.73q-2.69-1.42-4.26-4.26-1.58-2.84-1.58-7.11 0-4.35 1.58-7.2 1.57-2.85 4.26-4.25 2.69-1.4 6.01-1.4 3.28 0 5.94 1.4 2.66 1.4 4.24 4.25 1.57 2.85 1.57 7.2 0 4.27-1.57 7.11-1.58 2.84-4.24 4.26Q61 .7 57.72.7zm-.2-5.15q1.75 0 3.11-.86 1.37-.87 2.15-2.57.79-1.7.79-4.22 0-3.85-1.51-5.8-1.51-1.95-4.14-1.95-1.77 0-3.15.86-1.37.86-2.16 2.59-.79 1.72-.79 4.3 0 3.8 1.54 5.72 1.54 1.93 4.16 1.93zM88.62.7q-2.68 0-4.55-1.15-1.88-1.15-2.86-3.49-.99-2.34-.99-5.86h2.15q0 1.62.75 2.77t1.99 1.77q1.23.61 2.66.61 1.47 0 2.91-.81 1.44-.82 2.39-2.48.95-1.66.95-4.21 0-2.33-.8-4.01-.8-1.69-2.19-2.59-1.39-.9-3.16-.9-1.5 0-2.75.67-1.25.68-2 1.97-.75 1.28-.75 3.11h-2.15q0-3.83 1.17-6.26 1.18-2.44 3.15-3.62 1.98-1.17 4.33-1.17 2.87 0 5.41 1.52 2.54 1.53 4.11 4.39 1.58 2.86 1.58 6.89 0 4.05-1.6 6.92-1.6 2.88-4.19 4.4Q91.59.7 88.62.7zm-6.25 11.15h-5.9v-36.1h4.85l1.05 6v30.1zM127.57 0h-5.15l-.75-5.9v-9.75q0-2.55-1.04-3.78-1.04-1.22-3.51-1.22-1.43 0-2.48.42-1.05.43-1.61 1.22-.56.78-.56 1.91h-6.45q0-2.75 1.32-4.49 1.33-1.74 3.81-2.55 2.49-.81 5.97-.81 3.15 0 5.5 1.01t3.65 3.11q1.3 2.1 1.3 5.38V0zm-13.1.7q-3.13 0-5.22-1.09-2.08-1.09-3.13-2.86-1.05-1.78-1.05-3.85 0-2.3 1.21-3.86 1.21-1.57 3.44-2.35 2.22-.79 5.25-.79 1.97 0 3.73.3 1.77.3 3.52.8v3.45q-1.38-.45-3-.7-1.63-.25-3.05-.25-2.1 0-3.45.77-1.35.78-1.35 2.63 0 1.35 1.1 2.32 1.1.98 3.5.98 1.82 0 3.1-.8 1.27-.8 1.93-2 .67-1.2.67-2.4h1.4q0 2.62-.98 4.84-.97 2.21-2.89 3.53Q117.29.7 114.47.7zm27.64-.7h-5.9v-34.3h5.9V0zm-.8-8.95v-6.1l10.4-9.2h8l-18.4 15.3zm19 8.95h-7.2l-10.85-15.45 5.6-1.35L160.31 0z"
                              className={`wordmark-text-0 ${fill}`}
                              data-fill-palette-color="primary"
                              opacity="1"
                            ></path>
                          </svg>
                        </svg>
                      </svg>
                    </g>
                  </svg>
                </svg>
              </svg>
            </svg>
            <path
              className={fill}
              stroke="transparent"
              d="M245.816 0c68.262 0 123.6 55.338 123.6 123.6s-55.338 123.6-123.6 123.6c-52.467 0-97.299-32.691-115.237-78.816h3.514c17.766 44.28 61.093 75.548 111.723 75.549 66.458 0 120.333-53.875 120.332-120.333 0-66.458-53.875-120.333-120.332-120.333-50.63 0-93.957 31.269-111.723 75.549h-3.514C148.517 32.692 193.349 0 245.816 0z"
              data-fill-palette-color="tertiary"
            ></path>
          </svg>
        </svg>
      </svg>
    </svg>
  );
}

export function MenuIcon({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 510 511"
      className={className}
    >
      <path
        className={fill}
        fillRule="evenodd"
        d="M238.322 358.531c-9.763-9.764-9.763-25.593 0-35.356 9.763-9.763 25.593-9.763 35.356 0 9.763 9.763 9.763 25.592 0 35.356-9.763 9.763-25.593 9.763-35.356 0zm45.962 10.606c-15.621 15.621-40.947 15.621-56.568 0-15.621-15.621-15.621-40.947 0-56.568 15.621-15.621 40.947-15.621 56.568 0 15.621 15.621 15.621 40.947 0 56.568zm-130.813-95.46c-9.763-9.763-9.763-25.592 0-35.355 9.763-9.763 25.592-9.763 35.355 0 9.763 9.763 9.763 25.592 0 35.355-9.763 9.764-25.592 9.764-35.355 0zm45.962 10.607c-15.621 15.621-40.948 15.621-56.569 0-15.621-15.621-15.621-40.947 0-56.568 15.621-15.621 40.948-15.621 56.569 0 15.621 15.621 15.621 40.947 0 56.568zm123.741-10.607c-9.763-9.763-9.763-25.592 0-35.355 9.763-9.763 25.592-9.763 35.355 0 9.763 9.763 9.763 25.592 0 35.355-9.763 9.764-25.592 9.764-35.355 0zm45.962 10.607c-15.621 15.621-40.948 15.621-56.569 0-15.621-15.621-15.621-40.947 0-56.568 15.621-15.621 40.948-15.621 56.569 0 15.621 15.621 15.621 40.947 0 56.568zm-130.814-95.46c-9.763-9.763-9.763-25.592 0-35.355 9.763-9.763 25.593-9.763 35.356 0 9.763 9.763 9.763 25.592 0 35.355-9.763 9.764-25.593 9.764-35.356 0zm45.962 10.607c-15.621 15.621-40.947 15.621-56.568 0-15.621-15.621-15.621-40.948 0-56.568 15.621-15.621 40.947-15.621 56.568 0 15.621 15.62 15.621 40.947 0 56.568z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function BellIcon({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={className}
    >
      <path d="M51 25c0-8.744-5.945-16.107-14-18.31V0H27v6.69C18.945 8.893 13 16.256 13 25v18.586l-7 7V56h16.059c.5 4.493 4.316 8 8.941 8s8.441-3.507 8.941-8H58v-5.414l-7-7V25zm-2 15H15v-4h34v4zM29 2h6v4.261C34.021 6.104 33.023 6 32 6s-2.021.104-3 .261V2zm3 6c9.374 0 17 7.626 17 17v9H15v-9c0-9.374 7.626-17 17-17zm-1 54c-3.52 0-6.433-2.613-6.92-6h13.84c-.487 3.387-3.4 6-6.92 6zm25-10.586V54H8v-2.586l7-7V42h34v2.414l7 7z"></path>
    </svg>
  );
}

export function FlagEnIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      className={className}
    >
      <circle cx="256" cy="256" r="256" fill="#F0F0F0"></circle>
      <g fill="#D80027">
        <path d="M244.87 256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256zM244.87 122.435h229.556a257.35 257.35 0 00-59.07-66.783H244.87v66.783zM256 512c60.249 0 115.626-20.824 159.356-55.652H96.644C140.374 491.176 195.751 512 256 512zM37.574 389.565h436.852a254.474 254.474 0 0028.755-66.783H8.819a254.474 254.474 0 0028.755 66.783z"></path>
      </g>
      <path
        fill="#0052B4"
        d="M118.584 39.978h23.329l-21.7 15.765 8.289 25.509-21.699-15.765-21.699 15.765 7.16-22.037a257.407 257.407 0 00-49.652 55.337h7.475l-13.813 10.035a255.58 255.58 0 00-6.194 10.938l6.596 20.301-12.306-8.941a253.567 253.567 0 00-8.372 19.873l7.267 22.368h26.822l-21.7 15.765 8.289 25.509-21.699-15.765-12.998 9.444A258.468 258.468 0 000 256h256V0c-50.572 0-97.715 14.67-137.416 39.978zm9.918 190.422l-21.699-15.765L85.104 230.4l8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765 8.289 25.509zm-8.289-100.083l8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zM220.328 230.4l-21.699-15.765L176.93 230.4l8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765 8.289 25.509zm-8.289-100.083l8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zm0-74.574l8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765z"
      ></path>
    </svg>
  );
}

export function FlagArIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className}>
      <g fillRule="evenodd" transform="translate(0 -932.362)">
        <circle cx="60" cy="992.362" r="60" fill="#50b748"></circle>
        <path
          fill="#109a32"
          d="M88.408 1045.151a60 60 0 004.01-2.3 60 60 0 004.879-3.489 60 60 0 004.506-3.959 60 60 0 004.088-4.389 60 60 0 003.629-4.773 60 60 0 003.134-5.113 60 60 0 002.61-5.4 60 60 0 001.459-3.999l-38.81-32.564c-.035-.029-.079-.046-.118-.069-.03-.016-.054-.035-.086-.048a.812.812 0 00-.313-.065c-.5 0-.798.399-.798.799 0 .109.026.215.068.316.013.032.036.057.053.086a.78.78 0 00.136.182c.012.01.016.027.028.037l3.037 2.549c-.007.044-.024.086-.024.13 0 .008.004.013.004.02l-8.379-7.031c-.05-.042-.11-.067-.167-.096-.025-.012-.047-.031-.073-.04a.817.817 0 00-.285-.053c-.4 0-.799.4-.799.8 0 .109.034.214.084.315.015.028.037.05.055.078.044.067.09.131.15.185.01.009.014.022.024.03l2.898 2.431c-.001.021-.012.04-.012.06a.7.7 0 00.084.315c.015.029.037.051.055.078a.9.9 0 00.15.186c.01.009.014.021.024.03l2.932 2.46c-.009.028-.01.057-.016.086-.007.036-.018.071-.02.108l-8.283-6.95-.023-.02c-.05-.04-.115-.066-.178-.095-.028-.013-.05-.035-.08-.045a1.088 1.088 0 00-.344-.052.78.78 0 00-.746.507c-.024.062-.027.128-.035.194l-8.373-7.026c-.038-.032-.09-.05-.137-.074-.03-.016-.056-.037-.09-.049a.97.97 0 00-.32-.052c-.4 0-.799.4-.799.8 0 .109.034.214.084.315.015.028.037.05.055.078.044.067.09.131.15.185.01.009.014.022.024.03l3 2.517c0 .006-.004.012-.004.018l-.002.016-8.418-7.065c-.04-.033-.087-.052-.13-.078-.03-.017-.053-.038-.083-.05a.686.686 0 00-.275-.065c-.5 0-.801.299-.801.799 0 .128.028.243.074.343.019.04.05.068.074.104.036.052.069.107.116.148.004.004.006.012.011.016l2.963 2.484v.002c-.017.068-.039.134-.039.203a.7.7 0 00.084.315c.014.028.037.05.055.078.044.067.09.131.15.185.01.009.014.022.024.03l2.921 2.45-.01.04c-.001.011-.006.022-.007.033l-8.4-7.049c-.034-.028-.078-.045-.118-.068-.029-.017-.054-.036-.086-.049a.812.812 0 00-.312-.064.788.788 0 00-.733 1.115c.014.032.037.057.055.088.038.065.08.127.135.18.01.01.016.025.027.035l3.04 2.55c-.008.045-.024.087-.024.131a.92.92 0 00.088.383c.017.038.043.067.064.102a.917.917 0 00.15.191c.013.012.019.03.032.041l2.879 2.414c-.001.01-.006.018-.006.028l-8.418-7.065c-.04-.033-.087-.052-.13-.078-.03-.017-.053-.038-.083-.05a.686.686 0 00-.275-.065c-.4 0-.801.399-.801.799a.7.7 0 00.084.314c.014.029.037.05.055.078a.92.92 0 00.15.186c.01.008.014.02.023.029l2.93 2.459a.813.813 0 00.022.586c.012.031.035.052.05.08.02.035.04.071.065.102l-5.29-4.438c-.04-.034-.087-.054-.132-.08-.028-.016-.051-.038-.08-.05a.693.693 0 00-.278-.065c-.5 0-.798.399-.798.799 0 .108.033.213.084.314.014.029.037.05.054.078.044.068.09.131.15.186.01.008.015.02.024.029l2.94 2.467a.673.673 0 00-.053.226c0 .13.028.243.074.344.019.04.05.068.074.104.036.052.069.107.116.148.004.004.006.012.011.016l2.946 2.47c-.006.04-.022.078-.022.118 0 .108.026.215.068.316.014.032.037.057.055.088.038.065.08.127.135.18.01.01.016.025.027.035l3.024 2.537c-.001.015-.008.03-.008.045 0 .006.004.011.004.017l-8.38-7.029c-.049-.042-.11-.067-.167-.096-.025-.012-.046-.031-.072-.04a.817.817 0 00-.286-.053c-.5 0-.798.4-.798.8 0 .13.028.243.074.344.018.04.05.068.074.104.036.052.069.107.115.148.005.004.007.012.012.016l2.95 2.474c-.008.038-.026.075-.026.114a.7.7 0 00.084.314c.014.029.037.05.055.078a.92.92 0 00.15.186c.01.008.014.02.023.029l2.93 2.459a.813.813 0 00-.043.234c0 .11.026.216.068.317.014.032.037.057.055.088.019.032.036.066.059.095l-5.23-4.388-.026-.022c-.053-.044-.114-.072-.176-.101-.021-.01-.04-.025-.062-.034a.825.825 0 00-.288-.054c-.5 0-.798.399-.798.799 0 .108.033.213.084.314.014.029.037.05.054.078.044.068.09.131.15.186.01.008.015.02.024.029l2.94 2.467a.673.673 0 00-.053.226.7.7 0 00.084.315c.014.028.037.05.055.078.043.067.09.131.15.185.01.009.014.022.023.03l2.899 2.431c0 .007-.004.013-.004.02 0 .01-.006.018-.006.027l-8.355-7.011c-.04-.033-.09-.051-.137-.075-.03-.015-.055-.035-.088-.047a.971.971 0 00-.32-.052.788.788 0 00-.733 1.115c.014.032.037.057.055.088a.785.785 0 00.135.18c.01.01.015.025.027.035l3.04 2.55c-.008.045-.024.087-.024.131a.7.7 0 00.084.315c.014.028.037.05.054.078.044.067.09.131.15.185.01.009.015.022.024.03l2.9 2.433c-.001.02-.013.039-.013.059a.7.7 0 00.084.314c.014.029.037.051.055.078.043.068.09.132.15.186.01.009.014.021.023.03l2.93 2.458a.813.813 0 00-.041.22l-8.355-7.013c-.04-.034-.094-.053-.143-.078-.028-.014-.051-.032-.082-.043a.971.971 0 00-.32-.052.79.79 0 00-.733 1.117c.014.032.037.057.055.088a.785.785 0 00.135.18c.01.01.015.025.027.034l3.03 2.543a.683.683 0 00.07.252c.014.029.037.051.054.078a.9.9 0 00.15.186c.01.009.015.021.024.03l2.94 2.466a.673.673 0 00-.053.227c0 .007.004.012.004.02l-8.38-7.032c-.049-.042-.11-.067-.167-.096-.025-.012-.046-.031-.072-.04a.817.817 0 00-.286-.053c-.4 0-.798.4-.798.8a.7.7 0 00.084.315c.014.028.037.05.054.078.044.067.09.131.15.185.01.009.015.022.024.03l2.899 2.431c-.002.021-.012.04-.012.06 0 .11.026.216.068.317.014.033.037.058.055.088a.785.785 0 00.135.18c.01.01.015.025.027.035l3.04 2.55c-.008.045-.024.087-.024.132 0 .008.003.013.004.021l-8.381-7.033c-.05-.04-.108-.066-.164-.094-.026-.013-.048-.033-.075-.043a.82.82 0 00-.285-.052c-.5 0-.8.4-.8.8a.7.7 0 00.083.315c.015.028.037.05.055.078.044.067.09.131.15.185.01.009.014.022.024.03l2.902 2.435c-.001.02-.013.038-.013.057 0 .108.033.214.084.314.014.029.037.051.054.078a.9.9 0 00.15.186c.01.009.015.021.024.03l2.93 2.458a.813.813 0 00.021.586c.012.03.034.05.05.076a.67.67 0 00.066.104l-5.291-4.438c-.04-.033-.087-.052-.131-.078-.029-.016-.053-.037-.082-.05a.686.686 0 00-.276-.065c-.5 0-.8.399-.8.799a.7.7 0 00.083.314c.015.029.037.051.055.078a.9.9 0 00.15.186c.01.009.014.021.024.03l2.941 2.468a.676.676 0 00-.052.225c0 .129.028.243.074.343.015.033.041.055.06.084.04.06.077.12.13.166.004.005.006.012.011.016l2.943 2.47c-.004.042-.02.076-.02.12a.95.95 0 00.065.351c.012.03.033.048.047.075a.662.662 0 00.127.177c.007.006.009.016.016.022l3.064 2.57v.002c-.002.022-.009.04-.01.063h-.001l-8.42-7.067c-.038-.031-.082-.05-.123-.074-.031-.018-.058-.04-.09-.055a.685.685 0 00-.274-.064c-.5 0-.8.4-.8.8a.81.81 0 00.074.344c.015.033.041.055.06.084.04.06.077.12.13.166.004.005.006.012.01.016l2.95 2.475c-.006.04-.023.072-.023.115a.82.82 0 00.074.344c.018.04.05.068.074.103.036.053.069.108.115.149.005.004.007.011.012.015l2.957 2.483c-.014.067-.033.13-.033.207 0 .11.027.215.07.316.013.03.033.054.049.082a.77.77 0 00.139.184c.01.01.015.025.027.035l3.037 2.549c-.005.045-.021.085-.021.133 0 .108.033.213.084.314.014.029.037.05.054.078.044.068.09.131.15.186.01.008.015.02.024.029l2.916 2.447c-.009.05-.03.092-.03.147a.81.81 0 00.075.343c.015.033.042.055.06.084.04.06.077.12.13.166.004.005.006.012.011.016l2.944 2.47c-.002.018-.007.033-.008.052l-8.412-7.059c-.034-.028-.077-.045-.116-.066-.024-.014-.045-.03-.072-.041a.79.79 0 00-.31-.065c-.5 0-.801.399-.801.899 0 .108.026.215.068.316.014.032.037.057.055.088a.785.785 0 00.135.18c.01.01.015.025.027.035l3.023 2.537c0 .016-.007.028-.007.045 0 .129.028.243.074.343.015.033.041.055.06.084.04.06.077.12.13.166.004.005.006.012.011.016l2.947 2.473c-.006.04-.023.073-.023.117a.82.82 0 00.074.344c.019.04.05.068.074.103.036.053.069.108.116.149.004.004.006.011.011.015l2.946 2.473c-.006.04-.022.077-.022.117 0 .11.028.215.07.317.013.03.033.053.05.082a.77.77 0 00.138.183c.01.01.016.026.027.035l3.024 2.537c-.001.016-.008.03-.008.045a.7.7 0 00.084.315c.014.028.037.05.055.078.043.067.09.131.15.185.01.009.014.022.023.03l2.926 2.455a.968.968 0 00-.031.195l-8.42-7.064c-.037-.032-.082-.05-.123-.075-.03-.018-.058-.04-.09-.054a.685.685 0 00-.273-.065c-.4 0-.801.401-.801.801 0 .107.03.212.08.31.018.037.047.064.07.098a.91.91 0 00.137.166c.01.009.014.021.023.03l2.916 2.447c-.009.05-.027.098-.027.148 0 .133.024.25.065.352.01.029.032.048.046.074a.662.662 0 00.127.178c.007.006.01.016.016.021l3.049 2.559-.002.016c0 .128.028.243.074.343.019.04.05.068.074.104.036.052.069.107.116.148.004.004.006.012.011.016l2.957 2.482c-.014.067-.033.13-.033.207 0 .13.028.243.074.344.015.032.04.053.059.082.04.062.078.123.13.17.006.004.008.012.012.016l2.952 2.476c-.006.034-.023.066-.024.1l-8.355-7.012c-.039-.032-.09-.05-.137-.074-.03-.016-.056-.037-.09-.049a.97.97 0 00-.32-.053c-.5 0-.8.301-.8.801 0 .133.023.25.064.352.01.028.032.048.046.074a.66.66 0 00.127.178c.007.006.01.015.016.021l3.049 2.559-.002.015c0 .13.028.243.074.344.015.032.04.053.059.082.039.062.077.123.13.17.005.004.007.012.012.016l2.946 2.47c-.006.04-.022.078-.022.118 0 .128.028.243.074.343.019.04.05.068.075.104.036.052.068.107.115.148.005.004.007.012.011.016l2.952 2.476c-.007.039-.026.075-.026.114 0 .129.028.243.074.343.014.03.037.048.053.075.041.066.084.13.14.18.004.002.005.008.009.011l30.935 25.96zm-2.449 1.246a60 60 0 001.256-.562 60 60 0 00.756-.434l-32.686-27.426c-.038-.032-.084-.05-.127-.076-.03-.017-.055-.04-.086-.053a.685.685 0 00-.275-.064c-.5 0-.8.4-.8.8 0 .13.027.244.073.344.014.03.037.048.053.075a.77.77 0 00.139.18l.01.011 2.966 2.488c-.016.066-.04.127-.04.202 0 .128.027.243.073.343.019.04.05.068.075.104.036.052.068.107.115.148.005.004.007.012.012.016l28.486 23.904z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#fff"
          d="M51.597 966.083c-.5 0-.8.3-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm-9.7 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.3.8-.8c0-.4-.3-.8-.8-.8zm3.3 3.3c-.5 0-.8.4-.8.8 0 .5.4.9.8.9s.8-.4.8-.9-.4-.8-.8-.8zm-9.7 0c-.5 0-.8.4-.8.8 0 .5.4.8.8.8s.8-.4.8-.8c0-.5-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8 0-.5-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8 0 .5.3.8.8.8s.8-.4.8-.8c0-.5-.3-.8-.8-.8zm6.5 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.3.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.3-.8-.8-.8zm-6.4 3.2c-.5 0-.8.3-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm-13 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.3.8-.8-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.3.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.3.8-.8-.3-.8-.8-.8zm6.5 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.3.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.4-.8-.8-.8zm-9.7 3.2c-.5 0-.8.4-.8.8s.4.8.8.8.8-.3.8-.8-.4-.8-.8-.8zm-19.4.1c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8c0-.5-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8 0-.5-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.4.8-.8c0-.5-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8c0-.5-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8 0-.5-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.4.8-.8c0-.5-.3-.8-.8-.8zm6.5 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8c0-.5-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8 0-.5-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8 0-.5-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.4.8-.8c0-.5-.3-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8c.1-.5-.3-.8-.8-.8zm3.3 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8 0-.5-.4-.8-.8-.8zm-19.4 3.1c-.5 0-.8.3-.8.8s.4.8.8.8.8-.3.8-.8-.4-.8-.8-.8zm-19.4 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm6.5 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8c.1-.4-.3-.8-.8-.8zm3.3 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm-25.8 3.3c-.5 0-.8.4-.8.8 0 .5.4.8.8.8s.8-.4.8-.8c0-.5-.4-.8-.8-.8zm-19.4 0c-.5 0-.8.4-.8.8 0 .5.4.8.8.8s.8-.4.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8 0 .5.3.8.8.8s.8-.4.8-.8-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8 0 .5.4.8.8.8s.8-.4.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8 0 .5.3.8.8.8s.8-.4.8-.8-.3-.8-.8-.8zm6.5 0c-.5 0-.8.4-.8.8 0 .5.4.8.8.8s.8-.4.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8s-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8 0 .5.3.8.8.8s.8-.4.8-.8-.3-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8 0 .5.4.8.8.8s.8-.4.8-.8c.1-.4-.3-.8-.8-.8zm3.3 0c-.4 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8 0 .5.3.8.8.8s.8-.4.8-.8-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8 0 .5.4.8.8.8s.8-.4.8-.8c-.1-.4-.4-.8-.8-.8zm-29.1 3.2c-.5 0-.8.3-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm-16.2 0c-.4 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm3.3 0c-.5 0-.8.3-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm6.5 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.3.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.3.8-.8-.3-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.3.8-.8-.3-.8-.8-.8zm3.3 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.3.8-.8-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.3.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.4-.8-.8-.8zm-32.3 3.3c-.5 0-.8.3-.8.8s.3.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm-13 0c-.5 0-.8.3-.8.8 0 .4.3.8.8.8s.8-.4.8-.8c0-.5-.3-.8-.8-.8zm3.3 0c-.5 0-.8.3-.8.8 0 .4.4.8.8.8s.8-.4.8-.8c0-.5-.4-.8-.8-.8zm3.2 0c-.4 0-.8.3-.8.8 0 .4.4.8.8.8.5 0 .8-.4.8-.8 0-.5-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8 0 .4.3.8.8.8s.8-.4.8-.8c0-.5-.3-.8-.8-.8zm6.5 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8c.1-.4-.3-.8-.8-.8zm3.3 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8c-.1-.4-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm-32.3 3.2c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8c0-.5-.4-.8-.8-.8zm-13 0c-.5 0-.8.4-.8.9 0 .4.3.8.8.8s.8-.4.8-.8c0-.5-.3-.9-.8-.9zm3.3 0c-.5 0-.8.4-.8.9 0 .4.4.8.8.8s.8-.4.8-.8c0-.5-.4-.9-.8-.9zm3.2 0c-.4 0-.8.4-.8.9 0 .4.4.8.8.8.5 0 .8-.4.8-.8 0-.5-.4-.9-.8-.9zm3.2 0c-.5 0-.8.4-.8.9 0 .4.3.8.8.8s.8-.4.8-.8c0-.5-.3-.9-.8-.9zm6.5 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8c.1-.4-.3-.8-.8-.8zm3.3 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8c-.1-.4-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm-32.3 3.2c-.5 0-.8.4-.8.8 0 .5.4.8.8.8s.8-.3.8-.8c0-.4-.4-.8-.8-.8zm-9.7.1c-.5 0-.8.3-.8.8s.4.8.8.8.8-.3.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.3.8.8.8.8-.3.8-.8-.3-.8-.8-.8zm6.5 0c-.5 0-.8.3-.8.8s.4.8.8.8.8-.3.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.3-.8-.8-.8zm3.3 0c-.5 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.3.8.8.8.8-.3.8-.8-.3-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.4.8.8.8.8-.3.8-.8-.3-.8-.8-.8zm3.3 0c-.4 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.3.8.8.8.8-.3.8-.8-.3-.8-.8-.8zm3.3 0c-.5 0-.8.3-.8.8s.4.8.8.8.8-.3.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.3.8.8.8.8-.3.8-.8-.3-.8-.8-.8zm-35.5 3.2c-.5 0-.8.3-.8.8s.4.8.8.8.8-.3.8-.8-.4-.8-.8-.8zm38.7 0c-.5 0-.8.3-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm3.3 0c-.5 0-.8.3-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm-48.5 0c-.4 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.3.8.8.8.8-.3.8-.8-.3-.8-.8-.8zm6.5 0c-.5 0-.8.3-.8.8s.4.8.8.8.8-.3.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.3-.8-.8-.8zm3.3 0c-.5 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.3.8.8.8.8-.3.8-.8-.3-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.4.8.8.8.8-.3.8-.8c.1-.5-.3-.8-.8-.8zm3.3 0c-.4 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.3.8.8.8.8-.3.8-.8-.3-.8-.8-.8zm3.3 0c-.5 0-.8.3-.8.8s.4.8.8.8.8-.3.8-.8c-.1-.5-.4-.8-.8-.8zm3.2 0c-.4 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.3.8.8.8.8-.3.8-.8-.3-.8-.8-.8zm-35.5 3.2c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm38.7 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm-54.9 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm6.5 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8c.1-.4-.3-.8-.8-.8zm3.3 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8c-.1-.4-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm-35.5 3.2c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm38.7 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm-51.7 0c-.5 0-.8.4-.8.8 0 .5.3.8.8.8s.8-.4.8-.8-.3-.8-.8-.8zm6.5 0c-.5 0-.8.4-.8.8 0 .5.4.8.8.8s.8-.4.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8s-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8 0 .5.3.8.8.8s.8-.4.8-.8-.3-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8 0 .5.4.8.8.8s.8-.4.8-.8c.1-.4-.3-.8-.8-.8zm3.3 0c-.4 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8 0 .5.3.8.8.8s.8-.4.8-.8-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8 0 .5.4.8.8.8s.8-.4.8-.8c-.1-.4-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8 0 .5.3.8.8.8s.8-.4.8-.8-.3-.8-.8-.8zm-35.5 3.2c-.5 0-.8.3-.8.8s.4.8.8.8.8-.3.8-.8-.4-.8-.8-.8zm38.7 0c-.5 0-.8.3-.8.8s.3.8.8.8.8-.3.8-.8-.3-.8-.8-.8zm3.3 0c-.5 0-.8.3-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm-51.7.1c-.5 0-.8.3-.8.8s.3.8.8.8.8-.4.8-.8c0-.5-.3-.8-.8-.8zm6.5 0c-.5 0-.8.3-.8.8s.4.8.8.8.8-.4.8-.8c0-.5-.4-.8-.8-.8zm3.2 0c-.4 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8 0-.5-.3-.8-.8-.8zm3.3 0c-.5 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8 0-.5-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.3.8.8.8.8-.4.8-.8c0-.5-.3-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.4.8.8.8.8-.4.8-.8c.1-.5-.3-.8-.8-.8zm3.3 0c-.4 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8 0-.5-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8 0-.5-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.3.8.8.8.8-.4.8-.8c0-.5-.3-.8-.8-.8zm3.3 0c-.5 0-.8.3-.8.8s.4.8.8.8.8-.4.8-.8c-.1-.5-.4-.8-.8-.8zm3.2 0c-.4 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8 0-.5-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.3.8.8.8.8-.4.8-.8c0-.5-.3-.8-.8-.8zm-35.5 3.2c-.5 0-.8.3-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm38.7 0c-.5 0-.8.4-.8.8s.3.8.8.8.8-.3.8-.8-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8s.4.8.8.8.8-.3.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.4-.8-.8-.8zm-42 0c-.5 0-.8.3-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.3-.8-.8-.8zm3.3 0c-.5 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.4.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm3.3 0c-.4 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm3.3 0c-.5 0-.8.3-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.3-.8.8s.3.8.8.8.8-.4.8-.8-.3-.8-.8-.8zm-32.3 3.2c-.5 0-.8.4-.8.8 0 .5.4.8.8.8s.8-.4.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8s-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8 0 .5.3.8.8.8s.8-.4.8-.8-.3-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8 0 .5.4.8.8.8s.8-.4.8-.8c.1-.4-.3-.8-.8-.8zm3.3 0c-.4 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8 0 .5.3.8.8.8s.8-.4.8-.8-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8 0 .5.4.8.8.8s.8-.4.8-.8c-.1-.4-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8 0 .5.3.8.8.8s.8-.4.8-.8-.3-.8-.8-.8zm-32.3 3.2c-.5 0-.8.4-.8.8 0 .5.4.8.8.8s.8-.4.8-.8-.4-.8-.8-.8zm3.2 0c-.4 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8s-.3-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8 0 .5.3.8.8.8s.8-.4.8-.8-.3-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8 0 .5.4.8.8.8s.8-.4.8-.8c.1-.4-.3-.8-.8-.8zm3.3 0c-.4 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm3.2 0c-.5 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.4.8-.8s-.4-.8-.8-.8zm-16.2 3.3c-.4 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.3-.8-.8-.8zm16.2 0c-.5 0-.8.3-.8.8s.4.8.8.8c.5 0 .8-.3.8-.8s-.4-.8-.8-.8z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
}

export function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M11 19H8a1 1 0 000 2h3a1 1 0 000-2zm9-4h-1.16A8.18 8.18 0 0020 12.05a1 1 0 00-.34-.93 1 1 0 00-1-.19 6 6 0 01-1.92.32 6.06 6.06 0 01-6.06-6 6.93 6.93 0 01.1-1 1 1 0 00-.35-.92 1 1 0 00-1-.18A8.06 8.06 0 004 10.68 8 8 0 005.27 15H4a1 1 0 000 2h16a1 1 0 000-2zm-3.72 0H7.83a6 6 0 01.88-9.36 8.06 8.06 0 008.05 7.61 7 7 0 00.79 0A6.08 6.08 0 0116.28 15zM16 19h-1a1 1 0 000 2h1a1 1 0 000-2z"></path>
    </svg>
  );
}

export function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M17.66 8.34a1 1 0 00.7-.29l.71-.71a1 1 0 10-1.41-1.41l-.66.71a1 1 0 000 1.41 1 1 0 00.66.29zM12 6a1 1 0 001-1V4a1 1 0 00-2 0v1a1 1 0 001 1zm-8 6H3a1 1 0 000 2h1a1 1 0 000-2zm1.64-3.95a1 1 0 00.7.29 1 1 0 00.71-.29 1 1 0 000-1.41l-.71-.71a1 1 0 00-1.41 1.41zM21 12h-1a1 1 0 000 2h1a1 1 0 000-2zm-10 7H8a1 1 0 000 2h3a1 1 0 000-2zm7-4h-.88a5.39 5.39 0 00.38-2 5.5 5.5 0 00-11 0 5.39 5.39 0 00.38 2H6a1 1 0 000 2h12a1 1 0 000-2zm-3.15 0h-5.7a3.44 3.44 0 01-.65-2 3.5 3.5 0 017 0 3.44 3.44 0 01-.65 2zM16 19h-1a1 1 0 000 2h1a1 1 0 000-2z"></path>
    </svg>
  );
}

export const IconArrowUp = ({ fill = "fill-primary" }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="5"
    fill="none"
    viewBox="0 0 8 5"
  >
    <path
      className={fill}
      d="M7.53 4.69L3.937.07a.199.199 0 00-.303 0L.041 4.69A.191.191 0 00.193 5h7.186a.194.194 0 00.191-.212.191.191 0 00-.04-.099z"
    ></path>
  </svg>
);

export const IconArrowDown = ({ fill = "fill-primary" }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="5"
    fill="none"
    viewBox="0 0 8 5"
  >
    <path
      className={fill}
      d="M.041.31l3.593 4.62a.199.199 0 00.303 0L7.53.31A.191.191 0 007.379 0H.193A.194.194 0 000 .212c.004.036.018.07.04.099z"
    ></path>
  </svg>
);
