<template>
<div id="dashContainer">
    <div class="picContainer">
     <img id="profilePic" v-bind:src="profilePic" @click="toProfile"/>
    </div>
    <div class="matchContainer"></div>
    <div id="messageContainer">
        <div class="message"></div>
        <div class="message"></div>
        <div class="message"></div>
        <div class="message"></div>
    </div>
    <div class = "groups"></div>
    <div class = "groups"></div>

    <Buttonsvue class="dashbutton" @click="sendHome">{{ buttonText }}</Buttonsvue>

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
        sendHome(){
        this.$router.push({name: 'Home'});
        },

        toProfile(){
            this.$router.push({name: 'Profile'})
        },
    }
}


</script>


<style>
#dashContainer{
    display: flex;
    z-index: -1;
    flex-direction: column;
    position: relative;
}
.picContainer{
    position: absolute;
    top: 30px;
    left: 30px;
    border-radius: 50%;
    width: 5.5em;
    height: 5.5em;
    border: 10px solid rgb(231, 231, 231);
    background:rgb(231, 231, 231);
    display: flex;
    align-items:center;
    justify-content: center;
    box-sizing: border-box;
    white-space: nowrap;
    z-index: 1;

}
#profilePic{
    display: inline-block;
    height:100%;
    width:100%;
    transform: rotate(360deg);
    object-fit: cover; /* Ensures the image covers the container without distortion */
    border-radius: 50%;
    margin-top: -150px;
    margin-left: 3px;
    z-index: 100;
    cursor: pointer;
}
.matchContainer{

    width: 300px;
    height: 300px;
    background: rgb(231, 231, 231);
    z-index: 5;
    margin:50px auto 10px;
    padding: 0;
    border-radius: 5%;
    z-index: -1;
    position: relative;


}
#messageContainer{
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 10px auto;
}
.message{
    width:50px;
    height: 50px;
    background: rgb(231, 231, 231);
    border-radius: 10px;
}
.groups{
    width:300px;
    height: 80px;
    background: rgb(231, 231, 231);
    margin: 10px auto;
    border-radius: 10px;


}
.dashbutton{
    position: absolute;
    margin-top:180px;
    margin-left: 160px;
    width:3em;
    height: 3em;
}

</style>