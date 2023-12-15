new Vue({
    el: '#app',
    data: {
      userData: {
        name: '',
        apellido: ''
      },
      films: [],
      selectedFilm: null
    },
    methods: {
      getUserData() {
        this.userData.name = prompt('Ingrese su nombre:');
        this.userData.apellido = prompt('Ingrese su apellido:');
      },
      clearUserData() {
        this.userData.name = '';
        this.userData.apellido = '';
        this.films = [];
        this.selectedFilm = null;
      },
      getFilms() {
        axios.get('https://ghibliapi.vercel.app/films')
          .then(response => {
            this.films = response.data;
          })
          .catch(error => {
            console.error('Error al obtener la lista de películas:', error);
          });
      },
      getFilmDetails(filmId) {
        axios.get(`https://ghibliapi.vercel.app/films/${filmId}`)
          .then(response => {
            this.selectedFilm = {
              title: response.data.title,
              title_english: response.data.title_english,
              director: response.data.director,
              description: response.data.description,
              duration: response.data.running_time,
              image: 'https://via.placeholder.com/200' // Puedes reemplazar esto con la URL real de la imagen de la película
            };
          })
          .catch(error => {
            console.error('Error al obtener los detalles de la película:', error);
          });
      }
    },
    mounted() {
      this.getFilms();
    }
  });