import * as React from "react"

const Instagram = (props) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill={props.fill}>
      <path d="M14.567.934H2.5a2.503 2.503 0 0 0-2.5 2.5V15.5C0 16.88 1.122 18 2.5 18h12.067c1.378 0 2.5-1.121 2.5-2.5V3.434c0-1.379-1.122-2.5-2.5-2.5Zm1.5 14.566c0 .827-.673 1.5-1.5 1.5H2.5c-.827 0-1.5-.673-1.5-1.5V3.434c0-.827.673-1.5 1.5-1.5h12.067c.827 0 1.5.673 1.5 1.5V15.5Z" />
      <path d="M14.033 2.967a1.001 1.001 0 0 0 0 2 1.001 1.001 0 0 0 0-2ZM8.533 4.967a4.505 4.505 0 0 0-4.5 4.5c0 2.481 2.02 4.5 4.5 4.5 2.482 0 4.5-2.019 4.5-4.5 0-2.482-2.018-4.5-4.5-4.5Zm0 8c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill={props.fill}
          transform="translate(0 .934)"
          d="M0 0h17.067v17.067H0z"
        />
      </clipPath>
    </defs>
    {/* <path
          fill={props.fill}
          transform="translate(0 .934)"
          d="M0 0h17.067v17.067H0z"
    /> */}
  </svg>
)

export default Instagram;
