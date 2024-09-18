<template>
<div id="profileContainer">
    <div class="profPicContainer">
     <img id="profilePicture" v-bind:src="profilePic" @click="toProfile"/>
    </div>
    <div class="bioContainer"></div>
    <div id="hobbiesContainer">
        <div class="hobby"></div>
        <div class="hobby"></div>
        <div class="hobby"></div>
    </div>
    <div class="pillsContainer">
        <div class = "pill"></div>
        <div class = "pill"></div>
        <div class = "pill"></div>
        <div class = "pill"></div>


    </div>
    <div class = "prompt"></div>

    <Buttonsvue class="dashbutton" @click="backToDash">{{ buttonText }}</Buttonsvue>

 </div>
</template>

<script>
import Buttonsvue from '../components/modal-button.vue';
export default{
    data:()=>({
        buttonText:"Back",
        profilePic: require('../assets/profilepic.png')
    }),
    components: { Buttonsvue },
    methods: {
        backToDash(){
        this.$router.push({name: 'Dashboard'});
        },

        toProfile(){
            this.$router.push({name: 'Profile'})
        },
    }
}
</script>

<style>
#profileContainer{
    display: flex;
    z-index: -1;
    flex-direction: column;
    position: relative;
}
.profPicContainer{
    position: absolute;
    top: 30px;
    left: 105px;
    border-radius: 50%;
    width: 10em;
    height: 10em;
    border: 10px solid rgb(205, 200, 200);
    background:rgb(231, 231, 231);
    display: flex;
    align-items:center;
    justify-content: center;
    box-sizing: border-box;
    white-space: nowrap;
    z-index: 1;

}
#profilePicture{
    display: inline-block;
    height:100%;
    width:100%;
    transform: rotate(360deg);
    object-fit: cover; /* Ensures the image covers the container without distortion */
    border-radius: 50%;
    margin-top: -150px;
    margin-left: 3px;
    z-index: 100;
}
.bioContainer{

    width: 350px;
    height: 200px;
    background: rgb(231, 231, 231);
    z-index: 5;
    margin:50px auto 10px;
    padding: 0;
    border-radius: 5%;
    z-index: -1;
    position: relative;


}
#hobbiesContainer{
    display: flex;
    flex-direction: row;
    width: 350px;
    justify-content: space-between;
    margin: 10px auto;
}
.hobby{
    width:110px;
    height: 150px;
    background: rgb(231, 231, 231);
    border-radius: 10px;
}
.pillsContainer{
    width:350px;
    height: 85px;
    border: 2px solid rgb(231, 231, 231);
    background: rgba(231, 231, 231, 0.496);

    margin: 10px auto;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
    flex-wrap: wrap;



}
.pill{
    background: rgb(207, 225, 230);
    width: 100px;
    height: 25px;
    border-radius: 20px;
    margin-bottom: 10px;
    cursor: pointer;

}
.pill:hover{
    background: rgb(255, 250, 241);
}
.prompt{
    width: 350px;
    height: 100px;
    border: 2px solid rgb(231, 231, 231);
    margin: 10px auto;
    border-radius: 10px;
    background: rgb(231, 231, 231);

}
.dashbutton{
    position: absolute;
    margin-top:180px;
    margin-left: 160px;
    width:3em;
    height: 3eprofile
}
</style>