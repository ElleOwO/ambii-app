<template>
    <div class="button-container">
    <button class="buttons-vue"><slot></slot> </button>
</div>
</template>

<style>
.button-container{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 100;
    margin-top: 500px;
    background:pink;
    margin-left:140px;
    border-radius: 36px;
    width:100px;
    z-index: 4;

}
.button-container:hover{
    background: rgba(108, 108, 108, 0.1);
}
   .buttons-vue{
    position:relative;
    color: white;
    justify-content: center;
    border: 10px;
    background:none;
    height: 50px;



   }
</style>