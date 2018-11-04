import React from 'react'
import { Input, Label, FormFeedback , Row , Col} from 'reactstrap';
import styled from 'styled-components'

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
            confirmPassword: '',
            firstName: '',
            lastName: '',
            contactNumber: '',
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
            [event.name]: event.target.value
        })
    }

    handleSubmit = event => {

        if (this.state.username === '') {
            this.setState({ notHaveUsername: true });
        }
        else {
            this.setState({ notHaveUsername: false })
        }

        if (this.state.email === '') {
            this.setState({ notHaveEmail: true });
        }
        else {
            this.setState({ notHaveEmail: false })
        }

        if (this.state.password === '') {
            this.setState({ notHavePassword: true });
        } else {
            this.setState({ notHavePassword: false })
        }

        if (this.state.confirmPassword === '') {
            this.setState({ notHaveConfirmPass: true });
        } else {
            this.setState({ notHaveConfirmPass: false })
        }

        if (this.state.firstName === '') {
            this.setState({ notHaveFirstName: true });
        } else {
            this.setState({ notHaveFirstName: false })
        }

        if (this.state.lastName === '') {
            this.setState({ notHaveLastName: true });
        } else {
            this.setState({ notHaveLastName: false })
        }

        if (this.state.contactNumber === '') {
            this.setState({ notHaveContectNum: true });
        } else {
            this.setState({ notHaveContectNum: false })
        }
    }

    render() {
        return (
            <Form inline>
            <form action="http://localhost:8000/users/register" method="POST">
             <div>
                    <Row>
                        <Col md={6}>
                            <FormGroups>
                                <Label>Firstname</Label>
                                {
                                    this.state.notHaveFirstName &&
                                    <alert >
                                        <Input invalid type="text" onChange={this.handleInputChange} name="firstname" placeholder="Firstname" />
                                        <FormFeedback>Please enter first name.</FormFeedback>
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
                                        <FormFeedback>Please enter last name.</FormFeedback>
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
                            <FormFeedback>Please enter username.</FormFeedback>
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
                            <FormFeedback>Please enter password.</FormFeedback>
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
                            <FormFeedback>Please enter password.</FormFeedback>
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
                            <FormFeedback>Please enter email.</FormFeedback>
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
                            <FormFeedback>Please enter contact number.</FormFeedback>
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
                    <Buttons onClick={this.handleSubmit} type="submit" value='Sign up' />
                </FormGroups>
                </form>
            </Form>


        );
    }
}

export default RegisComponent