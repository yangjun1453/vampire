<template>
  <div class="background">
    <div class="text" >
      <h1>Bem-vindo à casa de campo da Clara.</h1>
    <h2>
      Que tudo aqui seja gentil com você.
    </h2> 
    </div>
   
    <nav>
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40Z"
            fill="none"
            stroke="#333"
            stroke-width="4"
            stroke-linejoin="round"
          />
          <path
            d="M37.5641 15.5098C41.7833 15.878 44.6787 17.1724 45.2504 19.306C46.3939 23.5737 37.8068 29.5827 26.0705 32.7274C14.3343 35.8721 3.89316 34.9617 2.74963 30.694C2.1505 28.458 4.22245 25.744 8.01894 23.2145"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"
            fill="none"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="6"
            y="14"
            width="36"
            height="28"
            rx="3"
            stroke="#333"
            stroke-width="4"
            stroke-linejoin="round"
          />
          <path
            d="M6 32H42V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V32Z"
            fill="none"
            stroke="#333"
            stroke-width="4"
            stroke-linejoin="round"
          />
          <circle
            cx="19"
            cy="9"
            r="5"
            fill="none"
            stroke="#333"
            stroke-width="4"
          />
          <circle
            cx="28"
            cy="10"
            r="4"
            fill="none"
            stroke="#333"
            stroke-width="4"
          />
          <path
            d="M17 20L24 14L31 20"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44 6H4V36H13V41L23 36H44V6Z"
            fill="none"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 19.5V22.5"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24 19.5V22.5"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M34 19.5V22.5"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </nav>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
   
  </div>
</template>

<script setup name="Nav"></script>

<style scoped>
/* 设置渐变背景 */
.background {
  background: linear-gradient(
    to bottom,
    #f7e3e3,
    #cfe8fa
  ); /* 柔和的粉色到蓝色 */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  height: 100vh;
}

/* 添加星星的简单CSS */
.star {
  position: absolute;
  background-color: white;
  border-radius: 50%;
  animation: twinkle 2s infinite alternate,
    starMove 5s infinite alternate ease-in-out;
}

/* 星星位置和大小 */
.star:nth-child(1) {
  width: 3px;
  height: 3px;
  top: 20%;
  left: 30%;
}
.star:nth-child(2) {
  width: 2px;
  height: 2px;
  top: 40%;
  left: 50%;
}
.star:nth-child(3) {
  width: 4px;
  height: 4px;
  top: 70%;
  left: 60%;
}
.star:nth-child(4) {
  width: 3px;
  height: 3px;
  top: 15%;
  left: 10%;
}
.star:nth-child(5) {
  width: 2px;
  height: 2px;
  top: 25%;
  left: 80%;
}
.star:nth-child(6) {
  width: 3px;
  height: 3px;
  top: 65%;
  left: 85%;
}
.star:nth-child(7) {
  width: 2px;
  height: 2px;
  top: 55%;
  left: 20%;
}
.star:nth-child(8) {
  width: 4px;
  height: 4px;
  top: 10%;
  left: 90%;
}
.star:nth-child(9) {
  width: 3px;
  height: 3px;
  top: 75%;
  left: 40%;
}

/* 星星闪烁效果 */
@keyframes twinkle {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}

/* 星空移动效果 */
@keyframes starMove {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(20px);
  }
}
nav {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around; /* 平均分配空间 */
  background: rgba(255, 255, 255, 0); /* 完全透明背景 */
  border-top: 1px solid rgba(0, 0, 0, 0.1); /* 边框效果 */
  /* 上下内边距 */
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2); /* 阴影效果 */
  width: 100%;
}

nav div {
  padding: 10px 20px;
  text-align: center; /* 文本居中 */
  transition: background-color 0.3s; /* 添加过渡效果 */
  flex: 1;
  display: flex;
  justify-content: center;
}

nav div:hover {
  background-color: #ffdeeb; /* 悬停背景颜色 */
}
.text{
  text-align: center;
}
</style>
