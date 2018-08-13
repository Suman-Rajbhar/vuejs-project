<template>
<div class="hello">
<h1>{{ name }}</h1><br>
<div class="holder">
    <img src="../assets/avatar.jpg" class="avatar"/>
    <h4>I am listing <label>{{ my_skill }}</label> as my Prodessional Skill.</h4>     
</div>
</div>
</template>
<script>
export default {
    data(){
        return{
            name : "VUE WORLD",
            my_skill : this.$route.params.skill            
        }
    }
}
</script>
<style scoped>
h1{
    color: rebeccapurple;
    letter-spacing: 1cm;
}
.holder{
    margin: 0px auto;
    width: 700px;
    background: rgb(212, 204, 201);
    text-align: center;    
}

.sub-holder{
    padding: 5px;
}

h4{
    background: rgb(113, 136, 136);
    padding: 5px;
    color: rgb(37, 207, 57);
    font-weight: 100;    
}

.avatar{
    border-radius: 50%;
    width: 80px;
    height: 80px;
    padding-top: 20px;
}

h4 label{
    color: rgb(255, 255, 255);
}

    
</style>

