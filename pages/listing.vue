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
          <select @change="onChange($event)"
            class="inline-block text-left float-right w-8/12 rounded bg-gray-300"
            required
          >
            <option :value="null" disabled selected>Select Category</option>
            <option  v-for="item in itemNameChoice" :key="item">
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

export default {
  created() {
    this.readFromRealtimeDb();
  },
  computed: {
      itemNameChoice() {
          switch (this.selectedCat) {
              case 'fruits':
                    return this.selectedFruit
                  break;
              case 'vegetables':
                    return this.selectedVegetable
                  break;
              default:
                  break;
          }
      }
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
    async readFromRealtimeDb() {
      const messageRef = this.$fire.database.ref("categories");
      console.log(messageRef);
      try {
        const snapshot = await messageRef.once("value");
        this.categories = snapshot.val();
        console.log(this.categories);
      } catch (e) {
        alert(e);
        return;
      }
    },
    addItem() {
      firebase
        .database()
        .ref("categories/" + this.selectedCat + '/' + this.selectedItem)
        .push({ item: this.item })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
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