<template>
  <div>
    <section id="form-section">
      <h2>Formulario de contacto</h2>
      <form class="contact-form" @submit="formSubmit">
        <h3>Información personal</h3>
        <span>Nombre</span>
        <input type="text" name="nombre" ref="nombre">
        <span>Apellido</span>
        <input type="text" name="apellido" ref="apellido">
        <span>Teléfono</span>
        <input type="text" name="telefono" ref="telefono">
        <h3>Información del correo</h3>
        <span>Correo</span>
        <input type="email" name="correo" ref="correo">
        <span>Asunto</span>
        <input type="text" name="asunto" ref="asunto">
        <span>Mensaje</span>
        <textarea name="mensaje" ref="mensaje"></textarea>
        <button type="submit">CONTACTAR</button>
      </form>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  methods: {
    formSubmit(e) {
      var currentObj = this;
      e.preventDefault();
      axios
        .post("http://localhost:3000/send-mail", {
          nombre: currentObj.$refs.nombre.value,
          apellido: currentObj.$refs.apellido.value,
          telefono: currentObj.$refs.telefono.value,
          email: currentObj.$refs.correo.value,
          asunto: currentObj.$refs.asunto.value,
          mensaje: currentObj.$refs.mensaje.value
        })
        .then(function(response) {
          currentObj.output = response.data;
        })
        .catch(function(error) {
          currentObj.output = error;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#form-section {
  padding: 60px 0 20px 0;
  width: 80%;
  margin: 0 auto;
  &,
  .contact-form {
    display: flex;
    flex-direction: column;
  }
  h2,
  h3,
  span {
    color: #0d2773;
    display: block;
    align-self: start;
  }
  h2 {
    font-size: 40px;
    margin-bottom: 0;
  }
  h3 {
    font-size: 30px;
  }
  span {
    font-size: 20px;
  }
  input,
  textarea {
    width: 100%;
    margin: 20px auto;
    font-size: 18px;
    color: #3b3939;
    border-radius: 3px;
    border: 1px solid #536caf;
    background-color: #dadce0;
  }
  input {
    height: 30px;
  }
  textarea {
    height: 100px;
    resize: none;
  }
  button[type="submit"] {
    width: 200px;
    height: 80px;
    color: #ffffff;
    background-color: #2b375a;
    border: none;
    border-radius: 5px;
    align-self: center;
    font-size: 18px;
    letter-spacing: 2px;
  }
}
@media (max-width: 800px) {
  h2 {
    margin-top: 60px;
  }
}
</style>