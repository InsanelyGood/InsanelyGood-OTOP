import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
    margin-left: 40px;
    position: sticky;
    position: -webkit-sticky;
    top: 69px; /* required */
`
const Content = styled.div`
    border-radius: 25px;
    width: inherit;
    min-height: 100px;
    background-color: #00c6a9;
    opacity: 20%;
`
const Head = styled.div`
    -webkit-box-shadow:0px 5px 25px -5px black;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    height: 90px;
    background-color: black;
`
const Text = styled.h1`
    text-align: center;
    font-weight: bold;
    color: white;
    padding-top: 22px;
`
const Label = styled.span`
    font-weight: bold;
    color: black;
    margin: 15px;
    margin-left: 50px;
    font-size: 21px;
`
const BGroup = styled.div`
    margin: 30px;
    margin-left: 36px;
    display: Block;
`
const Tab = styled.div`
    border-radius: 7px;
    background-color: white;
    margin: 20px;
`
const CheckBox = styled.span`
    margin: 3px;
    margin-left: 10px;
    margin-right: 20px;
    border-radius: 7px;
    position: absolute;
    height: 25px;
    width: 25px;
`
const CheckMark = styled.span`
    width: 50%;
    height: 50%;
    margin: 6px;
    position: inherit;
    border-radius: 5px;
    background-color: #2196F3;
`

class Categories extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            types: []
        }
    }

    checkedType = (type)=> {
        this.setState({
            types: [...this.state.types,type]
        }, ()=> {
            this.props.changeTypes(this.state.types)
        })
    }

    unCheckedType = (type)=> {
        this.setState({
            types: this.state.types.filter((ptype) => ptype !== type)
        },()=> {
            this.props.changeTypes(this.state.types)
        })
        
    }

    render = () => {
        return (
            <Block>
                <Content>
                    <Head>
                        <Text>Categories</Text>
                    </Head>
                    <BGroup>
                            <Tab>
                                <Check type='Bag' checkedType={this.checkedType} unCheckedType={this.unCheckedType}/>
                                <Label>Bag</Label>
                            </Tab>
                            <Tab>
                                <Check type='Bloom' checkedType={this.checkedType} unCheckedType={this.unCheckedType}/>
                                <Label>Bloom</Label>
                            </Tab>
                            <Tab>
                                <Check type='Cloth' checkedType={this.checkedType} unCheckedType={this.unCheckedType}/>
                                <Label>Cloth</Label>
                            </Tab>
                            <Tab>
                                <Check type='Food' checkedType={this.checkedType} unCheckedType={this.unCheckedType}/>
                                <Label>Food</Label>
                            </Tab>
                            <Tab>
                                <Check type='Shoe' checkedType={this.checkedType} unCheckedType={this.unCheckedType}/>
                                <Label>Shoe</Label>
                            </Tab>
                        </BGroup>
                        <br/>
                </Content>
            </Block>
        )
    }
}

export default Categories

class Check extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            checked: false,
            color: '#eee',
            opacity: 0
        }
    }

    onClick = ()=> {
        this.setState({
            checked: !this.state.checked
        },()=> {
            if(this.state.checked) {
                this.setState({
                    opacity: 100
                })
                this.props.checkedType(this.props.type)
            } else {
                this.setState({
                    opacity: 0
                })
                this.props.unCheckedType(this.props.type)
            }
        })
        
    }

    mouseOver = ()=> {
        if(!this.state.checked) {
            this.setState({
                color: '#ccc'
            })
        }
    }

    mouseOut = ()=> {
        if(!this.state.checked) {
            this.setState({
                color: '#eee'
            })
        }
    }

    render = ()=> {
        return(
            <CheckBox 
                style={{backgroundColor: this.state.color}}
                onMouseOver={this.mouseOver} 
                onMouseOut={this.mouseOut} 
                onClick={this.onClick}>
                <CheckMark style={{opacity: this.state.opacity}}></CheckMark>
            </CheckBox>
        )
    }
}