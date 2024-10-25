<template>
  <div class="virtual-town">
    <div class="text">
      <h2>Cidade virtual da Sylvanian Families</h2>
      <h3>Faça sua escolha!</h3>
    </div>

    <div class="characters">
      <div class="character">
        <img
          src="/images/微信图片_20241025212532.jpg"
          class="character-image"
          @click="showMessage('111')"
        />
      </div>
      <div class="character">
        <img
          src="/images/微信图片_20241025212559.jpg"
          class="character-image"
        />
      </div>
      <div class="character">
        <img
          src="/images/微信图片_20241025212603.jpg"
          class="character-image"
        />
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

<script setup name="Town">
import { ref } from "vue";

const characters = [
  {
    message: "Você tem o direito de sentir todas as emoções",
    image: "/images/微信图片_20241025212532.jpg",
  },
  {
    message: "Você deve ser feliz todos os dias.",
    image: "/images/微信图片_20241025212559.jpg",
  },
  {
    message:
      "Quem disse que seus olhos são bonitos nunca deve ter visto seus olhos！",
    image: "/images/微信图片_20241025212603.jpg",
  },
];

const message = ref("");

function showMessage(character) {
  message.value = character
}

function closeMessage() {
  message.value = "";
}
</script>

<style scoped>
.virtual-town {
  background-size: cover;
  padding: 20px;
  color: #fff;
}
.characters {
  display: flex;
  gap: 30px;
  margin-top: 30px;
}
.character {
  padding: 10px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
}
.character-image {
  width: 80px; /* 设置角色图片的宽度 */
  height: auto; /* 自动调整高度 */
  border-radius: 50%;
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
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  width: 200px;
  height: 150px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.close {
  cursor: pointer;
  margin-right: 180px;
}
p,
span {
  color: black;
}
</style>
