import React, { useState } from 'react';
import { connect } from 'react-redux';

import { ADD_TODO } from '../../../store/actions/action';

const InputTodo = props => {
    const [inputText, setInputText] = useState('');
    const [selectedCat, setSelectedCat] = useState('Home');

    const catList = props.categories.map(cat => (
        <option key={cat.id} value={cat.content}>{cat.content}</option>
    ));

    const inputChangeHandler = event => { setInputText(event.target.value); }
    const catChangeHandler = event => { setSelectedCat(event.target.value); }

    const todoSubmitHandler = event => {
        event.preventDefault();
        props.onAddTodo(inputText, selectedCat);
    }

    return (
        <form onSubmit={todoSubmitHandler}>
            <div className='form-group'>
                <label htmlFor='todo'>Todo</label>
                <input type='text' className='form-control' id='todo' onChange={inputChangeHandler} value={inputText} />
            </div>
            <div className='form-group'>
                <label htmlFor='category'>Select Category :</label>
                <select className='form-control' id='category' onChange={catChangeHandler} value={selectedCat}>
                    {catList}
                </select>
            </div>
            <button type='submit'>Add Todo</button>
        </form>
    );
}

const mapStateToProps = state => {
    return {
        categories: state.cat.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: (content, category) => dispatch({ type: ADD_TODO, content, category })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTodo);
