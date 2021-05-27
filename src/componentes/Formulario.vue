<template>

  <section class="src-componentes-formulario">
      <div class="jumbotron">

        <h2>Formulario</h2>
        <hr>
        <br>
        <vue-form :state="formState" @submit.prevent="enviar()">
          <validate tag="div">
            <label for="nombre">Nombre</label>
            <input type="text"
               id="nombre" 
               name="nombre" 
               class="form-control" 
               autocomplete="off"
               v-model.trim="formData.nombre"
               required
               :minlength="nombreLengthMin"
               :maxlength="nombreLengthMax">
            <field-messages name="nombre" show="$dirty">
                <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                <div v-if="formData.nombre.length < nombreLengthMin" slot="minlength" class="alert alert-danger mt-1">Campo requiere al menos {{ nombreLengthMin }} caracteres</div>
                <div v-if="formData.nombre.length == nombreLengthMax" class="alert alert-danger mt-1">Campo requiere como maximo {{ nombreLengthMax }} caracteres</div>       
             </field-messages>
          </validate>
          <validate tag="div">
            <label for="edad">Edad</label>
            <input type="number"
             id="edad"
             name="edad" 
             class="form-control" 
             autocomplete="off" 
             v-model.number="formData.edad"
             :min="edadMin"
             :max="edadMax">
              <field-messages name="edad" show="$dirty">
                <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                <div slot="min" class="alert alert-danger mt-1">La edad minima debe ser {{ edadMin }} años</div>
                <div slot="max" class="alert alert-danger mt-1">La edad maxima debe ser {{ edadMax }} años</div>       
              </field-messages>
          </validate>
          <validate tag="div">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" class="form-control" autocomplete="off" v-model.trim="formData.email">
              <field-messages name="email" show="$dirty">
                <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                <div slot="email" class="alert alert-danger mt-1">Debe ingresar un email valido</div>      
              </field-messages>
          </validate>
          <button class="btn btn-success my-3" :disabled="formState.$invalid" type="submit">Agregar</button>
        </vue-form>

       

      </div>

       <table class="table table-dark" v-show="lista.length">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Email</th>
            </tr>
          </thead>
          <tr v-for="(persona, index) in lista" :key="index">
            <td> {{ persona.nombre }} </td>
            <td> {{ persona.edad }} </td>
            <td> {{ persona.email }} </td>
          </tr>
        </table>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formData: this.getInitialData(),
        formState: {},
        nombreLengthMin: 5,
        nombreLengthMax: 15,
        edadMin: 18,
        edadMax: 120,
        lista: []
      }
    },
    methods: {
      enviar() {
        this.lista.push(this.formData)
        this.formState._reset()
        this.formData = this.getInitialData()
      },
      getInitialData() {
        return {
          nombre: '',
          edad: '',
          email: ''
        }
      }

    },
    computed: {

    }
}


</script>

<style scoped>

.jumbotron {
  background-color: black;
  color: white;
}

hr {
  background-color: #eee;
}

</style>
