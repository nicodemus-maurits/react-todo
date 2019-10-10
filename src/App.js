import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout/Layout';
import TodoList from './containers/Todo/TodoList';
import Categories from './containers/Category/Categories';
import Todo from './components/Todo/Todo';

function App() {
    return (
        <div className="App">
            <Layout>
                <Route path="/categories" component={Categories} />
                <Route path="/todo" component={Todo} />
                <Route path="/" exact component={TodoList} />
            </Layout>
        </div >
    );
}

export default App;
