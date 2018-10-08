import React from 'react'
import { Input, Label , FormFeedback} from 'reactstrap';
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

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            comfirmPassword: '',
            firstName: '',
            lastName: '',
            contactNumber: '',
            error: '',
        };
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({ error: '' });
    }

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

    handleSubmit = event => {
        event.preventDefault();

        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }

        return this.setState({ error: '' });
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Form >
                        <FormGroups>
                            <Label>Username</Label>
                            {
                                this.state.username &&
                                <alert onClick={this.dismissError}>
                                    <Input invalid type="text" name="email" placeholder="Username" />
                                    <FormFeedback>Please enter username.</FormFeedback>
                                </alert>
                            }
                            {
                                !this.state.error &&
                                <alert onSubmit={this.dismissError}>
                                    <Input type="text" name="email" placeholder="Username" />
                                </alert>
                            }                        </FormGroups>
                        <FormGroups>
                            <Label>Email</Label>
                            {
                            this.state.error &&
                            <alert onClick={this.dismissError}>
                                <Input invalid type="email" name="email" placeholder="Email" />
                                <FormFeedback>Please enter email.</FormFeedback>
                            </alert>
                        }
                        {
                            !this.state.error &&
                            <alert onSubmit={this.dismissError}>
                                <Input type="email" name="email" placeholder="Email" />
                            </alert>
                        }
                            
                        </FormGroups>
                        <FormGroups>
                            <Label>Password</Label>
                            {
                                this.state.error &&
                                <alert onClick={this.dismissError}>
                                    <Input invalid type="password" name="password" placeholder="Password" />
                                    <FormFeedback>Please enter password.</FormFeedback>
                                </alert>
                            }
                            {
                                !this.state.error &&
                                <alert onSubmit={this.dismissError}>
                                    <Input type="password" name="password" placeholder="Password" />
                                </alert>
                            }                        </FormGroups>
                        <FormGroups>
                            <Label>Confirm Password</Label>
                            {
                                this.state.error &&
                                <alert onClick={this.dismissError}>
                                    <Input invalid type="password" name="password" placeholder="Password" />
                                    <FormFeedback>Please enter password.</FormFeedback>
                                </alert>
                            }
                            {
                                !this.state.error &&
                                <alert onSubmit={this.dismissError}>
                                    <Input type="password" name="cPassword" placeholder="Confirm Password" />
                                </alert>
                            }  
                        </FormGroups>
                        <FormGroups>
                            <Label>Firstname</Label>
                            {
                                this.state.error &&
                                <alert onClick={this.dismissError}>
                                    <Input invalid type="text" name="firstName" id="id_fn" placeholder="Firstname" />
                                    <FormFeedback>Please enter first name.</FormFeedback>
                                </alert>
                            }
                            {
                                !this.state.error &&
                                <alert onSubmit={this.dismissError}>
                                    <Input type="text" name="firstName" id="id_fn" placeholder="Firstname" />
                                </alert>
                            } 
                        </FormGroups>
                        <FormGroups>
                            <Label>Lastname</Label>
                            {
                                this.state.error &&
                                <alert onClick={this.dismissError}>
                                    <Input invalid type="text" name="lastName" id="id_ln" placeholder="Lastname" />
                                    <FormFeedback>Please enter last name.</FormFeedback>
                                </alert>
                            }
                            {
                                !this.state.error &&
                                <alert onSubmit={this.dismissError}>
                                    <Input type="text" name="lastName" id="id_ln" placeholder="Lastname" />
                                </alert>
                            }
                        </FormGroups>
                        <FormGroups>
                            <Label>Contact Number</Label>
                            {
                                this.state.error &&
                                <alert onClick={this.dismissError}>
                                    <Input invalid type="text" name="contactNumber" id="id_cn" placeholder="Contact Number" />
                                    <FormFeedback>Please enter contact number.</FormFeedback>
                                </alert>
                            }
                            {
                                !this.state.error &&
                                <alert onSubmit={this.dismissError}>
                                    <Input type="text" name="contactNumber" id="id_cn" placeholder="Contact Number" />
                                </alert>
                            }
                        </FormGroups>
                        <FormGroups>
                            <Buttons type="submit" value='Sign up' />
                        </FormGroups>
                    </Form>
                </form>
            </div>
        );
    }
}

export default LoginComponent