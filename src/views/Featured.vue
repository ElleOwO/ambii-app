<template>
    <div class="featuredContainer">
        <h3><backToDash class="dash-button"></backToDash></h3>
        <div class="featuredPic"></div>
    </div>
</template>

<script>
import backToDash from '@/components/button-dash.vue';
export default {
    components:{backToDash},
    methods:{
        backToDash(){
        this.$router.push({name: 'Dashboard'});
        }
    }
}
</script>

<style>
.featuredContainer{
    position: relative;
    margin: auto;
    width: 300px;
    height: 600px;
    border: 1px solid rgb(206, 206, 206);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    background: white;
}
h3{
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    margin: -5px 0 5px 10px;
    height: 30px;
}
.featuredPic{
    display: inline-flex;
    margin: auto;
    width: 200px;
    height: 300px;
    background: aliceblue;

    z-index: 40;
}

</style>