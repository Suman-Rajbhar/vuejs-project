<template>
<div class="hello">            
<h1>{{ name }}</h1><br>
<div class="holder">    
    <h5>FEATURES CODED</h5>
    <div class="sub-holder">
        <h6>Tools and Environment</h6>
        <ul>
            <li>NodeJS, NPM, VS Code, Plugins for Validation, Router</li>
        </ul>
        <h6>Front Code</h6>
        <ul>
            <li>HTML5 Tags, CSS3 Elements (external, inline, scoped, embed)</li>
            <li>CSS with Logic Binding</li>
        </ul>
        <h6>Logic Code</h6>
        <ul>
            <li>App Config, Templating, Data Bind, Array Bind, Directives, Model</li>
            <li>Form Binding, Method, Model, Validation, Errors</li>
            <li>Routing, URL, View</li>
            <li>Route to a view with URL parameter</li>
            <li>Remove element from array listing</li>
        </ul>
    </div>    
</div>
</div>
</template>
<script>
export default {
    data(){
        return{
            name : "VUE WORLD",                      
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
    text-align: left;    
}

.sub-holder{
    padding: 5px;
}

h5{
    padding: 5px;
    color: rebeccapurple;
    letter-spacing: 0.2cm;
}
ul li{
    text-align: left;
    list-style-type: none;
    padding: 2px 6px;
    border-left: 1px rgb(14, 20, 20) solid;
    margin-bottom: 1px;
    font-weight: 200;
    color: brown;
    font-size: 11px;
    margin-bottom: 2px;
}


    
</style>

