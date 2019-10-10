import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import CategoryInput from '../../components/UI/Input/InputCategory';
import { REMOVE_CATEGORY } from '../../store/actions/action';

const categories = props => {
    const categoryList = props.catList.map(cat => {
        return (
            <div className='card' key={cat.id}>
                <div className='card-body'>
                    <h5 className='card-title'>{cat.content}</h5>
                    <button className='btn btn-secondary' onClick={() => props.onRemoveCategory(cat.id)}>Delete</button>
                </div>
            </div>
        );
    });

    return (
        <Fragment>
            <CategoryInput />
            {categoryList}
        </Fragment>
    );
}

const mapStateToProps = state => {
    return {
        catList: state.cat.categories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveCategory: (id) => dispatch({ type: REMOVE_CATEGORY, id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(categories);
