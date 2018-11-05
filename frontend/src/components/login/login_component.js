import React from 'react'
import { Input, Label, FormFeedback } from 'reactstrap';
import styled from 'styled-components'
import '../../css/login&regis.css'

const Div = styled.div`
    margin: auto;
    width:100%;
`

const FormGroups = styled.div`
    padding: 10px 0;
    width: 100%;
`

const Buttons = styled.input`
    text-align: center;
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
            username: '',
            password: '',
            notHaveUsername: false,
            notHavePassword: false
        };
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async event => {

        if (this.state.username === '') {
            this.setState({ notHaveUsername: true });
        }
        else {
            this.setState({ notHaveUsername: false })
        }

        if (this.state.password === '') {
            this.setState({ notHavePassword: true });
        } else {
            this.setState({ notHavePassword: false })
        }
        // const res = await setUserLogin({
        //     username: this.state.username,
        //     password: this.state.password,
        // })
        // console.log(res.status);
    }

    render() {
        return (
            <Div inline>
            <form action="http://localhost:8000/users/login" method="POST">
                <FormGroups>
                    <Label>Username</Label>
                    {
                        this.state.notHaveUsername &&
                        <alert >
                            <Input invalid type="text" name="username" onChange={this.handleInputChange} placeholder="Username" />
                            <FormFeedback>Please enter username.</FormFeedback>
                        </alert>
                    }
                    {
                        !this.state.notHaveUsername &&
                        <alert >
                            <Input type="text" name="username" onChange={this.handleInputChange} placeholder="Username" />
                        </alert>
                    }
                </FormGroups>
                <FormGroups>
                    <Label>Password</Label>
                    {
                        this.state.notHavePassword &&
                        <alert >
                            <Input invalid type="password" name="password" onChange={this.handleInputChange} placeholder="Password" />
                            <FormFeedback>Please enter password.</FormFeedback>
                        </alert>
                    }
                    {
                        !this.state.notHavePassword &&
                        <alert >
                            <Input type="password" name="password" onChange={this.handleInputChange} placeholder="Password" />
                        </alert>
                    }
                </FormGroups>
                <FormGroups>
                    <Buttons className="loginBtn" onClick={this.handleSubmit} type="submit" value='Login' href='/' />
                </FormGroups>
                </form>
            </Div>
        );
    }
}

export default LoginComponent