<template>
  <!-- container  -->
  <div class="h-screen content-center w-screen relative ">
      <!-- NavBar  -->
      <div class="h-20 bg-lag-dark w-full absolute z-10">
        <img class="max-h-16 pt-2 pl-4 mt-1" src="~assets/logo.png" alt="">
      </div>
      <!-- MAIN CONTENT -->
      <div class="nav">
              <!-- H1 Text  -->
        <div class="absolute  w-full text-center z-20 hidden md:block">
                <h1 class="z-10 relative md:text-7xl text-blue-100">Lagniappe</h1>
                <p class="z-10 mt-4 relative md:text-2xl italic text-yellow-600">"something given or obtained gratuitously or by way of good measure"</p>
        </div>
        <!-- Mobile Buttons-->
        <div class="grid grid-cols-1 md:hidden gap-4 z-10">
          <div class="buttonDiv">
            <button class="button">Find Food</button>
          </div>
          <div class="buttonDiv">
            <button class="button">Fill Pantry</button>
          </div>
          <div class="buttonDiv">
            <button class="button">Donate</button>
          </div>
          <div class="buttonDiv">
            <button class="button">Inbox</button>
          </div>
        </div>
        <div class="hidden md:visible text-white md:flex justify-center items-center pt-96">
          <img src="~assets/logo.png" alt="">
          Click here to find out more.
        </div>
      </div>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bags {
  background-image: url("~assets/home.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.nav {
  @apply relative flex items-center md:items-start justify-center bags object-contain bg-cover bg-center h-screen pt-0 md:pt-32;
}

@font-face {
  font-family: "Vegan";
  src: url(~/assets/fonts/Vegan.ttf) format("truetype");
}

h1 {
  font-family: "Vegan";
}

.buttonDiv {
 @apply z-10 h-16 w-60 bg-pink-500 rounded-full md:rounded-md flex justify-center items-center;
}

.button {
 @apply bg-lag-dark text-text z-10 w-full h-full rounded-full md:rounded-md;
}

.logo {
  background-image: url("~assets/logo.png");
  background-size: 10em;
  background-repeat: no-repeat;
  padding-top: 30em;
}

.logoNav {
  
  background-image: url("~assets/logo.png");
  background-size: 6em;
  background-repeat: no-repeat;
}
</style>
