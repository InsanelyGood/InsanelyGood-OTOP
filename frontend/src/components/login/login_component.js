import React from 'react'
import { Input, Label, FormFeedback } from 'reactstrap';
import styled from 'styled-components'
import '../../css/login&regis.css'
import Cookies from 'js-cookie';
import { getUserLogin } from '../../api/userid';

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
    background-color: #D78A04;
    font-weight: bold;
`

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            invalidUsername: false,
            invalidPassword: false,
        };
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async event => {
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        const login = await getUserLogin(data)
        if(login.status === 500) {
            this.setState({ invalidUsername: true })
            this.setState({ invalidPassword: true })
            console.log('login ',login);
        } else if (login.status === 200){
            this.setState({ invalidUsername: false })
            this.setState({ invalidPassword: false })
            let role = await login.json()
            if(role.role === 'admin') {
                Cookies.set('role', 'admin');
            }
            Cookies.set('username', this.state.username);
            window.location.href = '/'
        }
    }

    render = () => {
        return (
            <Div inline>
                <FormGroups>
                    <Label>Username</Label>
                    {
                        this.state.invalidUsername &&
                        <alert >
                            <Input invalid type="text" name="username" value={this.state.username} onChange={this.handleInputChange} placeholder="Username" />
                            <FormFeedback>Invalid username. Try again</FormFeedback>
                        </alert>
                    }
                    {
                        !this.state.invalidUsername &&
                        <alert >
                            <Input type="text" name="username" onChange={this.handleInputChange} placeholder="Username" />
                        </alert>
                    }
                </FormGroups>
                <FormGroups>
                    <Label>Password</Label>
                    {
                        this.state.invalidPassword &&
                        <alert >
                            <Input invalid type="password" name="password" onChange={this.handleInputChange} placeholder="Password" />
                            <FormFeedback>Invalid password. Try again</FormFeedback>
                        </alert>
                    }
                    {
                        !this.state.invalidPassword &&
                        <alert >
                            <Input type="password" name="password" onChange={this.handleInputChange} placeholder="Password" />
                        </alert>
                    }
                </FormGroups>
                <FormGroups>
                    <Buttons onClick={this.handleSubmit} id="myuser" type="submit" value='Login' href='/' />
                </FormGroups>
            </Div>
        );
    }
}

export default LoginComponent