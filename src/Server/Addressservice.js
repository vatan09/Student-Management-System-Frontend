const url = "http://localhost:8080"

export const getAddress =()=>{
    return fetch(`${url}/students/18/address`).then(response=>response.json());
}