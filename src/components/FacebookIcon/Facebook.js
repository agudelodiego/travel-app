import * as React from "react"

const Facebook = (props) => (
  <svg
    width={6}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.545 2.8a3.437 3.437 0 0 0-1-.166c-.405 0-1.28.28-1.28.824v1.3h2.077v2.19H3.265v6.042H1.173V6.948H.143v-2.19h1.03V3.655c0-1.663.718-3.046 2.451-3.046.594 0 1.655.033 2.233.247L5.545 2.8Z"
      fill={props.fill}
    />
  </svg>
)

export default Facebook;
