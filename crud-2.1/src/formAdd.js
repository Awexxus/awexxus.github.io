import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form'

class addItem extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <div className="header">
                <form onSubmit={handleSubmit}>
                    <h1>Добавить запись</h1>
                    <Field name="author" placeholder="author" component="input" type="text" />
                    <Field name="isbn" placeholder="isbn" component="input" type="text" />
                    <Field name="caption" placeholder="caption" component="input" type="text" />
                    <Button color="success">Добавить</Button>
                </form>
            </div>
        );
    }
}
addItem = reduxForm({
    form: 'add'
})(addItem)

export default addItem;