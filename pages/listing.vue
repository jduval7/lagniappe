<template>
  <div class="bg-lag-light overflow-scroll">
    <div class="h-20 bg-lag-dark w-full absolute z-10">
      <img class="max-h-16 pt-2 pl-4 mt-1" src="~assets/logo.png" alt="" />
    </div>
    <div class="sm:m-0 md:m-auto flex flex-wrap h-screen overflow-scroll">
      <div class="border-black border-0 w-full h-24 md:w-1/3 md:h-1/4"></div>
      <div class="border-black border-0 w-full md:w-1/3 md:h-1/4"></div>
      <div class="border-black border-0 w-full md:w-1/3 md:h-1/4">
        <div v-if="imageData != null" class="h-1/3 w-1/3 absolute md:top-96 hidden md:block">
          <img
            class="preview w-full md:w-1/2 md:mt-4 md:ml-auto md:mr-auto p-2 rounded-md"
            height="268"
            width="356"
            :src="img1"
          />
          <br />
        </div>
      </div>
      <div class="border-black border-0 w-full md:w-1/4 md:h-1/3"></div>
      <div
        class="border-purple-600 border-0 rounded-md w-full md:w-1/2 md:h-3/5 text-center content-center"
      >
        <form
          action=""
          @submit.prevent="onUpload"
          class="w-full text-center content-center flex flex-wrap"
        >
          <div class="px-4 mb-4 w-full">
            <label
              class="block text-lag-dark font-bold md:text-3xl tracking-wide"
              for="category"
              >Category:</label
            >

            <select
              v-model="selectedCat"
              class="w-4/5 rounded bg-gray-300"
              required
              @change="onChange($event)"
            >
              <option :value="null" disabled selected>Select Category</option>
              <option v-for="(cats, key) in categories" :key="key">
                {{ cats.text }}
              </option>
            </select>
          </div>

          <br class="hidden md:block" />
          <br class="hidden md:block" />
          <div class="px-4 mb-4 w-full">
            <label
              class="block text-lag-dark font-bold md:text-3xl tracking-wide"
              for="itemName"
              >Item Name:</label
            >
            <input
              v-model="item"
              class="w-4/5 border-black rounded bg-gray-300"
              id="itemName"
              type="text"
              required
            />
          </div>
          <br class="hidden md:block" />
          <br class="hidden md:block" />

          <div class="px-4 mb-4 w-full">
            <label
              class="align-top block text-lag-dark font-bold md:text-3xl tracking-wide"
              for="description"
              >Description:</label
            >
            <textarea
              v-model="description"
              class="inline-block w-4/5 rounded bg-gray-300"
              id="description"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div class="px-4 mb-4 w-full flex items-center justify-center">
            <input class="" type="file" @change="onFileSelected" />
            <button class="-ml-12" @click="onUpload"></button>
          </div>
          <div
            class="px-4 mb-4 w-full flex flex-wrap items-center justify-center"
          >
            <label
              class="w-full mx-6 md:mx-20 mb-2 md:text-3xl text-lag-dark font-bold tracking-wide"
              for="expiration"
              >Expiration:
            </label>
            <input class="" type="date" required />
          </div>
          <div class="px-4 mb-4 w-full flex items-center justify-center">
            <button
              class="ml-auto mr-auto block bg-lag-md text-orange-lt font-bold rounded-full p-1 w-3/5"
              type="submit"
              id="submitListing"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <!-- Image preview div-->
      <div
        class="border-black border-0 w-full md:w-1/3 md:h-1/4 items-center content-center"
      >
        <div v-if="imageData != null" class="h-full w-full md:hidden">
          <img
            class="preview w-full md:w-1/2 md:mt-4 md:ml-auto md:mr-auto p-2 rounded-md"
            height="268"
            width="356"
            :src="img1"
          />
          <br />
        </div>
      </div>
      <div class="border-black border-0 w-full md:w-1/3 md:h-1/4"></div>
      <div class="border-black border-0 w-full md:w-1/3 md:h-1/4"></div>
      <div class="border-black border-0 w-full md:w-1/2 md:h-1/4"></div>
    </div>
  </div>
</template>


<script>
import { getUserFromCookie } from '@/helpers';
import firebase from "firebase";
import "firebase/firestore";
import 'firebase/auth';

export default {
  asyncData({req, redirect}) {
      if(process.server) {
          const user = getUserFromCookie(req);
          //console.log(user);
          if(!user) {
            //console.log('here');
            redirect('/login');
          }
      } else {
          let user = firebase.auth().currentUser
          //console.log(user.uid);
          if(!user) {
            console.log('working');
            redirect('/login');
          }  
    }
  },
  created() {
  },
  data() {
    return {
      item: null,
      categories: [
        { text: "Fruits" },
        { text: "Vegetables" },
        { text: "Meats" },
        { text: "Grains" },
        { text: "Seafood" },
        { text: "Boxed" },
        { text: "Canned" },
      ],
      selectedCat: "",
      selectedVegetable: ["cucumber", "squash", "zucchini"],
      selectedFruit: ["apple", "mango", "watermelon"],
      selectedItem: "",
      description: null,
      selectedFile: null,
      img1: null,
      imageData: null,
      uploadValue: null,
      userID: '',
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
        alert("Please Fill Out All of the Form");
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
            Photos: this.img1,
            UserID: this.$store.state.user.uid,
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
      console.log(this.selectedFile);
      this.uploadValue = 0;
      this.img1 = URL.createObjectURL(this.selectedFile);
      this.imageData = event.target.files[0];
      //this.onUpload();
    },
    onUpload() {
      this.img1 = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.img1 = url;
            console.log(this.img1);
            this.addItem();
          });
        }
      );
    },
  },
};
</script>





<style scoped>
</style>