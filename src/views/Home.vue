<template>


  <h1 class="title">{{ title }}</h1>
  <h2 class="slogan">{{ slogan }}</h2>
  <!-- <img v-bind:src="frontImage"/> -->
   <video autoplay loop muted>
    <source src="../assets/ambii.mp4" type="video/webm"/>
    <source src="../assets/ambii.mp4" type="video/mp4"/>
  </video>

  <div v-if="showModal">
    <ModalForm/>
  </div>
  <Buttonsvue @click="toggleModal">{{ buttonText }}</Buttonsvue>
  <router-view/>



</template>







<script>
import VueLazyload from 'vue-lazyload';
import ModalForm from '../components/modal-form.vue'
import Buttonsvue from '../components/modal-button.vue';

export default {
  components: { Buttonsvue, ModalForm},

  data: () => ({

  title: 'Ambii',
  slogan: 'We are ambitious',
  showModal: false,
  frontImage: require('../assets/gradientblob.jpg'),
  buttonText: 'Enter',
  formShown: false

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
    toggleModal() {
      if (this.showModal && this.buttonText === 'Submit') {
        this.$router.push({ name: 'Dashboard'});
        return;

      }
      this.showModal = !this.showModal;
      this.buttonText = this.showModal ? 'Submit' : 'Enter';

      if (this.showModal) {
        this.formShown = true;
      }

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
position:absolute;
height: 500px;
top:150px;
margin-left: 50px;
width: 250px;
margin-top:0;
z-index: -1 !important;
transform: rotate(180deg);
}
.slogan{
margin-top: -40px;
font-weight: 100;
font-size: 24px;
}
video{
  position:absolute;
  z-index: -1 !important;
  width: 375px; /* Width of iPhone screen */
  height: 667px;
  border-radius: 36px; /* Rounded corners */
  opacity: 50%;


}
 </style>
