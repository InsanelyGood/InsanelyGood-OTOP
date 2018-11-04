import React, {Component} from 'react'

export default class PauseSlider extends Component {

    constructor(props) {
        super(props)
    }

    samples = ()=> {
        return this.props.images.map((product)=> (<img src={product.image}/>))
    }

    render() {
        return(<div></div>)
    }
}