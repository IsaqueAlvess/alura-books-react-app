import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:8000/favorites"})

async function getFavorites(){
    const response = await API.get('/')
    return response.data
}

export{
    getFavorites
}