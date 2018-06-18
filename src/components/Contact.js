import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Contact.css';

class Contact extends Component {
    render() {
        let { first_name, last_name, title, email, image } = this.props.contact;
        return (
            <div className='contact'>
                <div className="contactImg">
                    <img src={image} alt={`${first_name} ${last_name} profile`}/>
                </div>
                <div className="contactInfo">
                    <div><b>Name:</b> {first_name} {last_name}</div>
                    <div><b>Title:</b> {title}</div>
                    <div><b>Email:</b> <a href={`mailto:${email}`}>{email}</a></div>
                </div>
            </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string,
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        created_at: PropTypes.string,
        user_id: PropTypes.string,
    }).isRequired,
};

export default Contact;
