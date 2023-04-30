import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:8000/livros"})

function getBooks(){
    const response = API.get('/')

    return response.data
}

export{
    getBooks
}