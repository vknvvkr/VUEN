import { api } from '../../utils/axios'

export const stateMain = {
    films: {},
    page: 1
}

export const gettersMain = {
    getFilms: state => state.films,
    getPage: state => state.page
}

export const mutationsMain = {
    SET_FILMS(state, payload) {
        state.films = payload
    },
    SET_INCR_PAGE(state) {
        state.page++
    },
    SET_DECR_PAGE(state) {
        state.page--
    }
}

export const actionsMain = { 
    pageMove({commit, state}, mutationName) {
        commit(mutationName, state)
    },
    fetchMovies({commit, state}) {
        api.get(`/3/movie/popular?-page=${state.page}`)
        .then( ({data}) => {
            commit('SET_FILMS', data)
        })
        .catch( err => {
            console.log(err);
        })
},
searchFilm({commit, state}, name) {
    api.get(`Search - /3/search/movie?query=${film_name}&include_adult=false&language=en-US&page=1`)
        .then( ({data}) => {
            commit('SET_FILMS', data)
        })
        .catch( err => {
            console.log(err);
        })
    },
    // async fetchMovies({ commit, state }) {
    //     try {
    //         const response = await api.get(`/3/movie/popular?page=${state.page}`);
    //         commit('SET_FILMS', response.data);
    //         return response.data;
    //     }
    //     catch (error) {
    //         console.error(error);
    //         throw error; 
    //     }
    // }
}