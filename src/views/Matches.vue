<template>
    <div class="matchesContainer">
        <Buttonsvue class="backToDash" @click="backToDash" ><i class="fa-solid fa-left-long fa-2xl" ></i></Buttonsvue>
        <div class="border">
            <a><i class="fa-regular fa-handshake fa-xl"></i></a>
        </div>
        <div class="matchPic">
            <div class="circle"><i class="fa-solid fa-arrow-left-long"></i></div>
            <div class="circle"> <i class="fa-solid fa-arrow-right-long"></i> </div>
        </div>
    </div>
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
    .matchesContainer{
        border-radius: 25px;
        box-shadow: inset 0px 4px 30px 1px rgba(15, 14, 15, 0.065), inset 0px -4px 50px 1px rgba(49, 49, 49, 0.018);

        display: flex;
        flex-direction: column;
        background: white;
        width: 330px;
        height: 600px;
        margin: auto;

    }
    .matchesContainer Buttonsvue {
        color: rgb(247, 194, 175);
    }
    .matchesContainer :nth-child(2){
        height: 150px;
        justify-content: center;
        align-content: center;
    }
    .matchesContainer :nth-child(2) a i{

        border:1px solid rgb(200, 200, 200);
        width: 50px;
        height: 50px;
        margin: auto;
        padding: 10px;
        justify-content: center;
        align-content: center;
        border-radius: 50%;
    }
    .fa-handshake{
        color: rgb(200, 200, 200);
    }
    .matchesContainer :nth-child(3){
        box-shadow: inset 0px 4px 30px 1px rgba(100, 68, 94, 0.104), inset 0px -4px 50px 1px rgba(142, 90, 131, 0.059);

        width:100%;
        height: 100%;
        background: rgb(255, 222, 194);
        position:relative;
        border-radius: 25px;
        display: grid;
        grid-column: repeat(4, 1fr);
        grid-row: repeat(3, 1fr);
    }

    .matchesContainer .circle{
        height: 50px;
        width: 50px;
        border: 1px solid rgba(255, 255, 255, 0.76);
        border-radius: 50%;
        margin: auto;
        justify-content: center;
        align-content: center;
        color: white;
        cursor: pointer;
    }
    .matchesContainer .circle:first-child {
    grid-column: 1; /* Places the first circle in the first column */
}

.matchesContainer .circle:last-child {
    grid-column: 4; /* Places the second circle in the third column */
}

.matchesContainer .circle i{
margin: auto;
}

</style>