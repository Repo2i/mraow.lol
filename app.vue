<template>


<div class="background-container">
    <video class="background-video" muted autoplay loop playsinline>
      <source src="./assets/pinterest-video-59-pintod.mp4" type="video/mp4" />
    </video>

      <div class="content">
        <img src="https://api.lanyard.rest/1248954910225993878.png" class="pfp"/>
        <p style="font-family:monospace">{{ statusName.data.discord_user.username }}</p>
        <div class="icons2">
        <img class="img4" src="./assets/lua-svgrepo-com.svg" />
        <img class="img5" src="./assets/vue-svgrepo-com(2).svg" />
        <img class="img6" src="./assets/javascript-logo-svgrepo-com.svg" />
        </div>
        <p class="txt" style="font-family:monospace">tigron hub leader.</p>
        <p class="txt1" style="font-family:monospace">{{ statusName.data.discord_status }}</p>
        <hr class="h1">
        <div class="icons">
          <a href="https://discord.gg/DzXBwkzF" target="_blank">
            <img class="img1" src="./assets/discord-icon-svgrepo-com.svg" />
          </a>
          <a href="https://www.roblox.com/users/2650368837/profile#!/about" target="_blank">
            <img class="img2" src="./assets/roblox-svgrepo-com.svg" />
          </a>
          <a href="https://github.com/Repo2i" target="_blank">
            <img class="img3" src="./assets/github-mark-white.svg" />
          </a>


          </div>
      </div>
        <div class="uhh" id="uh">
        <div class="whatamidoingrn" id="element">
         <img :src="img4" class="large"/>
         <div class="txts">
          <p class="txt2" style="font-family: monospace;">{{ whatamidoing }}</p>
          <p class="txt3" style="font-family: monospace;">{{ whatamidoingactually }}</p>
          <p class="txt4" style="font-family: monospace;">{{ whatamidoingreally }}</p>
        </div>
      </div>
    </div>
    </div> 
  </template>
  
  <script setup> 
  import { ofetch } from "ofetch";

  const title = ref('mraow.lol')
const description = ref('javascript newbie')

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
const heisdefodoingnothing = "he is doing nothing!";
const statusName = await ofetch("https://api.lanyard.rest/v1/users/1248954910225993878");

const whatamidoing = (
  statusName.data.activities[0]?.name || heisdefodoingnothing
);

const whatamidoingactually = (
  statusName.data.activities[0]?.details || heisdefodoingnothing
);

const whatamidoingreally = (
  statusName.data.activities[0]?.state || heisdefodoingnothing
);

const rawImg = statusName.data.activities[0]?.assets?.small_image;
const img4 = rawImg?.replace(/mp:external\/([^\/]*)\/(http[s])/g, '$2:/') || '';


  onMounted(() => {
    const v01 = document.getElementById("uh");

    if (statusName?.data.discord_status === "online") {
      if (statusName.data.activities && statusName.data.activities.length > 0) {
      v01.style.display = "block";
    }
    }
  });

  </script>
  
  <style scoped>
 .background-container {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
}
  
  .content {
    background: rgba(255, 255, 255, 0.18);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.3px);
    -webkit-backdrop-filter: blur(7.3px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    font-size: 30px;
    color: rgb(255, 255, 255);
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 350px;
    width: 53.5vw;
    border-radius: 10px;
 }
 .whatamidoingrn {
    background: rgba(255, 255, 255, 0.18);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.3px);
   -webkit-backdrop-filter: blur(7.3px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    font-size: 30px;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    height: 100%;
    width: 53.5vw;
    border-radius: 10px;
 }
  .txt {
    margin-left: 10px;
    width: 165px;
    height: 10px;
    font-size: 15px;
  }
  .txt1 {
    margin-left: 120px;
    margin-top: 20px;
    width: 165px;
    height: 5px;
    font-size: 12px;
  }
  .txt2 {
    font-size: 25px;

  }
  .txt3 {
  font-size: 15px;

  }
  .txt4 {
    font-size: 15px;
    
  }
  .txts {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    margin-left: 10px;
  }
  .large {
    width: 70px;
    height: 70px;
    margin-left: 2%;
    border-radius: 10px;
    border: 2px solid rgb(255, 255, 255);
  }
  .h1 {
    border: 0.2px solid rgba(255, 255, 255,);
    margin-top: 20px;
    width: 100%;
 }
 .uhh {
  display: none;
 }
  .img1 {
    height: 40px;
    width: 40px;
 }
  .img2 {
    height: 40px;
    width: 40px;
 }
  .img3 {
    height: 40px;
    width: 40px;
 }
  .img4 {
    height: 30px;
    width: 30px;
 }
  .img5 {
    height: 30px;
    width: 30px;
 }
  .img6 {
    height: 30px;
    width: 30px;
 }
  .icons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
 }
  .icons2 {
  display: flex;
  gap: 15px;
  margin-top: 10px;
 }

  .pfp {
  border: 2px solid rgb(255, 255, 255);
  border-radius: 1000px;
  margin-top: 15px;
  height: 130px;
  width: 130px;
 }


.icons img {
  transition: transform 0.3s ease;
 }

.icons img:hover {
  transform: scale(1.3);
 }

  </style>