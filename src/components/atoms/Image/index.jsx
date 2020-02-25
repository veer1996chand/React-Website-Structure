import React from "react"
import PropTypes from "prop-types"

const Image = (props) => {
  return <img {...props} />
}

Image.defaultProps = {
  alt: "Image",
  title: "title"
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

export default Image
