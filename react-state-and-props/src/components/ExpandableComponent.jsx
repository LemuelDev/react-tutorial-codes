import { useState } from "react"
// import PropTypes from "prop-types";

const ExpandableComponent = ({children, maxChars}) => {
    const [showFullText, setShowFullText] = useState(false);

    const text = showFullText ? children : children.substring(0,  maxChars)

    // if (children.length <= maxChars) return <div>{children}</div>;
  return (
    <div>
        {text}...
        <button onClick={() => setShowFullText(!showFullText)}>
        {showFullText ? "Less" : "More"}
        </button>
    </div>
  )
}

export default ExpandableComponent