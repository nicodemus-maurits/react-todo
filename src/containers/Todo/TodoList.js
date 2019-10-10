import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actionTypes from '../../store/actions/action';
import InputTodo from '../../components/UI/Input/InputTodo';

const TodoList = props => {
    const [currentlyDisplayed, setCurrentlyDisplayed] = useState([]);

    useEffect(() => {
        setCurrentlyDisplayed(props.todoItems);
    }, [props.todoItems]);

    const onInputChange = event => {
        let curList = [];
        let newList = [];

        if (event.target.value !== '') {
            curList = props.todoItems;
            newList = curList.filter(todo => {
                const lc = todo.content.toLowerCase();
                const filter = event.target.value.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newList = props.todoItems;
        }

        setCurrentlyDisplayed(newList);
    }

    const todos = currentlyDisplayed.map(todo => (
        <div className='card' key={todo.id}>
            <div className='card-body'>
                <h5 className='card-title'>{todo.content}</h5>
                <p className='card-text'>{todo.category}</p>
                <p className='card-text'>{todo.done ? 'Done' : 'Not Done Yet'}</p>
                <div className='btn-group'>
                    <Link to={{
                        pathname: '/todo',
                        state: {
                            id: todo.id,
                            content: todo.content,
                            category: todo.category
                        }
                    }} className='btn btn-primary'>Detail</Link>
                    <button className='btn btn-primary' onClick={() => props.onToggleTodo(todo.id)}>Toggle Status</button>
                    <button className='btn btn-secondary' onClick={() => props.onRemoveTodo(todo.id)}>Delete</button>
                </div>
            </div>
        </div>
    ));

    return (
        <Fragment>
            <InputTodo />
            <div className="form-group">
                <div className="form-control">
                    <input placeholder='Filter' onChange={onInputChange} />
                </div>
            </div>
            {todos}
        </Fragment>
    );
}

const mapStateToProps = state => {
    return {
        todoItems: state.todo.todoList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleTodo: (id) => dispatch({ type: actionTypes.TOGGLE_TODO, id }),
        onRemoveTodo: (id) => dispatch({ type: actionTypes.REMOVE_TODO, id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
