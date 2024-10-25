<template>
    <div class="virtual-town">
      <h2>Sylvanian Families的虚拟小镇</h2>
      <div class="characters">
        <div
          v-for="(character, index) in characters"
          :key="index"
          class="character"
          @click="showMessage(character)"
        >
          <img :src="character.image" :alt="character.name" class="character-image" />
          <p>{{ character.name }}</p>
        </div>
      </div>
      <div v-if="message" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeMessage">&times;</span>
          <p>{{ message }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup name="Test">
  import { ref } from 'vue';
  
  const characters = [
    { name: '角色1', message: '你很特别，别忘了这一点', image: '/images/微信图片_20241025212532.jpg' },
    { name: '角色2', message: '你是个了不起的人', image: '/images/微信图片_20241025212559.jpg' },
    { name: '角色3', message: '每天都要开心哦！', image: '/images/微信图片_20241025212603.jpg' }
  ];
  
  const message = ref('');
  
  function showMessage(character) {
    message.value = character.message;
  }
  
  function closeMessage() {
 
    message.value = '';
  }
  </script>
  
  <style scoped>

  .characters {
    display: flex;
    gap: 15px;
  }
  .character {
    padding: 10px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
  }
  .character-image {
    width: 80px; /* 设置角色图片的宽度 */
    height: auto; /* 自动调整高度 */
  }
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal-content {
    
    padding: 20px;
    border-radius: 8px;
    position: fixed;
    top:20%;
    background-color: black;
    
  }
  .close {
    cursor: pointer;
  }
  </style>
  