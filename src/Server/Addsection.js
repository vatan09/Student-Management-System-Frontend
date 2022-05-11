const url = "http://localhost:8080"

export const getSection =()=>{
    return fetch(`${url}/students/9/section/get`).then(response=>response.json());
}