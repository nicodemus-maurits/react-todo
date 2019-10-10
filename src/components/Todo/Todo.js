import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { UPDATE_TODO } from '../../store/actions/action';

const Todo = props => {
    const [selectedCat, setSelectedCat] = useState('');
    const { id, content, category } = props.location.state;

    const categoryList = props.catItems.map(cat => {
        return (
            <option key={cat.id} value={cat.content}>{cat.content}</option>
        );
    });

    const onChangeHandler = event => {
        setSelectedCat(event.target.value);
    }

    const onSaveTodoCategory = id => {
        props.onUpdateTodo(id, selectedCat);
        props.history.push('/');
    }

    return (
        <div className='card'>
            <div className='card-body'>
                <h4 className='card-title'>{content}</h4>
                <div className='form-group'>
                    <label htmlFor='category'>Select Category :</label>
                    <select className='form-control' id='category' value={category} onChange={onChangeHandler}>
                        {categoryList}
                    </select>
                </div>
                <div className="btn-group">
                    <Link to='/' className='btn btn-secondary'>Back</Link>
                    <button className='btn btn-primary' onClick={() => onSaveTodoCategory(id)}>Save</button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        todoItems: state.todo.todoList,
        catItems: state.cat.categories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateTodo: (id, category) => dispatch({ type: UPDATE_TODO, id, category })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
