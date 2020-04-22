export default {
    postForm : user => {
        return fetch('api/forum',{
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
            
}