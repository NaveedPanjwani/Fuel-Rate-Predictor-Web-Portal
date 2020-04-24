export default{
    postForm : user => {
        //console.log('USER: ', user)
        return fetch('/api/forum',{
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(response => {
            if(response.status !== 401){
                return response.json().then(data => data);
            }
            else
                return {message : {msgBody: "unAuthorized "}, mgError: true}
        })
    },
    
    getForm : user => {
        return fetch('/api/forum/getforum')
        .then(response => {
                if(response.status !== 401){
                    return response.json().then(data=>data);
                }
                else{
                    return {message: {msgBody: "UnAuthorized", msgError: true}}
                }
            })
    },
}