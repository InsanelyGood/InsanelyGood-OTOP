import React from 'react'
import { Input, Label, FormFeedback , Row , Col} from 'reactstrap';
import styled from 'styled-components'

const Form = styled.div`
    margin: auto;
    width:100%;
`

const FormGroups = styled.div`
    padding: 10px 0;
    margin: 0 auto;
    width: 100%;
`

const Buttons = styled.input`
    text-align: center;
    margin: 0 auto;
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
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleConPassChange = this.handleConPassChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleContactNumbChange = this.handleContactNumbChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value,
        });
    };

    handleUserChange = event => {
        this.setState({
            username: event.target.value,
        });
    };

    handlePassChange = event => {
        this.setState({
            password: event.target.value
        });
    }

    handleConPassChange = event => {
        this.setState({
            confirmPassword: event.target.value,
        });
    };

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value,
        });
    };

    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value,
        });
    };

    handleContactNumbChange = event => {
        this.setState({
            contactNumber: event.target.value,
        });
    };

    handleSubmit = event => {
        console.log(this.state.username);
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.state.confirmPassword);
        console.log(this.state.firstName);
        console.log(this.state.lastName);
        console.log(this.state.contactNumber);

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
                    <Row form>
                        <Col md={6}>
                            <FormGroups>
                                <Label>Firstname</Label>
                                {
                                    this.state.notHaveFirstName &&
                                    <alert >
                                        <Input invalid type="text" onChange={this.handleFirstNameChange} name="firstName" placeholder="Firstname" />
                                        <FormFeedback>Please enter first name.</FormFeedback>
                                    </alert>
                                }
                                {
                                    !this.state.notHaveFirstName &&
                                    <alert >
                                        <Input type="text" onChange={this.handleFirstNameChange} name="firstName" placeholder="Firstname" />
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
                                        <Input invalid type="text" onChange={this.handleLastNameChange} name="lastName" placeholder="Lastname" />
                                        <FormFeedback>Please enter last name.</FormFeedback>
                                    </alert>
                                }
                                {
                                    !this.state.notHaveLastName &&
                                    <alert >
                                        <Input type="text" onChange={this.handleLastNameChange} name="lastName" placeholder="Lastname" />
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
                            <Input invalid type="text" onChange={this.handleUserChange} name="username" placeholder="Username" />
                            <FormFeedback>Please enter username.</FormFeedback>
                        </alert>
                    }
                    {
                        !this.state.notHaveUsername &&
                        <alert >
                            <Input type="text" onChange={this.handleUserChange} name="username" placeholder="Username" />
                        </alert>
                    }                        </FormGroups>
                <FormGroups>
                    <Label>Password</Label>
                    {
                        this.state.notHavePassword &&
                        <alert >
                            <Input invalid type="password" onChange={this.handlePassChange} name="password" placeholder="Password" />
                            <FormFeedback>Please enter password.</FormFeedback>
                        </alert>
                    }
                    {
                        !this.state.notHavePassword &&
                        <alert >
                            <Input type="password" onChange={this.handlePassChange} name="password" placeholder="Password" />
                        </alert>
                    }
                </FormGroups>
                <FormGroups>
                    <Label>Confirm Password</Label>
                    {
                        this.state.notHaveConfirmPass &&
                        <alert >
                            <Input invalid type="password" onChange={this.handleConPassChange} name="password" placeholder="Confirm Password" />
                            <FormFeedback>Please enter password.</FormFeedback>
                        </alert>
                    }
                    {
                        !this.state.notHaveConfirmPass &&
                        <alert >
                            <Input type="password" onChange={this.handleConPassChange} name="cPassword" placeholder="Confirm Password" />
                        </alert>
                    }
                </FormGroups>
                <FormGroups>
                    <Label>Email</Label>
                    {
                        this.state.notHaveEmail &&
                        <alert >
                            <Input invalid type="email" onChange={this.handleEmailChange} name="email" placeholder="Email" />
                            <FormFeedback>Please enter email.</FormFeedback>
                        </alert>
                    }
                    {
                        !this.state.notHaveEmail &&
                        <alert >
                            <Input type="email" onChange={this.handleEmailChange} name="email" placeholder="Email" />
                        </alert>
                    }

                </FormGroups>
                <FormGroups>
                    <Label>Contact Number</Label>
                    {
                        this.state.notHaveContectNum &&
                        <alert >
                            <Input invalid type="text" onChange={this.handleContactNumbChange} name="contactNumber" placeholder="Contact Number" />
                            <FormFeedback>Please enter contact number.</FormFeedback>
                        </alert>
                    }
                    {
                        !this.state.notHaveContectNum &&
                        <alert >
                            <Input type="text" onChange={this.handleContactNumbChange} name="contactNumber" placeholder="Contact Number" />
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