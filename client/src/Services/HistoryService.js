const fetchHeaders = {
  'Content-Type' : 'application/json'
};

export const postHistory = (user) => {
  return fetch('/api/history', {
    method: 'post',
    body: JSON.stringify(user),
    headers: fetchHeaders
  }).then((response) => {
    return (response.status !== 401 ? response.json().then((res) => res) : {message: { msgBody: "unAuthorized "}, mgError: true})
  });
};

export const getHistory = () => {
  return fetch('/api/history/gethistory')
    .then((response) => {
      return (response.status !== 401 ? response.json() : {message: { msgBody: "unAuthorized "}, mgError: true});
    })
};