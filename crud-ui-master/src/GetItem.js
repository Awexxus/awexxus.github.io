import {Component} from "react";
import React from "react";

class GetItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            edit: false
        }

        this.deleteId = this.deleteId.bind(this);
        this.editId = this.editId.bind(this);
        this.editOneId = this.editOneId.bind(this);
    }
    EditOneItem(id ,author, isbn, caption){
        return fetch('http://server.noorsoft.ru:9022/api/records/'+id, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: {
                    author: author,
                    isbn: isbn,
                    caption: caption
                }
            })
        })
            .then(response => response.json())
    }
    deleteId(id){
        return fetch('http://server.noorsoft.ru:9022/api/records/' + id, {
            method: 'DELETE',
        }),window.location.reload();
    }
    editId(){
        this.setState({
            edit: true
        })
    }
    editOneId(){
        if (this.editAuthor.value, this.editIsbn.value, this.editCaption.value != '') {
            this.EditOneItem(this.props.id, this.editAuthor.value, this.editIsbn.value, this.editCaption.value);
            window.location.reload();
        }else{
            return (alert('Заполните данные'))
        }
    }
    render(){
        const {id, array } = this.props;
        return (

                this.state.edit
                ? (
                    <tr key={id}>
                      <td>{id}</td>
                      <td><input placeholder="author" ref={editAuthor => this.editAuthor = editAuthor}/></td>
                      <td><input placeholder="isbn" ref={editIsbn => this.editIsbn = editIsbn}/></td>
                      <td><input placeholder="caption" ref={editCaption => this.editCaption = editCaption}/></td>
                      <td className="noneBorder">
                           <button  onClick={() => this.editOneId()}>Сохранить</button>
                      </td>
                    </tr>
                ):(
                 <tr key={id}>
                    <td>{id}</td>
                         {
                             Object.values(array).map((value, index) =>{
                                 return (<td key={index}>{value}</td>);
                             })
                         }
                    <td className="noneBorder">
                        <button onClick={() => this.deleteId(id)}>Удалить</button>
                        <button onClick={() => this.editId()}>Редактировать</button>
                    </td>
                 </tr>
                )
           );
    }
}

export default GetItem;