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
    <br>
    <ul>
        <li v-for="(cat, name) in cats" :key="name">
            {{name}}
        </li>
    </ul>
  </div>
</template>




<script>
import firebase from "firebase";
import "firebase/firestore";

export default {
  created() {
    this.queryCategories();

    const db = firebase.firestore();
    db.collection("pantry")
      .get("/testing")
      .then((snap) => {
        const pantryCollection = [];
        snap.forEach((doc) => {
          pantryCollection.push({ [doc.id]: doc.data() });
        });
        this.pantry = pantryCollection;
      });
  },
  data() {
    return {
      pantry: [],
      cats: [],
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
  },
};
</script>