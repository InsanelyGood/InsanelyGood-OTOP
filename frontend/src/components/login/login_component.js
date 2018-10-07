import React from 'react'
import { Input, Label } from 'reactstrap';
import styled from 'styled-components'

const Div = styled.div`
    // padding: 5% 0; 
    margin: auto;
    width:100%;
`

const FormGroups = styled.div`
    padding: 10px 0;
    // margin: auto;
    width: 100%;
`

const Buttons = styled.input`
    text-align: center;
    // margin: auto;
    width: 100%;
    color: white;
    height: 40px;
    border-radius: 5px;
    border-color: #57a9bb;
    background-color: #57a9bb;
    font-weight: bold;
`


class LoginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    onLoginClick = event => {
        event.preventDefault();
    }



    render() {
        return (
            <Div >
                <form onSubmit={this.handleSubmit}>

                    <FormGroups>
                        <Label>Email</Label>
                        <Input type="email" name="email" placeholder="Email" />
                    </FormGroups>
                    <FormGroups>
                        <Label>Password</Label>
                        <Input type="password" name="password" placeholder="Password" />
                    </FormGroups>
                    <FormGroups>
                        <Buttons type="submit" value='Login' />
                    </FormGroups>

                </form>
            </Div>
        );
    }
}

export default LoginComponent