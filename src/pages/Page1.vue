<template>
<div class="box1">
    <div class="text" >
      
        <h2 class="encouragement">{{ encouragementMessage }}</h2>
    </div>
</div>
</template>

<script setup name="Page1" >
import { ref } from 'vue';
const encouragementMessages = [
  'Eu tenho algumas coisas que gostaria de te dizer e espero que você possa ouvir o que está no meu coração. Se algo não estiver certo, por favor, me avise. Eu acho que você está absolutamente certa. Eu não estou bem, na verdade, sou ainda mais fechado. Eu raramente compartilho minhas experiências com você, certo? Sempre te disse que minha família parece ser boa, mas na verdade, eu só queria te dar energia positiva. Eu venho do interior. Meu pai tem hepatite B, que não tem cura, e minha família é muito pobre. Quando éramos crianças, morávamos em uma garagem. Eu tinha que ir ao banheiro na rua, e a única vez que pude usar um banheiro adequado foi no KFC. Eu me sinto muito inferior. A razão pela qual eu digo que sou independente emocionalmente é por causa da falta de emoções. Minha saúde mental não está boa, eu me fechei dentro de mim. Clara, você está certa em tudo, exceto por uma coisa: meu coração não é forte. '
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