import React, { Component } from 'react';
class AddItem extends Component {

    AddOneItem(author, isbn, caption) {
            fetch('http://server.noorsoft.ru:9022/api/records', {
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
             .then(this.props.getItems)
             .then(this.resAuthor.value = '', this.resIsbn.value = '', this.resCaption.value = '')
             .catch(error => console.log(error))
    }
    onSubmit(event){
        event.preventDefault();
        if (this.resAuthor.value = '', this.resIsbn.value = '', this.resCaption.value = '') {
        this.AddOneItem(this.resAuthor.value, this.resIsbn.value, this.resCaption.value);
        }else{
            return (alert('Заполните данные'))
        }
    }
    render(){
        return(
            <section>
                <div className="header">
                    <div className="logo">
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <h1>Добавить запись</h1>
                            <input placeholder="author" ref={resAuthor => this.resAuthor = resAuthor}/>
                            <input placeholder="isbn" ref={resIsbn => this.resIsbn = resIsbn} />
                            <input placeholder="caption" ref={resCaption => this.resCaption = resCaption}/>
                            <button>Добавить</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default AddItem;