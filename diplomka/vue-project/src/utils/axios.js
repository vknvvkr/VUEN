import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org',
    timeout: 10000, 
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWI5YmU4MmQ2YjQwN2VkZTgwNGU5OWM2ZjhlMzEwOCIsInN1YiI6IjY0Y2I4OTU1NGZkMTQxMDEyNzA5YTM4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C6Sx-tlcluPTjn89Uw7n5ape_qBnah4XKSFaF2mlHMQ`
    }
})