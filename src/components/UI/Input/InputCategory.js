import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../../store/actions/action';

const InputCategory = props => {
    const [inputText, setInputText] = useState('');

    const inputChangeHandler = event => { setInputText(event.target.value); }

    const catSubmitHandler = event => {
        event.preventDefault();
        props.onAddCategory(inputText);
    }

    return (
        <form onSubmit={catSubmitHandler}>
            <div className='form-group'>
                <label htmlFor='category'>Category</label>
                <input type='text' className='form-control' id='category' onChange={inputChangeHandler} value={inputText} />
            </div>
            <button className='btn btn-primary' type='submit'>Add Category</button>
        </form>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onAddCategory: (content) => dispatch({ type: actionTypes.ADD_CATEGORY, content })
    };
};

export default connect(null, mapDispatchToProps)(InputCategory);
