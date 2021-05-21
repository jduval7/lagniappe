<template>
  <!-- <LoadingScreen v-if="isLoading"></LoadingScreen> -->
  <div
    class="bg-lag-light overflow-scroll h-screen content-center w-screen relative"
  >
    <div class="h-20 bg-lag-dark w-full absolute z-10">
      <img class="max-h-16 pt-2 pl-4 mt-1" src="~assets/logo.png" alt="" />
    </div>
    <div class="flex justify-center">
      <div
        class="sm:ml-0 lg:ml-0 flex justify-center top-28 text-orange relative text-4xl tracking-widest bg-lag-dark w-1/3 rounded-lg filter shadow-lg border-2 border-gray-400"
      >
        <div class="font-vegan">My Listings</div>
      </div>
    </div>
    <div
      class="w-screen relative top-28 flex flex-wrap justify-center align-middle"
    >
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
          <li class="text-center text-3xl text-lag-dark lg:text-5xl">
            <span class="text-center font-seravek font-bold">{{
              item.Description
            }}</span>
          </li>
          <li
            class="text-center text-xl lg:text-3xl font-seravek text-orange mt-2"
          >
            Expiration: {{ item.Expiration }}
          </li>
          <li>
              <button class="w-36 h-10 bg-yellow-500 float-right -mt-28 rounded-md text-xl font-bold" @click="deleteItem(item.DocNo)">Delete</button>
          </li>
            
        </ul>
        
      </div>
    </div>
  </div>
</template>


<script>
import { getUserFromCookie } from "@/helpers";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import Cookies from "js-cookie";
import LoadingScreen from "../components/loading";

export default {
  mounted() {
    //this.getUser();
    this.displayFruits();
  },
  data() {
    return {
      pantry: [],
      cats: [],
      category: "",
      userID: "",
      isLoading: true,
    };
  },
  components: {
    LoadingScreen,
  },
  methods: {
    getCategoryDataFromFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // VEGETABLES QUERY -------------
          const db = firebase.firestore();
          db.collection("pantry")
            .doc("D4PTEwn8QEr2j4jh7DRI")
            .collection("Vegetables")
            .where("UserID", "==", user.uid)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                this.pantry.push(doc.data());
              });
            })
            .catch((error) => {
              console.log("Error getting documents: ", error);
            });
          //FRUITS QUERY -----------------
          db.collection("pantry")
            .doc("D4PTEwn8QEr2j4jh7DRI")
            .collection("Fruits")
            .where("UserID", "==", user.uid)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                this.pantry.push(doc.data());
              });
            })
            .catch((error) => {
              console.log("Error getting documents: ", error);
            });
          // MEATS QUERY ----------------
          db.collection("pantry")
            .doc("D4PTEwn8QEr2j4jh7DRI")
            .collection("Meats")
            .where("UserID", "==", user.uid)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                this.pantry.push(doc.data());
              });
            })
            .catch((error) => {
              console.log("Error getting documents: ", error);
            });
          // BOXED QUERY -----------------
          db.collection("pantry")
            .doc("D4PTEwn8QEr2j4jh7DRI")
            .collection("Boxed")
            .where("UserID", "==", user.uid)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                this.pantry.push(doc.data());
              });
            })
            .catch((error) => {
              console.log("Error getting documents: ", error);
            });
          // CANNED QUERY ----------------
          db.collection("pantry")
            .doc("D4PTEwn8QEr2j4jh7DRI")
            .collection("Canned")
            .where("UserID", "==", user.uid)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                this.pantry.push(doc.data());
              });
            })
            .catch((error) => {
              console.log("Error getting documents: ", error);
            });
          // GRAINS QUERY ----------------
          db.collection("pantry")
            .doc("D4PTEwn8QEr2j4jh7DRI")
            .collection("Grains")
            .where("UserID", "==", user.uid)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                this.pantry.push(doc.data());
              });
            })
            .catch((error) => {
              console.log("Error getting documents: ", error);
            });
          // SEAFOOD QUERY -------------------
          db.collection("pantry")
            .doc("D4PTEwn8QEr2j4jh7DRI")
            .collection("Seafood")
            .where("UserID", "==", user.uid)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                this.pantry.push(doc.data());
              });
            })
            .catch((error) => {
              console.log("Error getting documents: ", error);
            });
        } else {
          console.log("User is not logged in.");
          this.$router.push("/login");
        }
      });
    },
    displayFruits() {
      //this.category = "Fruits";
      this.getCategoryDataFromFirebase();
      if(this.pantry) {
          //console.log(this.pantry[0].DocNo);
      }
        
    },
    getUser() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(this.userID);
          // update data or vuex state
        } else {
          console.log("User is not logged in.");
          this.$router.push("/login");
        }
      });
    },
    deleteItem(data) {
        if(data) {
            console.log(data);
        }
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