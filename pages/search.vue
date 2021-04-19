<template>
  <div class="bg-lag-light overflow-scroll h-screen w-screen relative flex justify-center content-center">
    <div class="h-20 bg-lag-dark w-full absolute z-10">
      <img class="max-h-16 pt-2 pl-4 mt-1" src="~assets/logo.png" alt="" />
    </div>
    <div class="mt-48 grid bg-gradient-to-tl from-orange via-orange-lt to-orange rounded-md w-2/3 lg:h-2/3 h-full lg:grid-cols-2">
      <button class="m-6 h-20 w-2/3 bg-lag-dark rounded-full place-self-center">
       <nuxt-link to='/vegetables' class="text-4xl rounded-full">Vegetables</nuxt-link>
      </button>
      <button class="m-6 h-20 w-2/3 bg-lag-dark rounded-full place-self-center">
        <nuxt-link to='/fruits' class="text-4xl rounded-full p-2 m-6">Fruits</nuxt-link>
      </button>
      <button class="m-6 h-20 w-2/3 bg-lag-dark rounded-full place-self-center">
        <nuxt-link to='/grains' class="text-4xl rounded-full p-2 m-6">Grains</nuxt-link>
      </button>
      <button class="m-6 h-20 w-2/3 bg-lag-dark rounded-full place-self-center">
        <nuxt-link to='/meatpoultry' class="text-4xl rounded-full p-2 m-6">Meats</nuxt-link>
      </button>
      <button class="m-6 h-20 w-2/3 bg-lag-dark rounded-full place-self-center">
        <nuxt-link to='/seafood' class="text-4xl rounded-full p-2 m-6">Seafood</nuxt-link>
      </button>
      <button class="m-6 h-20 w-2/3 bg-lag-dark rounded-full place-self-center">
        <nuxt-link to='/boxed' class="text-4xl rounded-full p-2 m-6">Boxed Meals</nuxt-link>
      </button>
      <button class="m-6 h-20 w-2/3 bg-lag-dark rounded-full place-self-center">
        <nuxt-link to='/canned' class="text-4xl rounded-full p-2 m-6">Canned Goods</nuxt-link>
      </button>
      <button class="m-6 h-20 w-2/3 bg-lag-dark rounded-full place-self-center">
        <nuxt-link to='/fruits' class="text-4xl rounded-full p-2 m-6">Fruits</nuxt-link>
      </button>
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