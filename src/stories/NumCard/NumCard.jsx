import React from "react"
import PropTypes from "prop-types"
import "./numCard.css"

export const NumCard = ({
  className,
  title,
  subtitle,
  children,
  isHeaderButton,
  headerButtonHandler,
  ...props
}) => {
  return (
    <div className={`num-card-wrapper ${className}`}>
      <div className="num-card-header">
        <div>
          <h2 className={"num-card-title h2"}>{title}</h2>
          <h1 className={"num-card-subtitle h1"}>{subtitle}</h1>
        </div>

        {isHeaderButton && (
          <span onClick={headerButtonHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 19H4C3.46957 19 2.96086 18.7893 2.58579 18.4142C2.21071 18.0391 2 17.5304 2 17V7C2 6.46957 2.21071 5.96086 2.58579 5.58579C2.96086 5.21071 3.46957 5 4 5H9"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 5H20C20.5304 5 21.0391 5.21071 21.4142 5.58579C21.7893 5.96086 22 6.46957 22 7V17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H15"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 22L15 19L18 16"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 2L9 5L6 8"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </div>
      <div className="num-card-body">{children}</div>
    </div>
  )
}

NumCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  isHeaderButton: PropTypes.bool,
  headerButtonHandler: PropTypes.func,
}

NumCard.defaultProps = {
  className: "",
  title: "",
  subtitle: "",
  children: undefined,
  isHeaderButton: false,
  headerButtonHandler: undefined,
}
