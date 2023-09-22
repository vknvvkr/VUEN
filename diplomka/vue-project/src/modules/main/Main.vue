<template>
  <div class="main">
    <div class="top">
      <input type="text" placeholder="Поиск" @change="searchFilm($event)">
    </div>
    <div class="main-wrapper">
      <div class="main-cards" v-for="item of getFilms.results" :key="item.id">
        <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`" alt="">
        <h3>{{ item.title }}</h3>
        <div class="more">
          <router-link :to="{ path: `/details/${item.title}`, query: {id: item.id} }" class="no-underline">
            <p>Подробнее</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="main-page">
      <button @click="pageMove('SET_DECR_PAGE')">Назад</button>
      <div class="number">
        <span>{{ getPage }}</span>
        <span> из </span>
        <span>{{ getFilms.total_pages }}</span>
      </div>
      <button @click="pageMove('SET_INCR_PAGE')">Вперед</button>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('fetchMovies')
  },
  methods: {
    pageMove(mutationName) {
      this.$store.commit(mutationName);
      this.$store.dispatch('fetchMovies')
    }
  },
  fetchMovies() {
      this.$store.dispatch('fetchMovies');
    },
    computed: {
      getFilms() {
        return this.$store.getters.getFilms
      },
      getPage() {
        return this.$store.getters.getPage
      }
    },
  
}
</script>

<style scoped>
@import '../../assets/css/main.css';
.main {
  margin: 0 auto;
  /* padding: 0; */
  background: #272B53;
}
.top {
  background: #111532;
  margin: 0;
  padding-top: 8px;
  padding-bottom: 8px;
}
input {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 5px 30px;
  text-align: center;
  border-radius: 10px;
  min-width: 240px;
}
.main-wrapper {
  padding-top: 60px;
  padding-bottom: 60px;
  display: grid;
  /* justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; */
  column-gap: 50px;
  row-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  background: #272B53;
  padding-inline: 60px;
  margin-inline: auto;
  width: fit-content;
}
.main-cards {
  margin: auto;
}
h3 {
  font-weight: 400;
  text-align: center;
  color:#FFFFFF;
  font-family: sans-serif;
  text-decoration: none;
  position: relative;
}
.more {
  text-align: center;
  background:#193759;
  padding: 4px 5px;
  border-radius: 10px;
  text-decoration: none;
}
.more p {
  display: block;
  font-weight: 400;
  font-family: sans-serif;
  color: #FFFFFF;
  
}
.no-underline {
  text-decoration: none;
}
img {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 2px 3px;
}
.main-page {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
}
button {
  background:#7754A4;
  border-radius: 10px;
  border: none;
  color: #FFFFFF;
  font-family: sans-serif;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: -10px;
}
.number span {
  margin-right: 10px;
  display: inline-block;
}
span {
  color: #FFFFFF;
  font-family: sans-serif;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .main-wrapper {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }
}

@media (min-width: 769px) and (max-width: 991px) {
  .main-wrapper {
    grid-template-columns: repeat(3, 1fr); 
    column-gap: 30px;
  }
}

@media (min-width: 992px) {
  .main-wrapper {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 50px;
  }
}
</style>