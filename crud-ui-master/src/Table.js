import React, { Component } from 'react';
import GetItem from './GetItem';
import AddItem from "./AddItem";

class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
        };
    }
    componentDidMount(){
        this.getItems();
    }
    getItems = () =>{
        fetch('http://server.noorsoft.ru:9022/api/records')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    items: result
                });
            })
            .catch(error => console.log(error))
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
        .then(this.getItems)
        .catch(error => console.log(error))

    }
    deleteId(id){
        fetch('http://server.noorsoft.ru:9022/api/records/' + id, {
            method: 'DELETE',
        })
        .then(this.getItems)
        .catch(error => console.log(error))
    }
    render(){
        const {items} = this.state;
        return (
            <div>
            <AddItem
                getItems={this.getItems}
            />
            <table>
                <thead>
                <tr>
                    <td>id</td>
                    <td>Author</td>
                    <td>Isbn</td>
                    <td>Caption</td>
                </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        if (item['data']) {
                            global.array = item['data'];
                        }
                        return (
                            <GetItem
                                key = {item['_id']}
                                id = {item['_id']}
                                array = {global.array}
                                getItems={this.getItems}
                            />
                        );
                    })}
                </tbody>
            </table>
            </div>
        );
    }

}
export default Table;