<template>
          <Buttonsvue class="backToDash" @click="backToDash" ><i class="fa-solid fa-left-long fa-2xl" ></i>
          </Buttonsvue>
</template>

<script>
export default {
    methods:{
        backToDash(){
        this.$router.push({name: 'Dashboard'});
        },
    }
}
</script>

<style>
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

</style>