import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

import Contact from './Contact';
import './ContactList.css';


class ContactList extends Component {

    state = {
        search: '',
    }

    handleSearch = (e) => {
        this.setState({ search: e.target.value.toLowerCase() })
    }

    render() {
        let { contacts } = this.props;
        if (this.state.search) {
            contacts = contacts.filter((contact) =>
                `${contact.first_name} ${contact.last_name} ${contact.email}`.toLowerCase().includes(this.state.search))
        }
        return (
            <div>
                <FormGroup controlId="search">
                    <ControlLabel>Search contacts</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.search}
                        placeholder="Search by name or email"
                        name="search"
                        onChange={this.handleSearch}
                    />
                </FormGroup>
                <div className="contactList">
                    {contacts.map((contact) => (
                        <Contact key={contact.id} contact={contact} />
                    ))}
                </div>
            </div>
        );
    }
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
};

export default ContactList;
