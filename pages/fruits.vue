<template>
  <div class="overflow-scroll h-screen content-center w-screen relative">
    <div class="h-20 bg-lag-dark w-full absolute z-10">
      <img class="max-h-16 pt-2 pl-4 mt-1" src="~assets/logo.png" alt="" />
    </div>
    <div class="top-28 relative ml-6 text-4xl font-black tracking-widest">
      FRUITS
    </div>
    <div class="w-screen relative top-28">
      <div
        v-for="(item, key) in pantry"
        :key="key"
        class="bg-red-400 m-4 p-6 rounded-md overflow-auto"
      >
        <ul>
          <li>
            {{ item.testing }}
            <!-- <div v-for="(subCat, key) in item" :key="key"> {{key}}
                    
                </div> -->
          </li>
        </ul>
        <br />
        <ul>
          <li v-for="(cat, key) in cats" :key="key">
            {{ key }}
          </li>
        </ul>
        <ul>
          <li class="float-left">
            <img
              :src="item.Photos"
              alt=""
              class="max-h-56 max-w-full rounded-md"
            />
          </li>
          <li class="text-center text-3xl">
            {{ item.Description }}
          </li>
          <li class="text-center text-xl">Expiration: {{ item.Expiration }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";
import "firebase/firestore";

export default {
  created() {
    this.displayFruits();
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
      db.collection("pantry")
        .doc("D4PTEwn8QEr2j4jh7DRI")
        .collection(this.category)
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
    },
  },
};
</script>


<style >
body {
  background-color: gray;
  margin: none;
  padding: none;
}
</style>