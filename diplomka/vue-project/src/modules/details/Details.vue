<template>
    <div class="details">
        <div class="top">
            <div class="top__left">
                <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${getDetails.belongs_to_collection ? getDetails.belongs_to_collection.poster_path : getDetails.backdrop_path}`" alt="">
            </div>
            <div class="top__right">
                <div>Название: {{ getDetails.original_title }}</div>
                <div>Жанр: {{ getDetails.genres.map(item => item.name).join(', ') }}</div>
                <div>Страна: {{ getDetails.production_countries.map(item => item.name).join(',') }}</div>
                <div>Дата выхода: {{ getDetails.release_date }}</div>
                <div>Длительность: {{ getDetails.runline }}мин</div>
                <div>Рейтинг: {{ getDetails.vote_average }}</div>
                <div>Описание: {{ getDetails.overview }}</div>
            </div>
        </div>
        <div class="details-block">
            <h3 class="title">Актерский состав</h3>
            <Carousel :items-to-show="5" :wrap-around="true"
            v-bind="settings" :breakpoints="breakpoints">
                <Slide v-for="slide of getActors" :key="slide">
                    <router-link class="actor-slide" to="/">
                        <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${slide.profile_path}`" alt="">
                        <h3>{{ slide.name }}</h3>
                    </router-link>
                </Slide>
        <template #addons>
            <Navigation />
        </template>
    </Carousel>
    </div>

    <div class="details-block">
        <h3 class="title">Кадры фильма</h3>
        <Carousel :items-to-show="5" :wrap-around="true"
        v-bind="settings" :breakpoints="breakpoints">
            <Slide v-for="slide of getImages" :key="slide">
                <div class="actor-slide">
                    <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${slide.file_path}`" alt="">
                </div>
            </Slide>
        <template #addons>
            <Navigation />
        </template>
    </Carousel>
    </div>

    <div class="details-block">
        <h3 class="title">Похожие фильмы</h3>
        <Carousel :items-to-show="5" :wrap-around="true"
        v-bind="settings" :breakpoints="breakpoints">
            <Slide v-for="slide of getSim" :key="slide">
                <router-link :to="{ path: `/details/${slide.title}`, query: {id: slide.id} }" class="no-underline">
                    <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${slide.poster_path}`" alt="">
                    <h3>{{ slide.title }}</h3>
                </router-link>
            </Slide>
        <template #addons>
            <Navigation />
        </template>
    </Carousel>
    </div>

    <div class="details-block">
        <h3 class="title">Рекомендации</h3>
        <Carousel :items-to-show="5" :wrap-around="true"
        v-bind="settings" :breakpoints="breakpoints">
            <Slide v-for="slide of getRec" :key="slide">
                <router-link :to="{ path: `/details/${slide.title}`, query: {id: slide.id} }" class="no-underline">
                    <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${slide.poster_path}`">
                    <h3>{{ slide.title }}</h3>
                </router-link>
            </Slide>
        <template #addons>
            <Navigation />
        </template>
    </Carousel>
    </div>

    <div class="details-block">
        <h3 class="title">Отзывы</h3>
        <div class="review-card" v-for="item of getReview" :key="item">
            <div class="review-left">
                <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${item.author_details.avatar_path}`"
                style="height: 100px; width: 100px;"
                alt="">
            </div>
            <div class="review-right">
                <span>{{ item.author }}</span>
                <span class="date"> {{ item.created_at }}</span>
            </div>
            <p class="review-text">{{ item.content }}</p>
        </div>
    </div>
    </div>
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
export default {
    components: {
        Pagination,
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
    settings: {
        itemsToShow: 1,
        snapAlign: 'center',
    },
    breakpoints: {
        700: {
            itemsToShow: 3.5,
            snapAlign: 'center',
        },
        1024: {
            itemsToShow: 4,
            snapAlign: 'start',
        },
    },
}),
    created() {
    this.$store.dispatch('fetchDetails', this.$route.query.id)
    this.$store.dispatch('fetchActors', this.$route.query.id)
    this.$store.dispatch('fetchImagesFilm', this.$route.query.id)
    this.$store.dispatch('fetchSimilar', this.$route.query.id)
    this.$store.dispatch('fetchRec', this.$route.query.id)
    this.$store.dispatch('fetchSimilar', this.$route.query.id)
    this.$store.dispatch('fetchReview', this.$route.query.id)
    },
    computed: {
    getDetails() {
        return this.$store.getters.getDetails
    },
    getActors() {
        return this.$store.getters.getActors
    },
    getImages() {
        return this.$store.getters.getImages
    },
    getSim() {
        return this.$store.getters.getSim
    },
    getRec() {
        return this.$store.getters.getRec
    },
    getReview() {
        return this.$store.getters.getReview
    }
    }
}
</script>

<style scoped>
@import '../../assets/css/main.css';

.no-underline {
    text-decoration: none;
}
.details {
    margin: 0 auto;
    padding: 50px 50px;
    background: #272B53;
}
.top {
    max-width: 1300px;
    margin: auto;
    display: flex;
    justify-content: space-between;
}
.top__left {
    max-width: 382px;
}
.top__left img {
    width: 300px;
    margin: 30px;
    margin-left: 85;
}
.top__right {
    width: auto;
    padding: 120px;
}
.top__right div {
    color: #FFFFFF;
    font-family: sans-serif;
    text-decoration: none;
    font-size: 23px;
    font-weight: 400;
    display: block;
}
.title {
    color:#FFFFFF;
    font-family: sans-serif;
    text-align: center;
    padding: 100px;
}
.actor-slide {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 10px;
    padding: 10px;
    height: 100%;
}

h3 {
    color: #FFFFFF;
    font-weight: 400;
    font-family: sans-serif;
    text-decoration: none;
}

.details-block {
    margin-bottom: 20px;
}
.title {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.review-card {
    background-color: #161540;
    padding: 15px; 
    border: 1.5px solid #CECECE; 
    border-radius: 20px; 
    margin-bottom: 15px;
}
.review-left img {
    width: 100px; 
    height: 100px; 
    border-radius: 50%; 
    margin-right: 15px; 
}
.review-right {
    font-weight: bold; 
    font-size: 17px;
    color: #c7c7c7;
}
p {
    margin-top: 10px;
    color: #FFFFFF;
    font-family: sans-serif;
    font-size: 14px;
}


@media (max-width: 982px) {
    .details {
        padding: 7px;
    }
    .top__left img {
        width: 380px;
    }
    .top__right {
        padding: 85px; 
    }
}
@media (max-width: 635px) {
    .details {
        padding: 20px; 
    }
    .top {
        flex-direction: column; 
    }
    .top__left img {
        margin: 10px; 
    }
    .top__right {
        padding: 20px; 
        text-align: justify;
    }
    .top__right div {
        font-size: 30px;
    }
}
@media (max-width: 1024px) {
    .details {
        padding: 60px;
    }
    .top__left img {
        width: 380px;
    }
    
    .top__right div {
        font-size: 28px;
    }
}
</style>