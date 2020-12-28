import React from 'react';
import './SearchBox.scss'

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='search-box'>
            <input
                className='input-search'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;