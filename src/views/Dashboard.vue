<template>
<div id="dashContainer">
        <div class="picContainer">
        <img id="profilePic" v-bind:src="profilePic" @click="toProfile"/>
        </div>
        <div class="matchContainer" @click="toMatches"></div>
    <div id="messageContainer" >
        <div class="message" @click="toMessages"></div>
        <div class="message" @click="toMessages"></div>
        <div class="message" @click="toMessages"></div>
        <div class="message" @click="toMessages"></div>

    </div>
    <div class="group-container" @click="toFeatured">
        <div class = "groups"></div>
        <div class = "groups"></div>
        <div class = "groups"></div>
    </div>

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
        toMessages(){
            this.$router.push({name: 'MessengerDash'})

        },
        toMatches(){
            this.$router.push({name: 'Matches'})

        },
        toFeatured(){
            this.$router.push({name: 'Featured'})

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


.picContainer:hover{
    background:rgb(192, 227, 197);

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
.matchContainer:hover{
    box-shadow: inset 1px 1px 5px 1px rgb(183, 183, 183), inset -1px -1px 1px 1px rgb(219, 219, 219);

}

#messageContainer{
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 15px auto;
    cursor: pointer;
}
.message{
    width:50px;
    height: 50px;
    background: rgb(231, 231, 231);
    border-radius: 10px;
}
.message:hover{
    background: rgba(221, 160, 221, 0.498);
}
.group-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 200px;
    width: 300px;
    margin: auto;
    position: relative;
    margin-top: -10px;
}
.groups{

    height: 160px;
    box-sizing: border-box;
    background: rgb(231, 231, 231);
    margin: 30px auto;
    border-radius: 10px;
    position: relative;
    width:140px;
    box-shadow: -1px -1px 7px 1px rgba(0, 0, 0, 0.163);
    background: rgb(231, 231, 231);
    cursor: pointer;

}

.group-container :nth-child(3){

    transform: translateX(-120px);

}
.group-container :nth-child(2){

    margin-top: 20px;
    transform: translateX(-60px);
    z-index: 1;

}
.group-container :nth-child(2):hover{
    box-shadow: inset 1px 1px 5px 1px rgb(191, 191, 191), inset -1px -1px 1px 1px rgb(218, 218, 218);
}

</style>