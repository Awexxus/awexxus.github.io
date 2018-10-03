export default (author, isbn, caption) => {
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
}