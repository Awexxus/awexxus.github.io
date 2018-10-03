export default () => {
    return fetch('http://server.noorsoft.ru:9022/api/records')
        .then(res => {return res.json()})
        .then(function(result){
            return result
        })
        .catch(error => console.log(error))
}