<template>
        <backToDash class="button-dash"><i class="fa-solid fa-left-long fa-2xl" ></i></backToDash>
        <div class="messageDashContainer">

            <div class="card">
                <div class="tab" @click="toMessenger()">
                    <a href="#"><i class="fa-solid fa-message fa-xs"></i></a>
                </div>
                <div class="tab" @click="toMessenger()">
                    <a href="#"><i class="fa-solid fa-user fa-xs"></i></a>
                </div>
                <div class="tab" @click="toMessenger()">
                    <a href="#"><i class="fa-solid fa-user fa-xs"></i></a>
                </div>
                <div class="tab" @click="toMessenger()">
                    <a href="#"><i class="fa-solid fa-user fa-xs"></i></a>
                </div>
            </div>
            <div class="chat-container">
            <div class ="chatMessage" @click="toMessenger()"><div class="iconpic"><i class="fa-solid fa-user fa-xs"></i></div> hi</div>
            <div class ="chatMessage" @click="toMessenger()"><div class="iconpic"><i class="fa-solid fa-user fa-xs"></i></div> hi</div>
            <div class ="chatMessage" @click="toMessenger()"><div class="iconpic"><i class="fa-solid fa-user fa-xs"></i></div> hi</div>

            </div>


        </div>
</template>

<script>
import backToDash from '@/components/button-dash.vue';

export default {

components: {backToDash},

    methods:{
        backToDash(){
        this.$router.push({name: 'Dashboard'});
        },
        toMessenger(){
        this.$router.push({name: 'Messenger'});
        },
    }
}
</script>

<style>
.messengerDashContainer{
    margin: 0;
    padding: 0;
    font-size: 10px;
    background:aliceblue;

}
.button-dash{
    padding-left: 30px;
}
.card {
    display: flex;
    width: 300px;
    height: 550px;
    margin: 20px auto;
    margin-top: 50px;
    background: #f0eeee;
    border: 1px solid #ebebeb;
    border-top: none; /* Remove top border of card */
    position: relative;
    z-index: 2;
}
.card i{
    color:pink;
}
.card i:hover{
    color:rgb(192, 227, 197);
}

.tab {
    flex: 1; /* Make tabs grow to fill available space */
    height: 20px;
    border: 1px solid #f0eeee;
    border-radius: 8px 8px 0 0;
    box-sizing: border-box; /* Include border and padding in the element's total width and height */
    display: flex;
    align-items: center;
    margin-top:-20px;
    justify-content: center; /* Center text horizontally and vertically */
    z-index: 1;
    background: #f0eeee;
    outline: 2.5px solid aliceblue;
    cursor: pointer;
}
i{
    margin: auto;
    margin-top: 15px;
}
a {
    text-decoration: none;
    color: #333;
    display: block;
    padding: 2px 0; /* Add padding for better appearance */
}


.tab:first-child {
    border-bottom: none; /* Remove bottom border for the first tab */
    box-shadow: inset 3px px 8px 2px rgba(255, 255, 255, 0.666),  inset -1px -1px 4px 0.5px #796b6b0b;/* Horizontal shadow only, no bottom shadow */
    outline: 1px solid #ebebeb22;
    outline-offset: -1px;
}
.chat-container{
    position: absolute;
    margin-left: 47px;
    top:100px;
    height: 500px;
    width:280px;
    z-index: 100;
    background:rgba(255, 255, 255, 0.538);
    display:flex;
    flex-direction: column;

}
.chatMessage{

    height: 10%;
    margin: 5x 0 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    /* box-shadow: inset 4px 4px 10px 2px rgba(255, 255, 255, 0.27), inset -2px -2px 7px 1px rgba(153, 153, 153, 0.32); */
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    font-size: 1em;
    letter-spacing: 1px;



}
.chatMessage:hover{
    background: rgb(236, 248, 241);
}
.iconpic{
    width:30px;
    height: 30px;
    border: 1px solid rgb(190, 189, 189);
    border-radius: 100px;
    margin: 10px;
}

.iconpic:hover{
background:rgba(247, 255, 220, 0.866);
}
</style>