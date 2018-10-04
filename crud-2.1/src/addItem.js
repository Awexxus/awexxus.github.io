import React, { Component } from 'react';
import { connect } from 'react-redux';
import addNewItem from './actions/add';
import FormAdd from './formAdd';

class addItem extends Component {
    submit = values => {
        if (values.author !== '', values.isbn !== '', values.caption !== '') {
            this.props.dispatch(addNewItem(values.author, values.isbn, values.caption));
        } else {
            return (alert('Заполните данные'))
        }
    }
    render() {
        return (
           <FormAdd
               onSubmit={this.submit}
           />
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}
export default connect(state =>({}), mapDispatchToProps)(addItem);