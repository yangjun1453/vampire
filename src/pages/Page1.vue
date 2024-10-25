<template>
<div class="box1">
    <div class="text" >
        <h1 class="welcome-text">Bem-vindo ao Clara's Healing Cottage, que tudo aqui seja gentil com você.</h1>
        <h2 class="encouragement">{{ encouragementMessage }}</h2>
    </div>
</div>
</template>

<script setup name="Page1" >
import { ref } from 'vue';
const encouragementMessages = [
  "Não tenha pressa e dê a si mesmo tempo para se recuperar.",
  "O que você está passando não a define, você é tão forte e maravilhosa, OK?",
  "Você merece o melhor.",
  "Lembre-se de que a cura é um processo e cada passo é importante!"
];

const randomIndex = Math.floor(Math.random() * encouragementMessages.length);
const encouragementMessage = ref(encouragementMessages[randomIndex]);
</script>

<style  scoped>

h1{
    font-size: 27px;
    margin-bottom: 20px;
    font-weight: 600;
    color: #343a40;
}
h2{
    font-size: 23px;
    color: #495057;
}
</style>