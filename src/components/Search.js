import React     from 'react';
import PropTypes from 'prop-types'

function Search({searchAction}) {
  return <input type="search" placeholder="search" onChange={searchAction}/>
}

Search.propTypes = {
  searchAction: PropTypes.func.isRequired
}

export default Search
