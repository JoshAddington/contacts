import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import $ from 'jquery';

import ContactList from './components/ContactList';
import Loading from './components/Loading';
import RegisterForm from './components/RegisterForm';
import { fetchApi, fetchAuthApi } from './utils';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'http://react-app.adwerx.com:3000',
            id: '',
            secret: '',
            isLoading: false,
            contacts: [],
            error: {},
      }
    }

    handleFetchError(response) {
        if (!response.ok) {
            console.log('response', response);
            throw Error(response.statusText)
        }
        return response;
    }

    // chain of API requests fired from RegisterForm submission
    registerUser = (form) => {
        this.setState({isLoading: true});
        let options = fetchApi({method: 'POST', payload: $(form).serialize()});
        fetch(`${this.state.url}/register`, options)
            .then(this.handleFetchError)
            .then(() => this.authUser(options))
            .catch((ex) => {
                this.setState({ error: ex });
                console.error('ex', ex)
                this.registerUser(form);
            });
    }

    authUser = (options) => {
        fetch(`${this.state.url}/auth`, options)
            .then(this.handleFetchError)
            .then((response) => response.json())
            .then((json) => this.setState({...json}))
            .then(() => this.loadContacts())
            .catch((ex) => {
                this.setState({ error: ex });
                console.error('ex', ex)
                this.authUser(options);
            });
    }

    loadContacts = () => {
        let { id, secret } = this.state,
            options = fetchAuthApi({method: 'GET', id, secret});
        fetch(`${this.state.url}/api/contacts`, options)
            .then(this.handleFetchError)
            .then((response) => response.json())
            .then((json) => this.setState({ contacts: json, isLoading: false }))
            .catch((ex) => {
                this.setState({ error: ex });
                console.error('ex', ex)
                this.loadContacts();
            });
    }

    // renders registration form or contact list, based on whether contacts have been successfully loaded into state.
    renderApp = () => {
        return (
            <Grid>
                <Row>
                    <Col sm={10} smOffset={1}>
                        {this.state.contacts.length === 0 ?
                            <RegisterForm handleSubmit={this.registerUser} /> :
                            <ContactList contacts={this.state.contacts} />
                        }
                    </Col>
                </Row>
            </Grid>
        )
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Contacts</h1>
        </header>
        { this.state.isLoading ? <Loading error={this.state.error} /> : this.renderApp() }
      </div>
    );
  }
}

export default App;
