import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Contact from './Contact';
import './ContactList.css';


class ContactList extends Component {
    render() {
        let { contacts } = this.props;
        return (
                <div className="contactList">
                    {contacts.map((contact) => (
                        <Contact key={contact.id} contact={contact} />
                    ))}
                </div>
        );
    }
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
};

export default ContactList;
