import React, { Component } from 'react';
import { Table, Td, Tr } from 'reactable';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import getItems from './actions';
import editItem from './actions/edit';
import deleteItem from './actions/delete';
import { Field, reduxForm } from 'redux-form';

class renderTable extends Component {
    constructor(props){
        super(props);
        this.state={
            id: false,
            edit: false
        }
        setInterval(()=>{this.props.dispatch(getItems())}, 30000)
    }
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(getItems());
    }
    delete = (id) =>{
        this.props.dispatch(deleteItem(id))
    }
    edit = (id) => {
        this.setState({
            id : id,
            edit: true
        })
    }
    editOneItem = (values)  =>{
        this.props.dispatch(editItem(this.state.id,  values.author, values.isbn, values.caption)).then(this.setState({
            id: false,
            edit: false
        }))

    }
    renderEdit = (id, author, isbn, caption) => {
            if (id === this.state.id && this.state.edit === true) {
                return (
                    <Tr key={id}>
                        <Td column='ID' name="id">{id}</Td>
                        <Td column='Author'><Field name="author" component="input" type="text" /></Td>
                        <Td column='Isbn'><Field name="isbn" component="input" type="text" /></Td>
                        <Td column='Caption'><Field name="caption" component="input" type="text" /></Td>
                        <Td column='Удалить'>
                            <Button
                                onClick={this.props.handleSubmit(this.editOneItem)}
                                color="success">Сохранить</Button>
                        </Td>
                    </Tr>
                );
            } else {
                return (<Tr key={id}>
                        <Td column='ID'>{id}</Td>
                        <Td column='Author'>{author}</Td>
                        <Td column='Isbn'>{isbn}</Td>
                        <Td column='Caption'>{caption}</Td>
                        <Td column='Удалить'>
                            <Button onClick={() => this.delete(id)} color="danger">Удалить</Button>
                        </Td>
                        <Td column={'Редактировать'}>
                            <Button onClick={() => this.edit(id)} color="primary">Редактировать</Button>
                        </Td>
                    </Tr>
                )
            }
    }
    renderTr = (id, author, isbn, caption) =>{
            return (
                <Tr key={id}>
                    <Td column='ID'>{id}</Td>
                    <Td column='Author'>{author}</Td>
                    <Td column='Isbn'>{isbn}</Td>
                    <Td column='Caption'>{caption}</Td>
                    <Td column='Удалить'>
                        <Button onClick={() => this.delete(id)} color="danger">Удалить</Button>
                    </Td>
                    <Td column={'Редактировать'}>
                        <Button onClick={() => this.edit(id)} color="primary">Редактировать</Button>
                    </Td>
                </Tr>
            );
    }
    render() {
        const {items} = this.props;
        let author, isbn, caption;
        return (
            <div>
                <Table className="table">
                    {
                            Object.values(items).map((key => {
                                if(key['data']){
                                    Object.keys(key['data']).map(item=>{
                                        key['data']['author'] ? (author = key['data']['author']):(author = '');
                                        key['data']['isbn'] ? (isbn = key['data']['isbn']):(isbn = '');
                                        key['data']['caption'] ? (caption = key['data']['caption']):(caption = '');
                                    })
                                }else{
                                    author = '';
                                    isbn = '';
                                    caption = ''
                                }
                                if(key['_id']) {
                                    return (
                                        this.state.edit
                                            ? this.renderEdit(key['_id'], author, isbn, caption)
                                            : this.renderTr(key['_id'], author, isbn, caption)

                                    )
                                }
                            }))

                    }
                </Table>
            </div>
        );
    }
}
renderTable = reduxForm({
    form: 'edit'
})(renderTable)
const mapStateToProps = (state) =>{
    return{
        items: state.items,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(renderTable);