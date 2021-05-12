import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID -uyLIs1pg5YXEUCWuE0GmWPXO0yuoazSBvqfTgOCZG8'
    }

})