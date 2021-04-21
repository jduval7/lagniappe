<template>
  <div class="bg-lag-light overflow-scroll h-screen w-screen relative flex justify-center content-center">
    <div class="h-20 bg-lag-dark w-full absolute z-10">
      <img class="max-h-16 pt-2 pl-4 mt-1" src="~assets/logo.png" alt="" />
    </div>
    <div class="mt-28 md:mt-48 grid bg-gradient-to-tl from-light-orange to-light-orange rounded-md w-screen m-4 md:w-2/3 lg:h-2/3 h-screen md:h-full md:grid-cols-4 shadow-lg border-4 overflow-scroll md:overflow-hidden">
      <button class="md:hidden m-4 h-16 w-4/5 md:h-20 md:w-2/3  bg-gradient-to-tl from-lag-dark via-lag-md to-lag-dark rounded-full place-self-center shadow-lg">
       <nuxt-link to='/vegetables' class="text-4xl rounded-full text-orange">Vegetables</nuxt-link>
      </button>
      <button class="md:hidden m-4 h-16 w-4/5 md:h-20 md:w-2/3 bg-gradient-to-tl from-lag-dark via-lag-md to-lag-dark rounded-full place-self-center shadow-lg">
        <nuxt-link to='/fruits' class="text-4xl rounded-full p-2 m-6 text-orange">Fruits</nuxt-link>
      </button>
      <button class="md:hidden m-4 h-16 w-4/5 md:h-20 md:w-2/3  bg-gradient-to-tl from-lag-dark via-lag-md to-lag-dark rounded-full place-self-center shadow-lg">
        <nuxt-link to='/grains' class="text-4xl rounded-full p-2 m-6 text-orange">Grains</nuxt-link>
      </button>
      <button class="md:hidden m-4 h-16 w-4/5 md:h-20 md:w-2/3  bg-gradient-to-tl from-lag-dark via-lag-md to-lag-dark rounded-full place-self-center shadow-lg">
        <nuxt-link to='/meatpoultry' class="text-4xl rounded-full p-2 m-6 text-orange">Meats</nuxt-link>
      </button>
      <button class="md:hidden m-4 h-16 w-4/5 md:h-20 md:w-2/3  bg-gradient-to-tl from-lag-dark via-lag-md to-lag-dark rounded-full place-self-center shadow-lg">
        <nuxt-link to='/seafood' class="text-4xl rounded-full p-2 m-6 text-orange">Seafood</nuxt-link>
      </button>
      <button class="md:hidden m-4 h-16 w-4/5 md:h-20 md:w-2/3  bg-gradient-to-tl from-lag-dark via-lag-md to-lag-dark rounded-full place-self-center shadow-lg">
        <nuxt-link to='/boxed' class="text-4xl rounded-full p-2 m-6 text-orange">Boxed Meals</nuxt-link>
      </button>
      <button class="md:hidden m-4 h-16 w-4/5 md:h-20 md:w-2/3  bg-gradient-to-tl from-lag-dark via-lag-md to-lag-dark rounded-full place-self-center shadow-lg">
        <nuxt-link to='/canned' class="text-4xl rounded-full p-2 m-6 text-orange">Canned</nuxt-link>
      </button>
      <button class="md:hidden m-4 h-16 w-4/5 md:h-20 md:w-2/3  bg-gradient-to-tl from-lag-dark via-lag-md to-lag-dark rounded-full place-self-center shadow-lg">
        <nuxt-link to='/fruits' class="text-4xl rounded-full p-2 m-6 text-orange">Fruits</nuxt-link>
      </button>

      <div class="vegetables rounded-lg max-h-40 relative">
        <nuxt-link to='/vegetables' class="rounded-lg max-h-40 "></nuxt-link>
      </div>
      <div class="fruits rounded-lg max-h-40 relative">
         <nuxt-link to='/fruits' class="rounded-lg max-h-40"></nuxt-link>
      </div>
      <div class="rounded-lg max-h-40 breads">
          <nuxt-link to='/grains' class="rounded-lg max-h-40"></nuxt-link>
      </div>
      <div class="rounded-lg max-h-40 meats">
          <nuxt-link to='/meatpoultry' class="rounded-lg max-h-40"></nuxt-link>
      </div>
      <div class="seafood rounded-lg max-h-40 relative">
        <nuxt-link to='/seafood' class="rounded-lg max-h-40 "></nuxt-link>
      </div>
      <div class="boxed rounded-lg max-h-40 relative">
         <nuxt-link to='/boxed' class="rounded-lg max-h-40"></nuxt-link>
      </div>
      <div class="canned rounded-lg max-h-40">
          <nuxt-link to='/canned' class="rounded-lg max-h-40"></nuxt-link>
      </div>
      <div class="supplies rounded-lg max-h-40">
          <nuxt-link to='/supplies' class="rounded-lg max-h-40"></nuxt-link>
      </div>

     
      <!-- <nuxt-link to='/seafood' class="">
        <img src="~assets/seafood.jpg" alt="Seafood" class="rounded-lg max-h-40">
      </nuxt-link>
      <nuxt-link to='/boxed' class="">
        <img src="~assets/boxed.jpg" alt="Boxed Meals" class="rounded-lg max-h-40">
      </nuxt-link>
      <nuxt-link to='/canned' class="">
        <img src="~assets/canned.jpg" alt="Canned Goods" class="rounded-lg max-h-40">
      </nuxt-link>
      <nuxt-link to='/supplies' class="">
        <img src="~assets/battery.jpg" alt="Supplies" class="rounded-lg max-h-40">
      </nuxt-link> -->
      
    </div>  
  </div>

  
</template>




<script>
import firebase from "firebase";
import "firebase/firestore";

export default {
  created() {
    //this.queryCategories();
    //this.queryCat();
    //this.getFruits();
  },
  data() {
    return {
      pantry: [],
      cats: [],
      category: "",
    };
  },
  methods: {
    queryCategories() {
      const db = firebase.firestore();

      db.collection("pantry")
        .doc("D4PTEwn8QEr2j4jh7DRI")
        .onSnapshot((doc) => {
          console.log("Current data: ", doc.data());
          this.cats = doc.data();
        });
    },
    queryCat() {
      const db = firebase.firestore();
      db.collection("pantry")
        .get("D4PTEwn8QEr2j4jh7DRI")
        .then((querySnapshot) => {
          //const pantryCollection = [];
          querySnapshot.forEach((doc) => {
            this.pantry.push(doc.data());
          });
          console.log(this.pantry);
        });
    },
    getFruits() {
      const db = firebase.firestore();
      db.collection("pantry").doc("D4PTEwn8QEr2j4jh7DRI").collection(this.category)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            this.pantry.push(doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    displayVegetables() {
        this.category = "Vegetables";
        this.getFruits();
    },
    displayFruits() {
        this.category = "Fruits";
        this.getFruits();
    }
  },
};
</script>

<style>


.vegetables {
  background-image: url("~assets/veg.jpg"), linear-gradient(rgba(0,0,0,0.2),rgba(23,125,155,0.2));
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
}

.fruits {
  background-image: url("~assets/fruit.jpg"), linear-gradient(rgba(23,125,155,0.2),rgba(23,125,155,0.2));
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
}

.breads {
  background-image: url("~assets/breads.jpg"), linear-gradient(rgba(23,125,155,0.2),rgba(23,125,155,0.2));
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
}

.meats {
  background-image: url("~assets/meats.jpg"), linear-gradient(rgba(23,125,155,0.2),rgba(23,125,155,0.2));
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
}

.seafood {
  background-image: url("~assets/seafood.jpg"), linear-gradient(rgba(23,125,155,0.2),rgba(23,125,155,0.2));
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
}

.boxed {
  background-image: url("~assets/boxed.jpg"), linear-gradient(rgba(23,125,155,0.2),rgba(23,125,155,0.2));
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
}

.canned {
  background-image: url("~assets/canned.jpg"), linear-gradient(rgba(23,125,155,0.2),rgba(23,125,155,0.2));
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
}

.supplies {
  background-image: url("~assets/battery.jpg"), linear-gradient(rgba(23,125,155,0.2),rgba(23,125,155,0.2));
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
}

</style>