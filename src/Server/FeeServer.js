const url = "http://localhost:8080"

export const getfee =()=>{
    return fetch(`${url}/students/18/fee/get`).then(response=>response.json());
}