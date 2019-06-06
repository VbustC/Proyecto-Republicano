<template>
  <div>
    <section class="form">
      <h2 class="form__heading-secondary">Formulario de contacto</h2>
      <form class="form__contact" @submit="formSubmit">
        <h3 class="form__heading-tertiary">Información personal</h3>
        <span class="form__text-span">Nombre</span>
        <input class="form__input" type="text" name="nombre" ref="nombre" required>
        <span class="form__text-span">Apellido</span>
        <input class="form__input" type="text" name="apellido" ref="apellido" required>
        <span class="form__text-span">Teléfono</span>
        <input class="form__input" type="text" name="telefono" ref="telefono" required>
        <h3 class="form__heading-tertiary">Información del correo</h3>
        <span class="form__text-span">Correo</span>
        <input class="form__input" type="email" name="correo" ref="correo" required>
        <span class="form__text-span">Asunto</span>
        <input class="form__input" type="text" name="asunto" ref="asunto" required>
        <span class="form__text-span">Mensaje</span>
        <textarea class="form__text-area" name="mensaje" ref="mensaje" required></textarea>
        <button class="form__button" type="submit">CONTACTAR</button>
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
      if (
        !currentObj.$refs.nombre.value ||
        !currentObj.$refs.apellido.value ||
        !currentObj.$refs.telefono.value ||
        !currentObj.$refs.correo.value ||
        !currentObj.$refs.asunto.value ||
        !currentObj.$refs.mensaje.value
      ) {
        alert("Debe rellenar todos los campos para poder enviar su mensaje");
        return 0;
      }
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
          currentObj.$refs.nombre.value = "";
          currentObj.$refs.apellido.value = "";
          currentObj.$refs.telefono.value = "";
          currentObj.$refs.correo.value = "";
          currentObj.$refs.asunto.value = "";
          currentObj.$refs.mensaje.value = "";
          alert("Su mensaje se ha enviado correctamente");
        })
        .catch(function(error) {
          currentObj.output = error;
          alert("Hubo un error inesperado, no pudimos enviar su mensaje");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  padding: 6rem 0 2rem 0;
  width: 80%;
  margin: 0 auto;

  &__contact {
    display: flex;
    flex-direction: column;
  }

  &__heading-secondary,
  &__heading-tertiary,
  &__text-span {
    color: #0d2773;
    display: block;
    align-self: start;
  }

  &__heading-secondary {
    font-size: 4rem;
    margin-bottom: 0;
  }

  &__heading-tertiary {
    font-size: 3rem;
  }

  &__text-span {
    font-size: 2rem;
  }

  &__input,
  &__text-area {
    width: 100%;
    margin: 2rem auto;
    font-size: 1.8rem;
    color: #3b3939;
    border-radius: 3px;
    border: 1px solid #536caf;
    background-color: #dadce0;
  }

  &__input {
    height: 3rem;
  }

  &__text-area {
    height: 10rem;
    resize: none;
  }

  &__button[type="submit"] {
    width: 20rem;
    height: 8rem;
    color: #ffffff;
    background-color: #2b375a;
    border: none;
    border-radius: 5px;
    align-self: center;
    font-size: 1.8rem;
    letter-spacing: 2px;
    cursor: pointer;
  }
}
@media (max-width: 800px) {
  .form {
    &__heading-secondary {
      margin-top: 6rem;
    }
  }
}
</style>
