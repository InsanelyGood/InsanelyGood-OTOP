import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
    margin: 40px;
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
    height: 120px;
    background-color: black;
`
const Text = styled.h1`
    text-align: center;
    font-weight: bold;
    color: white;
    padding-top: 22px;
`
const Text2 = styled.h1`
    text-align: center;
    font-weight: bold;
    color: #c1c1c1;
`
const Text3 = styled.span`
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
            console.log(this.state.types);
            this.props.changeTypes(this.state.types)
        })
    }

    unCheckedType = (type)=> {
        this.setState({
            types: this.state.types.filter((ptype) => ptype !== type)
        },()=> {
            console.log(this.state.types);
            this.props.changeTypes(this.state.types)
        })
        
    }

    render = () => {
        return (
            <Block>
                <Content>
                    <Head>
                        <Text>Categories</Text>
                        <Text2>...</Text2>
                    </Head>
                    <BGroup>
                            <Tab>
                                <Check type='Bag' checkedType={this.checkedType} unCheckedType={this.unCheckedType}/>
                                <Text3>Bag</Text3>
                            </Tab>
                            <Tab>
                                <Check type='Bloom' checkedType={this.checkedType} unCheckedType={this.unCheckedType}/>
                                <Text3>Bloom</Text3>
                            </Tab>
                            <Tab>
                                <Check type='Cloth' checkedType={this.checkedType} unCheckedType={this.unCheckedType}/>
                                <Text3>Cloth</Text3>
                            </Tab>
                            <Tab>
                                <Check type='Food' checkedType={this.checkedType} unCheckedType={this.unCheckedType}/>
                                <Text3>Food</Text3>
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
            content: ''
        }
    }

    onClick = ()=> {
        this.setState({
            checked: !this.state.checked
        },()=> {

            console.log(this.state.checked);
        

            if(this.state.checked) {
                this.setState({
                    color: '#2196F3',
                    content: '✔'
                })
                this.props.checkedType(this.props.type)
            } else {
                this.setState({
                    color: '#eee',
                    content: ''
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
            <CheckBox style={{backgroundColor: this.state.color, content: this.state.content}} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={this.onClick}></CheckBox>
        )
    }
}