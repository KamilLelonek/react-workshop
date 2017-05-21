import React, {Component} from 'react';
import PropTypes          from 'prop-types'

import ContactInfo from './ContactInfo.js'
import Search      from './Search.js'

class ContactsList extends Component {
  state = {
    filter: ""
  }

  contactsInfos() {
    return this.props.contacts
      .filter(
        contact =>
          Object.values(contact).some(value => value.includes(this.state.filter))
      )
      .map(
        contactInfo =>
          <ContactInfo key={contactInfo.name} contactDetails={contactInfo} />
      )
  }

  searchAndFilter = ({target: {value: filter}}) =>
    this.setState({filter: filter})

  render() {
    return (
      <div>
        <Search searchAction={this.searchAndFilter}/>
        {this.contactsInfos()}
      </div>
    )
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired
}

export default ContactsList
