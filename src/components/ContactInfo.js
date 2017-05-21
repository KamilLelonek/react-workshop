import React     from 'react';
import PropTypes from 'prop-types'

function ContactInfo({contactDetails}) {
  return (
    <div>
      <p>{contactDetails.name}</p>
      <p>{contactDetails.phoneNumber}</p>
    </div>
  )
}

ContactInfo.propTypes = {
  contactDetails: PropTypes.object.isRequired
}

export default ContactInfo
