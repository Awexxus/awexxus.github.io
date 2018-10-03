import React, { Component } from 'react';
import { Table, Td, Tr } from 'reactable';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import getItems from './actions'
import editItem from './actions/edit'
import deleteItem from './actions/delete'


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
    editOneItem(id, author, isbn, caption){
        this.props.dispatch(editItem(id,  author, isbn, caption)).then(this.setState({
            id: false,
            edit: false
        }))

    }
    renderEdit = (id, author, isbn, caption) => {
            if (id === this.state.id && this.state.edit === true) {
                return (
                    <Tr key={id}>
                        <Td column='ID'>{id}</Td>
                        <Td column='Author'><input defaultValue={author}
                                                   ref={editAuthor => this.editAuthor = editAuthor}/></Td>
                        <Td column='Isbn'><input defaultValue={isbn} ref={editIsbn => this.editIsbn = editIsbn}/></Td>
                        <Td column='Caption'><input defaultValue={caption}
                                                    ref={editCaption => this.editCaption = editCaption}/></Td>
                        <Td column='Удалить'>
                            <Button
                                onClick={() => this.editOneItem(id, this.editAuthor.value, this.editIsbn.value, this.editCaption.value)}
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
        var author, isbn, caption;
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
const mapStateToProps = (state) =>{
    return{
        items: state.items,
        edit: state.edit,
        deleteItem: state.deleteItem,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(renderTable);