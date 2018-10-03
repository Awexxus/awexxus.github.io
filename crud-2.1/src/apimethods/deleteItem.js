export default (id) => {
    return fetch('http://server.noorsoft.ru:9022/api/records/'+id, {
        method: 'DELETE',
    }).then(res =>{
        return res
    }).catch(error => console.log(error))
}