import React, { Component } from 'react';

class ApiGet extends Component {
    render() {
        return (
            fetch('http://server.noorsoft.ru:9022/api/records', {method: "GET"}).then(response => {
                response.json().then(function(data) {
                    return data;
                });
            })
        );
    }
}

export default ApiGet;
