import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:8000/books"})

async function getBooks(){
    const response = await API.get('/')
    return response.data
}

export{
    getBooks
}