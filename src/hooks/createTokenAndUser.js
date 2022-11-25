export const createTokenAndUser = (user, email)=>{
    fetch(`http://localhost:8000/users/${email}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=> {
        localStorage.setItem("token", `bearer ${data.token}`);
        console.log(data)
        return data
    })
    .catch(error=>console.log(error))
}