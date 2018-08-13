<template>
    <div class="hello">
        <h1>{{ name }}</h1><br>
        
        <div class="holder">
            <form @submit.prevent="addSkill">
                <input type="text" placeholder=" Enter Skill here... now" v-model="skill" v-validate="'min:5'" name="skill">

                <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
                <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
                </transition>
            </form>
            <br>
            <!-- {{ skill }} -->
            <ul>
                <transition-group name="alert-in" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
                    <li v-for="(data, index) in skills" :key="index">
                        <router-link v-bind:to="'/about/' + data.skill">{{ data.skill }}</router-link>
                        <i class="material-icons" v-on:click="remove(index)">remove_circle</i>                                            
                    </li>
                </transition-group>                               
            </ul>            
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            name : "VUE WORLD",
            skill : '',
            skills : [
                {"skill" : "Laravel"},
                {"skill" : "Codeigniter"},
                {"skill" : "Symphony"}
            ]
        }
    },
    
    methods : {
        addSkill(){
            this.$validator.validateAll().then((result) => {
                if(result){
                    this.skills.push({skill : this.skill})
                    this.skill = ''
                }                
            })            
        },

        remove(id){
            this.skills.splice(id,1);
        }
    }
}
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://fonts.googleapis.com/icon?family=Material+Icons";

i{
    float: right;
    padding-right: 25px;
    cursor: pointer;
}

h1{
    color: rebeccapurple;
    letter-spacing: 1cm;
}
.holder{
    margin: 0px auto;
    width: 700px;    
}
ul li{
    text-align: left;
    list-style-type: none;
    padding: 10px;
    border-left: 5px aqua solid;
    margin-bottom: 3px;
    font-weight: 600;
    color: brown;
}

input{
    width: 600px;
    border: 0px;
    padding: 20px;
    font-size: 1.3em;
    background: rgb(10, 8, 10);
    color: bisque;
}

.alert{
    background: cadetblue;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
}

.alert-in-enter-active{
    animation: fade-in 0.5s;
}

.alert-in-leave-active{
    animation: fade-in 0.5s reverse;
}

@keyframes fade-in {
    0%{
        transform: scale(0);
    }
    50%{
        transform: scale(0.8);
    }
    100%{
        transform: scale(1);
    }
    
}

</style>


