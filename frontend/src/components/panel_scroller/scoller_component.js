import React, {Component} from 'react-dom'
import styled from 'styled-components'

const Line = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
`

export default class Scroller extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Line></Line>
        )
    }
}