const url = "http://localhost:8080"

export const getproject =()=>{
    return fetch(`${url}/students/18/project`).then(response=>response.json());
}