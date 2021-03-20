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
          >
            <option :value="null" disabled selected>Select Category</option>
            <option v-for="(item, key) in categories" :key="key">
              {{ key }}
            </option>
          </select>
        </div>

        <div v-if="selectedCat">
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
        </div>

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
          class="inline-block text-left float-right w-8/12 rounded bg-gray-300"
          id="description"
          cols="30"
          rows="10"
        >
        </textarea>
        <button
          v-on:click="addItem()"
          class="bg-blue-500 rounded-full p-2"
          type="submit"
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
    this.queryCategories();
  },
  computed: {
    itemNameChoice() {
      switch (this.selectedCat) {
        case "fruits":
          return this.selectedFruit;
          break;
        case "vegetables":
          return this.selectedVegetable;
          break;
        default:
          break;
      }
    },
  },
  data() {
    return {
      item: null,
      categories: [],
      selectedCat: "",
      selectedVegetable: ["cucumber", "squash", "zucchini"],
      selectedFruit: ["apple", "mango", "watermelon"],
      selectedItem: "",
    };
  },
  methods: {
    async queryCategories() {
      const db = firebase.firestore();

      db.collection("pantry")
        .doc("D4PTEwn8QEr2j4jh7DRI")
        .onSnapshot((doc) => {
          console.log("Current data: ", doc.data());
          this.categories = doc.data();
        });
    },
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
    addItem() {
      const db = firebase.firestore();
      // Add a new document in collection "cities"
      var testing = db.collection("pantry").doc("D4PTEwn8QEr2j4jh7DRI");

      testing.update({
        Fruits: {
          name: "Frank",
          favorites: { food: "Pizza", color: "Blue", subject: "recess" },
          age: 12,
        }
        })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    },
    onChange(event) {
      this.selectedItem = event.target.value;
      console.log(this.selectedItem);
    },
  },
};
</script>





<style scoped>
</style>