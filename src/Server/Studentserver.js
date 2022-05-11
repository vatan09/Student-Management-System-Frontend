const url = "http://localhost:8080"

export const getStudents =()=>{
    return fetch(`${url}/students/`).then(response=>response.json());
}