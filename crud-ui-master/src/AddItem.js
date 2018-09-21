import React, { Component } from 'react';

class AddItem extends Component {
    AddOneItem(author, isbn, caption) {
            return fetch('http://server.noorsoft.ru:9022/api/records', {
                method: 'PUT',
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
    onSubmit(event){
        event.preventDefault();
        if (this.resAuthor.value, this.resIsbn.value, this.resCaption.value != '') {
        this.AddOneItem(this.resAuthor.value, this.resIsbn.value, this.resCaption.value);
        window.location.reload();
        }else{
            return (alert('Заполните данные'))
        }
    }
    render(){
        return(
            <form onSubmit={this.onSubmit.bind(this)}>
                <h1>Добавить запись</h1>
                <input placeholder="author" ref={resAuthor => this.resAuthor = resAuthor}/>
                <input placeholder="isbn" ref={resIsbn => this.resIsbn = resIsbn} />
                <input placeholder="caption" ref={resCaption => this.resCaption = resCaption}/>
                <button>Добавить</button>
            </form>
        )
    }
}

export default AddItem;