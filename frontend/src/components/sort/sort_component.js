import React, {Component} from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Sort extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: false
        }
    }

    toggle = ()=> {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    onPriceClick = ()=> {
        this.props.changeSortType('price')
    }

    onNameClick = ()=> {
        this.props.changeSortType('name')
    }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>Sort By</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={this.onPriceClick}>Price</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.onNameClick}>Name</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }
}