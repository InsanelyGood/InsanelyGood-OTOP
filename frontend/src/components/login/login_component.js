import React from 'react'
import { Input, Label, FormFeedback } from 'reactstrap';
import styled from 'styled-components'
import '../../css/login&regis.css'
import Cookies from 'js-cookie';
import { setUserLogin, getUserLogin } from '../../api/userid';

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
            notHaveUsername: false,
            invalidPassword: false
        };
    }

    async componentDidMount() {
        const login = await getUserLogin(Cookies.get('username'))
        this.setState({
            username: login.username,
            password: login.password
        }, () => console.log('pass',this.state.password))
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async event => {
        if (this.state.username !== '') {
            this.setState({ notHaveUsername: false })
            var attribute = document.getElementById("mylink")
            attribute.setAttribute('herf', "http://localhost:3000/users/login")

            console.log({
                username: this.state.username,
                password: this.state.password
            })
            const content = await setUserLogin({
                username: this.state.username,
                password: this.state.password
            })
            // console.log(content.err)
            if (content.err === "Worng password") { //รอออม set status เพิ่ม "ถ้าเกิดรหัสผิดจะinvalid"
                this.setState({ invalidPassword: true })
            } 
            else {
                this.setState({ invalidPassword: false })
                window.location.href = "http://localhost:3000/users/login"
            }
        }
        else {
            this.setState({ notHaveUsername: true })
            document.getElementById("mylink").onclick = function() {
            window.location.href = " ";
            }
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
                        this.state.invalidPassword &&
                        <alert >
                            <Input invalid type="password" name="password" onChange={this.handleInputChange} placeholder="Password" />
                            <FormFeedback>Please enter password.</FormFeedback>
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
                    <Buttons onClick={this.handleSubmit} type="submit" value='Login' href='/' />
                </FormGroups>
            </Div>
        );
    }
}

export default LoginComponent