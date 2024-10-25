<template>
    <div class="vixx-music">
      <h2>VIXX音乐空间</h2>
      <div class="music-cards">
        <div v-for="(song, index) in songs" :key="index" class="music-card" @click="playSong(song.url)">
          <h3>{{ song.title }}</h3>
          <p>{{ song.lyrics }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const songs = [
    { title: '歌曲1', url: 'song1.mp3', lyrics: '歌词1' },
    { title: '歌曲2', url: 'song2.mp3', lyrics: '歌词2' },
    { title: '歌曲3', url: 'song3.mp3', lyrics: '歌词3' }
  ];
  
  function playSong(url) {
    const audio = new Audio(url);
    audio.play();
  }
  </script>
  
  <style scoped>
  .vixx-music {
    padding: 20px;
  }
  .music-cards {
    display: flex;
    gap: 20px;
  }
  .music-card {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  .music-card:hover {
    transform: scale(1.05);
  }
  </style>
  