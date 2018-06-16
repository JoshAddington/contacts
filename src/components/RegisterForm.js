import React, { Component } from 'react';
import { FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';

class RegisterForm extends Component {

    constructor(props) {
      super(props)

    }

    render() {
        return (
          <form>
            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
            >
              <ControlLabel>Working example with validation</ControlLabel>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length.</HelpBlock>
            </FormGroup>
          </form>
        )
    }

}

export default RegisterForm;
