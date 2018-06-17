import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import $ from 'jquery';

import RegisterForm from './components/RegisterForm';
import { fetchApi } from './utils';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'http://react-app.adwerx.com:3000',
            email: '',
            password: '',
            id: '',
            secret: '',
            isLoading: false,
            contacts: [],
      }
    }

    registerUser = (form) => {
        let options = fetchApi({method: 'POST', payload: $(form).serialize()});
        fetch(`${this.state.url}/register`, options)
            .then((response) => response.json())
            .then((json) => this.setState({...json}))
            .then(() => this.authUser(form))
    }

    authUser = (form) => {
        let options = fetchApi({method: 'POST', payload: $(form).serialize()});
        fetch(`${this.state.url}/auth`, options)
            .then((response) => response.json())
            .then((json) => this.setState({...json}))
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Contacts</h1>
        </header>
        <Grid>
            <Row>
                <Col sm={8} smOffset={2}>
                    <RegisterForm handleSubmit={this.registerUser} />
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
