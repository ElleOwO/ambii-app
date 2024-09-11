<template>
<div id="messengerContainer">

    <div class="detailsContainer">
        <Buttonsvue class="backToDash" @click="backToDash" ><i class="fa-solid fa-left-long fa-2xl" ></i>
        </Buttonsvue>
    </div>
    <div class = "speechBubble">hi</div>
    <div class = "speechBubble"></div>
    <div class="textField">
        <div class="calender-button"><i class="fa-regular fa-calendar-days"></i></div>
        <div id="submit-button"><i class="fa-solid fa-paper-plane"></i></div>
    </div>
 </div>
</template>
<script>
import Buttonsvue from '../components/modal-button.vue';

export default {

    methods:{
        backToDash(){
        this.$router.push({name: 'Dashboard'});
        },
    }
}
</script>

<style>
#messengerContainer{
    display: grid;
    z-index: 20;
    background: rgb(232, 232, 232);
    border-radius: 36px;
    height: 600px;
    margin: auto;
    height: 600px;
    grid-template-columns:150px 150px;
    grid-template-rows: repeat(13, 50px);}
.detailsContainer{
    display: flex;
    justify-content: flex-start;
    align-content: baseline;
    background: rgb(255, 250, 241);
    grid-column: 1 / 3; /* Span both columns */
    grid-row: 1 / 2;    /* Place it in the first row */

}
.backToDash{
    width: 50px;
    height: 20px;
    color: pink;
    z-index: 100;
    margin-top: 5px;
    cursor: pointer;
    padding-top: 10px;

}
.backToDash:hover{

    color: rgb(229, 204, 208);


}
.speechBubble{
    background: aliceblue;
    margin: 10px auto ;
    width: calc(100% - 10px);
    height: 40px;


}

.speechBubble:nth-child(3){
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    border-radius:36px 36px 36px 0px;

}
.speechBubble:nth-child(2){

    grid-column:2 / 3;
    grid-row: 3/ 4;
    border-radius:36px 36px 0 36px;
}

.textField{
    display: flex;

    background: rgb(255, 252, 247);
    grid-column: 1 / 3; /* Span both columns */
    grid-row: 12 / 13;    /* Place it in the first row */

    width: 100%;

}
#submit-button{
    width: 20%;
    background: pink;
    border-radius:36px 0px 0 36px; /* Top-right, bottom-right, bottom-left, top-left */
    color: black;
    justify-content: center;
    align-content: center;
    margin-left:75%;
    align-self: center;
    height: 100%;


}
.calender-button{
    justify-self: flex-start !important;
    margin: auto;
    padding-left: 10px;

}

</style>