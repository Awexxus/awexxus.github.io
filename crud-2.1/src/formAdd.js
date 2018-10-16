import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form'

const style = {
    transition: 'all .5s ease-out'
};
class addItem extends Component {
    constructor(){
        super();
        this.state={
            scale: 1,
            shadow: '0 0 0 black'
        }
    }
    onEnter = () => {
        this.setState({
            scale: 1.2,
            shadow: '0 20px 20px grey'
        })
    }
    onLeave = () => {
        this.setState({
            scale: 1,
            shadow: '0 0 0 black'
        })
    }
    render() {
        const { handleSubmit } = this.props
        return (
            <div className="header">
                <form onSubmit={handleSubmit}>
                    <h1>Добавить запись</h1>
                    <Field name="author" placeholder="author" component="input" type="text" />
                    <Field name="isbn" placeholder="isbn" component="input" type="text" />
                    <Field name="caption" placeholder="caption" component="input" type="text" />
                    <Button color="success"
                            style={{...style, transform: 'scale('+ this.state.scale +')' , boxShadow: this.state.shadow}}
                            onMouseEnter={this.onEnter.bind(this)}
                            onMouseLeave={this.onLeave.bind(this)}
                    >Добавить</Button>
                </form>
            </div>
        );
    }
}
addItem = reduxForm({
    form: 'add'
})(addItem)

export default addItem;