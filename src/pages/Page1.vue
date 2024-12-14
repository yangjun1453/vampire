<template>
<div class="box1">
    <div class="text" >
      
       <p>{{ encouragementMessage }}</p>
    </div>
</div>
</template>

<script setup name="Page1" >
import { ref } from 'vue';
const encouragementMessages = [
  '未完待续....我不知道小屋的主人是否会回来 '
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
