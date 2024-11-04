import axios from 'axios'

export const baseApi = axios.create({
    baseURL: 'https://api.themoviedb.org',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODg5Yzg5ZjdhMzJlNzgzYmJlNjI3ZWEzNDQzM2E3YSIsIm5iZiI6MTcyNzI2OTg4Mi4wODM3MzIsInN1YiI6IjY2ZjQwYjA5MzM4MzU3YzcwYTZhMDFlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kR63lLho0ihHdLrWFc2qkb6E6LsO-n4UlafEAD60Kcw'
    }
})
