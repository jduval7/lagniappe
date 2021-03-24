<template>
  <div>
    <div class="m-auto grid grid-flow-col grid-cols-3 grid-rows-3">
      <div class="border-black border-2"></div>
      <div class="border-black border-2"></div>
      <div class="border-black border-2"></div>
      <div class="border-black border-2"></div>
      <div class="border-purple-600 border-2">
        <label class="text-right float-left" for="category">Category:</label>
        <div>
          <select
            v-model="selectedCat"
            class="inline-block text-left float-right w-8/12 rounded bg-gray-300"
            required
            @change="onChange($event)"
          >
            <option :value="null" disabled selected>Select Category</option>
            <option v-for="(cats, key) in categories" :key="key">
              {{ cats.text }}
            </option>
          </select>
        </div>

        <!-- <div v-if="selectedCat">
          <label class="text-right float-left" for="itemName">Item Name:</label>
          <select
            @change="onChange($event)"
            class="inline-block text-left float-right w-8/12 rounded bg-gray-300"
            required
          >
            <option :value="null" disabled selected>Select Category</option>
            <option v-for="item in itemNameChoice" :key="item">
              {{ item }}
            </option>
          </select>
        </div> -->

        <br />
        <br />

        <label class="text-right float-left" for="itemName">Item Name:</label>
        <input
          v-model="item"
          class="inline-block text-left float-right w-8/12 border-black rounded bg-gray-300"
          id="itemName"
          type="text"
          required
        />

        <br />
        <br />
        <label class="align-top text-right float-left" for="description"
          >Description:</label
        >
        <textarea
          v-model="description"
          class="inline-block text-left float-right w-8/12 rounded bg-gray-300"
          id="description"
          cols="30"
          rows="10"
        >
        </textarea>

        <input type="file" @change="onFileSelected">
        <button @click="onUpload"></button>

        <input type="date" required />
        <button
          @click="addItem($event)"
          class="bg-blue-500 rounded-full p-2"
          type="submit"
          id="submitListing"
        >
          Submit
        </button>
      </div>
      <div class="border-black border-2"></div>
      <div class="border-black border-2"></div>
      <div class="border-black border-2"></div>
      <div class="border-black border-2"></div>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";
import "firebase/firestore";

export default {
  created() {
    //this.queryCategories();
  },
  //   computed: {
  //     itemNameChoice() {
  //       switch (this.selectedCat) {
  //         case "Fruits":
  //           return this.selectedFruit;
  //           break;
  //         case "Vegetables":
  //           return this.selectedVegetable;
  //           break;
  //         default:
  //           break;
  //       }
  //     },
  //   },
  data() {
    return {
      item: null,
      categories: [{ text: "Fruits" }, { text: "Vegetables" }],
      selectedCat: "",
      selectedVegetable: ["cucumber", "squash", "zucchini"],
      selectedFruit: ["apple", "mango", "watermelon"],
      selectedItem: "",
      description: null,
      selectedFile: null,
    };
  },
  methods: {
    // async queryCategories() {
    //   const db = firebase.firestore();

    //   db.collection("pantry")
    //     .doc("D4PTEwn8QEr2j4jh7DRI")
    //     .onSnapshot((doc) => {
    //       console.log("Current data: ", doc.data());
    //       this.selectedCat.push(doc.data());
    //     });
    // },
    // addItem() {
    //   firebase
    //     .database()
    //     .ref("categories/" + this.selectedCat + '/' + this.selectedItem)
    //     .push({ item: this.item })
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
    addItem(e) {
      if (this.selectedCat == "" || this.item == null) {
        alert("Please Select a Category");
        e.preventDefault();
      } else {
        const db = firebase.firestore();
        // Add a new document in collection "cities"
        var testing = db
          .collection("pantry")
          .doc("D4PTEwn8QEr2j4jh7DRI")
          .collection(this.selectedCat);

        testing
          .add({
            ItemName: this.item,
            Description: this.description,
            Expiration: "1/2/21",
            Photos: 23,
          })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      }
    },
    onChange(event) {
      this.selectedCat = event.target.value;
      console.log(this.selectedCat);
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
      
    },
  },
};
</script>





<style scoped>
</style>