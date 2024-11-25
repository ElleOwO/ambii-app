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
    background:grey;
    margin-left:140px;
    border-radius: 36px;
    width:100px;
    z-index: 4;
    opacity: 40%;

}
.button-container:hover{
    background: rgba(108, 108, 108, 0.1);
    box-shadow: 0 0 3px #929090, 0 0 5px #03030a;


}
   .buttons-vue{
    position:relative;
    color: white;
    justify-content: center;
    border: 10px;
    background:none;
    height: 50px;



   }
   .buttons-vue:hover{
    color: rgb(35, 87, 89);
   }
</style>