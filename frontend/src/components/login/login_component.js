import React from 'react'
import { Input, Label, FormFeedback } from 'reactstrap';
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

// const Block = styled.div`
//     display: block;
//     margin-top: 5px;
//     margin-bootom: 10px; 
// `

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            error: '',
            notHaveUsername: false,
            notHavePassword: false
        };
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({ 
            username: '',
            password: '',
            error: '',
     });
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
        // event.preventDefault();
        
        console.log(this.state.username);
        console.log(this.state.password);
        
        
        if (this.state.username === '') {
            this.setState({ notHaveUsername: true });
        }
        else {
            this.setState({notHaveUsername: false})
        }

        if (this.state.password === '') {
            this.setState({ notHavePassword: true });
        }else {
            this.setState({notHavePassword: false})
        }

    }

    render() {
        return (
            <Div >
                <div >
                    <FormGroups>
                        <Label>Username</Label>
                        {
                            this.state.notHaveUsername &&
                            <alert >
                                <Input invalid type="text" onChange={this.handleUserChange} name="email" placeholder="Username" />
                                <FormFeedback>Please enter username.</FormFeedback>
                            </alert>
                        }
                        {
                            !this.state.notHaveUsername &&
                            <alert >
                                <Input type="text" name="email" onChange={this.handleUserChange} placeholder="Username" />
                            </alert>
                        }
                    </FormGroups>
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
                                <Input type="password" name="password" onChange={this.handlePassChange} placeholder="Password" />
                            </alert>
                        }
                    </FormGroups>
                    <FormGroups>
                        <Buttons onClick={this.handleSubmit} type="submit" value='Login' />
                    </FormGroups>

                </div>
            </Div>
        );
    }
}

export default LoginComponent