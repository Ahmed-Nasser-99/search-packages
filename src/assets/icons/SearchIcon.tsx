import { createIcon } from "@chakra-ui/react";

const SearchIcon = createIcon({
  displayName: "SearchIcon",
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 13C3.5 7.75329 7.75329 3.5 13 3.5C18.2467 3.5 22.5 7.75329 22.5 13C22.5 18.2467 18.2467 22.5 13 22.5C7.75329 22.5 3.5 18.2467 3.5 13ZM13 0.5C6.09644 0.5 0.5 6.09644 0.5 13C0.5 19.9036 6.09644 25.5 13 25.5C15.9112 25.5 18.59 24.5048 20.7147 22.836L26.9393 29.0607C27.5251 29.6464 28.4749 29.6464 29.0607 29.0607C29.6464 28.4749 29.6464 27.5251 29.0607 26.9393L22.836 20.7147C24.5048 18.59 25.5 15.9112 25.5 13C25.5 6.09644 19.9036 0.5 13 0.5Z"
        fill="currentColor"
      />
    </>
  ),
  viewBox: "0 0 30 30",
  defaultProps: {
    width: "30px",
    height: "30px",
  },
});

export default SearchIcon;
