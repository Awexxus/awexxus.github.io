import React, { Component } from 'react';
import { connect } from 'react-redux';
import addNewItem from './actions/add';
import { Button } from 'reactstrap'

class addItem extends Component {
    onSubmit(event) {
        event.preventDefault();
        if (this.resAuthor.value !== '', this.resIsbn.value !== '', this.resCaption.value !== '') {
            this.props.dispatch(addNewItem(this.resAuthor.value, this.resIsbn.value, this.resCaption.value));
            this.resAuthor.value = '', this.resIsbn.value = '', this.resCaption.value = ''
        } else {
            return (alert('Заполните данные'))
        }
    }
    render() {
        return (
            <div className="header">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <h1>Добавить запись</h1>
                    <input placeholder="author" ref={resAuthor => this.resAuthor = resAuthor}/>
                    <input placeholder="isbn" ref={resIsbn => this.resIsbn = resIsbn} />
                    <input placeholder="caption" ref={resCaption => this.resCaption = resCaption}/>
                    <Button color="success">Добавить</Button>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}
export default connect(state =>({}), mapDispatchToProps)(addItem);