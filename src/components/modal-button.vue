<template>
    <div class="button-container">
    <button class="buttons-vue"><slot></slot> </button>
</div>
</template>

<style>
.button-container{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 100;
    margin-top: 500px;
    background:#746b6b;
    margin-left:140px;
    border-radius: 36px;
    width:100px;
    z-index: 4;
    opacity: 60%;



    background-color: rgba(255,255,255,0.50);
    border: 1px solid rgba(255,255,255,0.1);





}
.button-container:hover{
    background: rgba(108, 108, 108, 0.1);
}
   .buttons-vue{
    position:relative;
    color: rgb(111, 102, 102);
    justify-content: center;
    border: 10px;
    background:none;
    height: 50px;



   }


</style>