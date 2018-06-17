import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';

class RegisterForm extends Component {

    constructor(props) {
      super(props)
      this.state = {
          email: '',
          password: '',
      };
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    validInput = () => {
        return (this.validateEmail() === 'success' && this.validatePassword() === 'success');
    }

    validateEmail = () => {
        const { email } = this.state,
            regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
        if (regex.test(email)) {
            return 'success'
        } else if (email.length > 0) {
            return 'error';
        }
        return null;
    }

    validatePassword = () => {
        const { password } = this.state,
        // regex for making sure the password contains at least a lowercase letter, an uppercase letter, and a number.
        // the other characters can be anything else.
            regex = new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(.){8,}$')
        if (regex.test(password)) {
            return 'success';
        } else if (password.length > 0) {
            return 'error';
        }
        return null;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validInput()) {
            this.props.handleSubmit(this.form);
        }
    }

    render() {
        return (
        <div>
            <h3>
                Register
                <br/>
                <small>You must register in order to see your contacts.</small>
            </h3>
            <form ref={(form) => (this.form = form)} onSubmit={this.handleSubmit}>
                <FormGroup
                    controlId="email"
                    validationState={this.validateEmail()}
                    >
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        type="email"
                        value={this.state.email}
                        name="email"
                        placeholder="Enter text"
                        onChange={this.handleInputChange}
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup
                    controlId="password"
                    validationState={this.validatePassword()}
                    >
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.password}
                        name="password"
                        placeholder="Enter text"
                        onChange={this.handleInputChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Password must be at least 8 characters, include a lowercase letter, an uppercase letter, and a number</HelpBlock>
                </FormGroup>
                <Button type='submit' bsStyle='primary' disabled={!this.validInput()}>Register</Button>
            </form>
        </div>
        )
    }

}

RegisterForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}
export default RegisterForm;
