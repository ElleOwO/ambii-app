<template>
        <Buttonsvue class="backToDash" @click="backToDash" ><i class="fa-solid fa-left-long fa-2xl" ></i></Buttonsvue>
        <div class="messageDashContainer">

            <div class="card">
                <div class="tab" @click="toMessenger()">
                    <a href="#"></a>
                </div>
                <div class="tab" @click="toMessenger()">
                    <a href="#"></a>
                </div>
                <div class="tab" @click="toMessenger()">
                    <a href="#"></a>
                </div>
                <div class="tab" @click="toMessenger()">
                    <a href="#"></a>
                </div>
            </div>
            <div class="chat-container">
            <div class ="chatMessage" @click="toMessenger()"><div class="iconpic"></div> hi</div>
            <div class ="chatMessage" @click="toMessenger()"><div class="iconpic"></div> hi</div>
            <div class ="chatMessage" @click="toMessenger()"><div class="iconpic"></div> hi</div>

            </div>


        </div>
</template>

<script>
export default {

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
.card {
    display: flex;
    width: 300px;
    height: 550px;
    margin: 20px auto;
    margin-top: 50px;
    background: #ebebeb;
    border: 1px solid #ebebeb;
    border-top: none; /* Remove top border of card */
    position: relative;
    z-index: 2;
}

.tab {
    flex: 1; /* Make tabs grow to fill available space */
    height: 20px;
    border: 1px solid #ebebeb;
    border-radius: 8px 8px 0 0;
    box-sizing: border-box; /* Include border and padding in the element's total width and height */
    display: flex;
    align-items: center;
    margin-top:-20px;
    justify-content: center; /* Center text horizontally and vertically */
    z-index: 1;
    background: #ebebeb;
    outline: 2.5px solid aliceblue;
    cursor: pointer;
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
    background:rgba(203, 217, 218, 0.538);
    display:flex;
    flex-direction: column;

}
.chatMessage{

    height: 10%;
    margin: 10px 0 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: baseline;
    background:  linear-gradient(rgb(255, 217, 217), rgba(247, 172, 221, 0.368));
    cursor: pointer;

}
.chatMessage:hover{
    background: rgb(255, 231, 204);
}
.iconpic{
    width:30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 100px;
    margin: 10px;
}

.iconpic:hover{
background:rgb(211, 255, 227);
}
</style>