import { api } from '../../utils/axios'


export const stateDetails = {
    detals: {
    adult: false,
    backdrop_path: "",
    belongs_to_collection: {
        id: 0,
        name: "",
        poster_path: "",
        backdrop_path: "",
    },
    budget: 0,
    genres: [],
    homepage: "",
    id: 0,
    imdb_id: "",
    original_language: "",
    original_title: "",
    overview:"",
    popularity: 0,
    poster_path: "",
    production_companies: [],
    production_countries: [],
    release_date: "",
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: "",
    tagline: "",
    title: "",
    video: '',
    vote_average: '',
    vote_count: '',
},
    actors: [],
    img: [],
    sim: [],
    rec: [],
    review: []
};

export const gettersDetails = {
    getDetails: state => state.detals,
    getActors: state => state.actors,
    getImages: state => state.img,
    getSim: state => state.sim,
    getRec: state => state.rec,
    getReview: state => state.review
};


export const mutationsDetails = {
    SET_DETAILS(state, payload) {
        state.detals = payload
    },
    SET_ACTORS(state, payload) {
        state.actors = payload
    },
    SET_IMG(state, payload) {
        state.img = payload
    },
    SET_SIM(state, payload) {
        state.sim = payload
    },
    SET_REC(state, payload) {
        state.rec = payload
    },
    SET_REVIEW(state, payload) {
        state.review = payload
    }
};

export const actionsDetails = {
    fetchDetails({commit}, movieId) {
        api.get(`/3/movie/${movieId}?language=en-US`)
            .then( ({data}) => {
                commit('SET_DETAILS', data)
            })
            .catch( err => {
                console.log(err);
            })
    },

    fetchActors({commit}, movieId) {
        api.get(`/3/movie/${movieId}/credits?language=en-US`)
            .then( ({data}) => {
                commit('SET_ACTORS', data.cast)
            })
            .catch( err => {
                console.log(err);
            })
    },

    fetchImagesFilm({commit}, movieId) {
        api.get(`/3/movie/${movieId}/images`)
            .then( ({data}) => {
                commit('SET_IMG', data.backdrops)
            })
            .catch( err => {
                console.log(err);
            })
    },

    fetchSimilar({commit}, movieId) {
        api.get(`/3/movie/${movieId}/similar?language=en-US&page=1`)
            .then( ({data}) => {
                commit('SET_SIM', data.results)
            })
            .catch( err => {
                console.log(err);
            })
    },

    fetchRec({commit}, movieId) {
        api.get(`/3/movie/${movieId}/similar?language=en-US&page=1`)
            .then( ({data}) => {
                commit('SET_REC', data.results)
            })
            .catch( err => {
                console.log(err);
            })
    },

    fetchReview({commit}, movieId) {
        api.get(`/3/movie/${movieId}/reviews?language=en-US&page=1`)
            .then( ({data}) => {
                commit('SET_REVIEW', data.results)
            })
            .catch( err => {
                console.log(err);
            })
    }
}