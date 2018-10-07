import React from 'react'
import { Input, Label } from 'reactstrap';
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Form >
                        <FormGroups>
                            <Label>Email</Label>
                            <Input type="email" name="email" placeholder="Email" />
                        </FormGroups>
                        <FormGroups>
                            <Label>Password</Label>
                            <Input type="password" name="password" placeholder="Password" />
                        </FormGroups>
                        <FormGroups>
                            <Label>Firstname</Label>
                            <Input type="text" name="firstName" id="id_fn" placeholder="Firstname" />
                        </FormGroups>
                        <FormGroups>
                            <Label>Lastname</Label>
                            <Input type="text" name="lastName" id="id_ln" placeholder="Lastname" />
                        </FormGroups>
                        <FormGroups>
                            <Label>Contact Number</Label>
                            <Input type="text" name="contactNumber" id="id_cn" placeholder="Contact Number" />
                        </FormGroups>
                        <FormGroups>
                            <Buttons type="submit" value='Signup' />
                        </FormGroups>
                    </Form>
                </form>
            </div>
        );
    }
}

export default LoginComponent