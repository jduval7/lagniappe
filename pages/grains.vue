<template>
  <div class="bg-lag-light overflow-scroll h-screen content-center w-screen relative">
    <div class="h-20 bg-lag-dark w-full absolute z-10">
      <img class="max-h-16 pt-2 pl-4 mt-1" src="~assets/logo.png" alt="" />
    </div>
      <div class="flex justify-center">
        <div class="sm:ml-0 lg:ml-0 flex justify-center top-28 text-orange relative text-4xl tracking-widest bg-lag-dark w-1/3 rounded-lg filter shadow-lg border-2 border-gray-400">
          <div class="font-vegan">Grains & Vegetables</div>
        </div>
      </div>
      <div class="w-screen relative top-28 flex flex-wrap justify-center align-middle">
        <div
          v-for="(item, key) in pantry"
          :key="key"
          class="bg-light-orange ml-4 m-4 p-6 rounded-md overflow-auto filter shadow-lg border-4 w-3/4"
        >
          <ul>
            <li class="text-lag-dark items-center">
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
          <ul class="">
            <li class="float-left text-orange">
              <img
                :src="item.Photos"
                alt=""
                class="max-h-56 -mt-6 max-w-full rounded-md filter shadow-md border-2 border-blue-100"
              />
            </li>
            <li class=" text-center text-3xl text-lag-dark lg:text-5xl">
              <span class="text-center font-seravek font-bold" >{{ item.Description }}</span>
            </li>
            <li class="text-center text-xl lg:text-3xl font-seravek text-orange mt-2">Expiration: {{ item.Expiration }}</li>
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
    this.displayGrains();
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
    getCategoryDataFromFirebase() {
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
    displayGrains() {
      this.category = "Grains";
      this.getCategoryDataFromFirebase();
    }
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