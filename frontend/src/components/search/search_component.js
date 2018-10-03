import React from 'react'
import styled from 'styled-components'

const Form = styled.div`
    text-align: center;
    padding: 3em 2em 3em 2em;
    // padding-top: 3em;
    // padding-left: 2em;
    // padding-right: 2em;
`

const Input = styled.input`
    width: 80%;
    height: 40px;
    padding: 0.75em;
`

const Button = styled.input`
    color: white;
    width: 20%;
    height: 40px;
    border-radius: 5px;
    border-color: #57a9bb;
    background-color: #57a9bb;
    font-weight: bold;
`

class SearchComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            search_value: ''
        }
    }

    setSearchValue = value => {
        this.setState({
            search_value: value.target.value
        })
    }

    onSearchClick = () => {
        this.props.callbackValue(this.state.search_value)
    }

    _handleKeyPress = e => {
        if (e.key === 'Enter') {
            this.onSearchClick()
        }
    }

    render = () => {
        return (<div className='container'>
            <Form action='/'>
                <Input type='text' name='search_value' onChange={this.setSearchValue} placeholder='Search product name ..' onKeyPress={this._handleKeyPress}  />
                <Button type='button' value='Search' onClick={this.onSearchClick} />
            </Form>
        </div>)
    }
}

export default SearchComponent