export default{
    postProfile : user => {
        return fetch('/api/profile',{
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


        getProfile : () => {
        return fetch('/api/profile/getprofile')
            .then(response => {
                if(response.status !== 401){
                    return response.json().then(data=>data);
                }
                else{
                    return {message: {msgBody: "UnAuthorized", msgError: true}}
                }
            })
} ,
}
