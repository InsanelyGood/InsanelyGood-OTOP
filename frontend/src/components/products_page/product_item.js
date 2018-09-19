import React from 'react';
import '../../css/product_item.css';

class ProductItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className='col-md-4 product-item'>
                <a href='https://www.sephora.co.th/products/tarte-amazonian-clay-12-hour-blush/v/natural-beauty'>
                    <img
                        src='https://static-th.lximg.com/images/pictures/15666/closeup_a4c8f05fecd7193ebce176a085a3eca7e6fc6433_1493298467_10939_Tarte_WEB.jpg'
                        className='product-card-image'
                    />
                </a>
                <a href='https://www.sephora.co.th/products/tarte-amazonian-clay-12-hour-blush/v/natural-beauty' className='product-card-description'>
                    <p className='product-card-band'>Product 1</p>
                    <p className='product-card-description'>Product short description</p>
                    <p className='product-card-price'>Price: <span>500฿</span></p>
                </a>
            </div>
        );
    }

}

export default ProductItem;