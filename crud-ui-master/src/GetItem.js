import React, {Component} from "react";

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
        fetch('http://server.noorsoft.ru:9022/api/records/'+id, {
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
        .then(this.props.getItems)
        .then(this.setState({
            edit: false
        }))
        .catch(error => console.log(error))
    }
    deleteId(id){
        fetch('http://server.noorsoft.ru:9022/api/records/' + id, {
            method: 'DELETE',
        })
        .then(this.props.getItems)
        .catch(error => console.log(error))
    }
    editId(){
        this.setState({
            edit: true
        })
    }
    editOneId(){
        if (this.editAuthor.value !== '', this.editIsbn.value !== '', this.editCaption.value !== '') {
            this.EditOneItem(this.props.id, this.editAuthor.value, this.editIsbn.value, this.editCaption.value);
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
                                 if(value !== '') {
                                     return (<td key={index}>{value}</td>);
                                 }else{
                                     return (<td key={index}>Нет данных</td>);
                                 }
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