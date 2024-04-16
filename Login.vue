<template>
  <div id="app" data-v-app="">
    <div data-v-469af010="" class="my-border">
      <form class="login-form">
        <label for="email">Email/ID:</label>
        <input type="text" id="email" name="email" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
         <button type="submit" @click="login">Login</button>
      </form>
      <div class="inner-border" data-v-469af010="">
        <div class="text-container1" data-v-469af010="">
          <span class="text1" data-v-469af010="">ST. NICHOLAS ACADEMY OF CASTILLEJOS INC.</span>
        </div>
        <div class="text-container2" data-v-469af010="">
          <span class="text2" data-v-469af010="">CASTILLEJOS, ZAMBALES</span>
        </div>
        <div class="top-right-text" data-v-469af010="">Welcome to SNAC</div>
      </div>
      <div>
        <div class="top-right-text1" data-v-469af010="">Library Panel</div>
      </div>
      <div class="top-right-text2" data-v-469af010="">St. Nicholas Academy General Privacy Notice</div>
      <div class="circle-border"></div>
    </div>
  </div>
</template>

<script>

import { useRouter } from 'vue-router'; // Import useRouter from Vue Router

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    login() {
      // Use useRouter to get access to the router
      const router = useRouter();
      // Navigate to Inventory.vue
      router.push('/inventory');
    }
  }
};
</script>


<style scoped>
.my-border {
  width: 90vw;
  height: 80vh;
  top: 5vh;
  left: 5vw;
  gap: 0px;
  border-radius: 5vw;
  opacity: 0px;
  border: 1px solid black;
  background-color: #F1EFEF;
  position: relative;
}

.inner-border {
  position: relative;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  border-radius: 5vw 0 0 5vw;
  background-image: url(C:\xampp\htdocs\Library\library\src\assets\halflogo.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  background-color: #11235A;
}

.text1 {
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 3.5vw;
  font-weight: 600;
  line-height: 4vw;
  letter-spacing: 0.06em;
}

.text2 {
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 2vw;
  font-weight: 400;
  letter-spacing: 0.06em;
}

.text-container1 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
}

.text-container2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0%;
}

.top-right-text {
  position: absolute;
  top: 30%;
  right: -75%;
  font-size: 2.5vw;
  font-weight: bold;
  color: #11235A;
}

.top-right-text1 {
  position: absolute;
  top: 40%;
  left: 68%;
  font-size: 2.3vw;
  font-weight: bold;
  color: #11235A;
}

.top-right-text2 {
  position: absolute;
  bottom: 5%;
  left: 63%;
  font-size: 1vw;
  font-weight: bold;
  color: #1548E3;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 10%;
  left: 75%;
  transform: translateX(-50%);
  z-index: 1; /* Ensure the form is above the border */
}

input[type="text"],
input[type="password"] {
  width: 130%;
  padding: 1vh;
  border-radius: 2vw; /* Adjust border radius using viewport width */
  border: 1px solid #ccc;
  margin-bottom: 3vh;
  font-size: 1vw;
}

button {
  padding: 2vh 7vw;
  background-color: #11235A;
  color: white;
  border: none;
  font-size: 2.5vw;
  cursor: pointer;
  margin-bottom: 6vh;
  border-radius: 5vw; /* Adjust border radius using viewport width */
}


button {
  padding: .6vh 1.5vw;
  background-color: #11235A;
  color: white;
  border: none;
  font-size: 1.5vw;
  cursor: pointer;
  border-radius: 1vw;
  


}

.circle-border {
  width: 10%;
  height: 18vh;
  border-radius: 50%;
  background-color: #F1EFEF;
  position: absolute;
  top: 5vh;
  left: 70%;
  background-image: url(C:\xampp\htdocs\Library\library\src\assets\stlogo.png);
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
