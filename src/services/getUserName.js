const getUserName = async(token) => {
    const response = await fetch("/users/me", {
        method:'GET',
        body:JSON.stringify(),
        headers:{
            "cotent-type":"application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    return(await response.json())
}

export default getUserName