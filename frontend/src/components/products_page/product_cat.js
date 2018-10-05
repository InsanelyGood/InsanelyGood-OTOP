import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
    margin: 40px;
    position: relative;
`
const Content = styled.div`
    position: sticky;
    border-radius: 25px;
    width: 380px;
    height: 800px;
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

class Categories extends React.Component {
    render = () => {
        return (
            <Block>
                <Content>
                    <Head>
                        <Text>Categories</Text>
                        <Text2>...</Text2>
                    </Head>
                </Content>
            </Block>
        )
    }
}

export default Categories