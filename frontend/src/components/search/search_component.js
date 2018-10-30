import React from 'react'
import styled from 'styled-components'

const Form = styled.div`
    text-align: center;
    padding: 1em 1em 1em 1em;
`

const Input = styled.input`
  border-radius: 5px;
  width: 80%;
  height: 40px;
  padding: 0.75em;
`;

const Button = styled.button`
    color: white;
    width: 40px;
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
            <Form>
                <Input type='text' name='search_value' onChange={this.setSearchValue} placeholder='Search product name ..' onKeyPress={this._handleKeyPress}  />
                <Button onClick={this.onSearchClick} ><ion-icon name="search"></ion-icon></Button>
            </Form>
        </div>)
    }
}

export default SearchComponent