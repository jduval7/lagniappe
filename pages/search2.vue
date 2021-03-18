<template>
  <div>
    <h1>This is a page</h1>
    <h1>{{ pantry }}</h1>
  </div>
</template>




<script>
import firebase from "firebase";
import "firebase/firestore";

export default {
  created() {
    firebase.firestore().collection('pantry').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
  },
  data() {
    return {
      pantry: [],
    };
  },
  methods: {
    async readFromFirestoreDb() {
      const pantryData = this.$fire.firestore
        .collection("pantry")
        .doc("testing");
      try {
        const pantryDoc = await pantryData.get();
        // alert(pantryDoc.data().testing);
        // console.log(pantryDoc);
        this.pantry = pantryDoc;
        console.log(this.pantry.docs());
      } catch (e) {
        alert(e);
        return;
      }
    },
  },
};
</script>