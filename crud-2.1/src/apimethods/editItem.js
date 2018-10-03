export default (id, author, isbn, caption) => {
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
    }).then(res =>{
        return res
    })
    .catch(error => console.log(error))
}