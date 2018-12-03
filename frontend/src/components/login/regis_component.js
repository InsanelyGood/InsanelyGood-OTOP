import React from 'react'
import { Input, Label, FormFeedback, Row, Col } from 'reactstrap';
import styled from 'styled-components'
import '../../css/login&regis.css'
import { getUserRegis } from '../../api/userid';

const Form = styled.div`
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

class RegisComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            username: '',
            password: '',
            confirm_password: '',
            firstname: '',
            lastname: '',
            telephone_number: '',
            notHaveEmail: false,
            notHaveUsername: false,
            notHavePassword: false,
            notHaveConfirmPass: false,
            notHaveFirstName: false,
            notHaveLastName: false,
            notHaveContectNum: false,
        };
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async event => {
        if (this.state.password !== this.state.confirm_password){
            this.setState({ notHaveConfirmPass: true });
        }
        const setInfo = {
            username: this.state.username,
            password: this.state.password,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            telephone_number: this.state.telephone_number,
            confirm_password: this.state.confirm_password
        }
        const regis = await getUserRegis(setInfo)
        console.log('submit');
        console.log('regis', regis.status);
        if (regis.status === 409) {
            this.setState({ notHaveUsername: true });
            console.log('regisssssssss ');
        }
        if (regis.status === 401) {
            this.setState({ notHaveUsername: true });
            this.setState({ notHavePassword: true });
            this.setState({ notHaveEmail: true });
            this.setState({ notHaveConfirmPass: true });
            this.setState({ notHaveFirstName: true });
            this.setState({ notHaveLastName: true });
            this.setState({ notHaveContectNum: true });
            console.log('cannot regisssssss');
        } else if (regis.status === 200) {
            
            this.setState({ notHaveUsername: false });
            this.setState({ notHavePassword: false });
            this.setState({ notHaveEmail: false });
            this.setState({ notHaveConfirmPass: false });
            this.setState({ notHaveFirstName: false });
            this.setState({ notHaveLastName: false });
            this.setState({ notHaveContectNum: false });
            // let role = await login.json()
            // if(role.role === 'admin') {
            //     Cookies.set('role', 'admin');
            // }
            window.location.href = 'http://localhost:3000/users/login'
            console.log('can regissssss')
        }
    }

    render() {
        return (
            <Form inline>
                <div>
                    <Row>
                        <Col md={6}>
                            <FormGroups>
                                <Label>Firstname</Label>
                                {
                                    this.state.notHaveFirstName &&
                                    <alert >
                                        <Input invalid type="text" onChange={this.handleInputChange} name="firstname" placeholder="Firstname" />
                                        <FormFeedback>Invalid first name.</FormFeedback>
                                    </alert>
                                }
                                {
                                    !this.state.notHaveFirstName &&
                                    <alert >
                                        <Input type="text" onChange={this.handleInputChange} name="firstname" placeholder="Firstname" />
                                    </alert>
                                }
                            </FormGroups>
                        </Col>
                        <Col md={6}>
                            <FormGroups>
                                <Label>Lastname</Label>
                                {
                                    this.state.notHaveLastName &&
                                    <alert >
                                        <Input invalid type="text" onChange={this.handleInputChange} name="lastname" placeholder="Lastname" />
                                        <FormFeedback>Invalid last name.</FormFeedback>
                                    </alert>
                                }
                                {
                                    !this.state.notHaveLastName &&
                                    <alert >
                                        <Input type="text" onChange={this.handleInputChange} name="lastname" placeholder="Lastname" />
                                    </alert>
                                }
                            </FormGroups>
                        </Col>
                    </Row>
                </div>
                <FormGroups>
                    <Label>Username</Label>
                    {
                        this.state.notHaveUsername &&
                        <alert >
                            <Input invalid type="text" onChange={this.handleInputChange} name="username" placeholder="Username" />
                            <FormFeedback>Invalid username.</FormFeedback>
                        </alert>
                    }
                    {
                        !this.state.notHaveUsername &&
                        <alert >
                            <Input type="text" onChange={this.handleInputChange} name="username" placeholder="Username" />
                        </alert>
                    }                        </FormGroups>
                <FormGroups>
                    <Label>Password</Label>
                    {
                        this.state.notHavePassword &&
                        <alert >
                            <Input invalid type="password" onChange={this.handleInputChange} name="password" placeholder="Password" />
                            <FormFeedback>Invalid password.</FormFeedback>
                        </alert>
                    }
                    {
                        !this.state.notHavePassword &&
                        <alert >
                            <Input type="password" onChange={this.handleInputChange} name="password" placeholder="Password" />
                        </alert>
                    }
                </FormGroups>
                <FormGroups>
                    <Label>Confirm Password</Label>
                    {
                        this.state.notHaveConfirmPass &&
                        <alert >
                            <Input invalid type="password" onChange={this.handleInputChange} name="confirm_password" placeholder="Confirm Password" />
                            <FormFeedback>Invalid confirm password.</FormFeedback>
                        </alert>
                    }
                    {
                        !this.state.notHaveConfirmPass &&
                        <alert >
                            <Input type="password" onChange={this.handleInputChange} name="confirm_password" placeholder="Confirm Password" />
                        </alert>
                    }
                </FormGroups>
                <FormGroups>
                    <Label>Email</Label>
                    {
                        this.state.notHaveEmail &&
                        <alert >
                            <Input invalid type="email" onChange={this.handleInputChange} name="email" placeholder="Email" />
                            <FormFeedback>Invalid email.</FormFeedback>
                        </alert>
                    }
                    {
                        !this.state.notHaveEmail &&
                        <alert >
                            <Input type="email" onChange={this.handleInputChange} name="email" placeholder="Email" />
                        </alert>
                    }

                </FormGroups>
                <FormGroups>
                    <Label>Contact Number</Label>
                    {
                        this.state.notHaveContectNum &&
                        <alert >
                            <Input invalid type="text" onChange={this.handleInputChange} name="telephone_number" placeholder="Contact Number" />
                            <FormFeedback>Invalid contact number.</FormFeedback>
                        </alert>
                    }
                    {
                        !this.state.notHaveContectNum &&
                        <alert >
                            <Input type="text" onChange={this.handleInputChange} name="telephone_number" placeholder="Contact Number" />
                        </alert>
                    }
                </FormGroups>
                <FormGroups>
                    <Buttons className="regisBtn" onClick={this.handleSubmit} type="submit" value='Sign up' />
                </FormGroups>
            </Form>
        );
    }
}

export default RegisComponent