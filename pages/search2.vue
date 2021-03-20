<template>
  <div>
    <h1>This is a page</h1>
    <ul>
      <li v-for="(item, key) in pantry" :key="key">
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
    <ul v-for="(product, key) in pantry" :key="key">
      <li >
        {{ product.Description }}
      </li>
      <li>
          {{ product.Expiration }}
      </li>
    </ul>
    <button v-on:click="displayVegetables" class="bg-purple-500 rounded-full p-2">
        Vegetables
    </button>
        <button v-on:click="displayFruits" class="bg-purple-500 rounded-full p-2">
        Fruits
    </button>
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