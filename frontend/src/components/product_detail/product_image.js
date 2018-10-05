import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types";

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`

class ProductImage extends React.Component {
    render = () => {
        return (<Image src={this.props.imageUrl} alt='No image' />)
    }
}

ProductImage.propTypes = {
  image_url: PropTypes.string
};

ProductImage.defaultProps = {
  image_url:
    "http://www.khaosodenglish.com/wp-content/uploads/2017/08/pasted-image-0.png"
};

export default ProductImage