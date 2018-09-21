import React, { Component } from 'react';
import GetItem from './GetItem';

class Table extends Component {
    constructor(props){
        super(props);
        this.state = {items: []};
    }
    componentWillMount(){
        fetch('http://server.noorsoft.ru:9022/api/records')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    items: result
                });
            })
    }
    render(){
        const {items} = this.state;
        return (
            <table>
                <thead>
                <tr>
                    <td>id</td>
                    <td>Author</td>
                    <td>Isbn</td>
                    <td>Caption</td>
                </tr>
                </thead>
                {items.map((item) => {
                    if (item['data']) {
                        Object.keys(item['data']).map((key) => {
                            global.author = item['data']['author'];
                            global.isbn = item['data']['isbn'];
                            global.caption = item['data']['caption'];
                        });
                    }
                    return (
                        <GetItem
                            key = {item['_id']}
                            id = {item['_id']}
                            author = {global.author}
                            isbn = {global.isbn}
                            caption = {global.caption}
                        />
                    );
                })}
            </table>
        );
    }

}

export default Table;