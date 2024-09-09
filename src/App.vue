<template>
<body>
    <div class="app-body">
      <h1 class="title">{{ title }}</h1>
      <img v-bind:src="frontImage"/>

      <div v-if="showModal"><ModalForm/></div>
      <Buttonsvue @click="toggleModal"/>
      <router-link :to="{name: 'Home'}">Home</router-link>
      <router-view/>




    </div>
  </body>
</template>


<script>
import ModalForm from './components/modal-form.vue'
import Buttonsvue from './components/modal-button.vue';
import VueLazyload from 'vue-lazyload';



export default {
  components: { Buttonsvue, ModalForm},

  data: () => ({

    title: 'Ambii',
    showModal: false,
    frontImage: require('./assets/gradientblob.jpg')

  }),
  directives: {
    lazy: VueLazyload
  },
  head: {
    // creates a title tag in header.
    title () {
      return {
        inner: this.title
      }
    },
    meta: [
      // creates a meta description tag in header.
      { name: 'description', content: 'My description' }
    ]
  },
  methods: {
    toggleModal(){
      this.showModal =!this.showModal
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-body{

  width: 375px; /* Width of iPhone screen */
  height: 667px; /* Height of iPhone screen */
  border: 2px solid #3333335d; /* iPhone border color */
  border-radius: 36px; /* Rounded corners */
  position: relative;
  background-color: #f0f7f6

; /* Background color of the iPhone */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Optional shadow for better visibility */
  display: flex;
  z-index: 0;
flex-direction: column;}
.title{
  margin-top: 100px;
  font-size: 54px;
  font-style: italic;
}

img{
  position:fixed;
  height: 500px;
  top:200px;
  margin-left: 50px;
  width: 250px;
  margin-top:0;
  z-index: -1 !important;
  transform: rotate(180deg);
}
</style>
