import React, {Component} from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Sort extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: false,
            text: 'Sort By'
        }
    }

    toggle = ()=> {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    onPriceClick = ()=> {
        this.setState({
            text: 'Sort by Price'
        })
        this.props.changeSortType('price')
    }

    onNameClick = ()=> {
        this.setState({
            text: 'Sort by Name'
        })
        this.props.changeSortType('name')
    }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>{this.state.text}</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={this.onPriceClick}>Price</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.onNameClick}>Name</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }
}