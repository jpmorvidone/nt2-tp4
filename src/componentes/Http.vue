<template>
    <section class="src-componentes-http">
      <div class="jumbotron">
      <button class="btn btn-success my-3 mx-3" @click="getPostsXHR()">XMLHttpRequest</button>
      <button class="btn btn-info my-3 mx-3" @click="getPostsFetch()">Fetch</button>
      <button class="btn btn-danger my-3 mx-3" @click="getPostsAxios()">Axios</button>
        <table class="table table-dark" v-show="posts.length">
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
          </tr>
          <tr v-for="(post, index) in posts" :key="index">
            <td>{{ post.nombre }}</td>
            <td>{{ post.email }}</td>
            <td>{{ post.telefono }}</td>
          </tr>
        </table>
        </div>
    </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-http',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://60aff71b1f26610017ffd9f8.mockapi.io/usuarios',
        posts: []
      }
    },
    methods: {
      getPostsXHR() {
        let xhr = new XMLHttpRequest;

        xhr.open('get', this.url);
        xhr.addEventListener('load', () => {
          if(xhr.status == 200) {
            let respuesta = xhr.response;
            console.log(respuesta);
            this.posts = JSON.parse(respuesta);
          } 
        })
        xhr.send();
      },
      getPostsFetch() {
        fetch(this.url)
        .then(datos => datos.json())
        .then(respuesta => {
          console.log(respuesta)
          this.posts = respuesta
        })
      },
      getPostsAxios() {
        this.axios(this.url)
        .then(respuesta => {
          this.posts = respuesta.data
        })
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-http {

  }
</style>
