<template>
  <div>
    <h1>This is a page</h1>
    <ul>
      <li :key="item.key" v-for="item in pantry">{{item}}</li>
    </ul>
  </div>
</template>




<script>
import firebase from "firebase";
import "firebase/firestore";

export default {
  created() {
    // firebase.firestore().collection('pantry').get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.id} => ${doc.data()}`);
    //     });
    // });
    const db = firebase.firestore();
    db.collection('pantry').get('/testing')
      .then(snap => {
        const pantryCollection = [];
        snap.forEach(doc => {
          pantryCollection.push({ [doc.id]: doc.data() });
        });
        this.pantry = pantryCollection;
      });
  },
  data() {
    return {
      pantry: [],
    };
  },
  methods: {
    // async readFromFirestoreDb() {
    //   const pantryData = this.$fire.firestore
    //     .collection("pantry")
    //     .doc("testing");
    //   try {
    //     const pantryDoc = await pantryData.get();
    //     // alert(pantryDoc.data().testing);
    //     // console.log(pantryDoc);
    //     this.pantry = pantryDoc;
    //     console.log(this.pantry.docs());
    //   } catch (e) {
    //     alert(e);
    //     return;
    //   }
    // },


  },
};
</script>