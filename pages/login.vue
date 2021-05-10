<template>
  <div class="bg-lag-light w-full h-screen relative">
    <div class="h-20 bg-lag-dark w-full absolute z-10">
      <img class="max-h-16 pt-2 pl-4 mt-1" src="~assets/logo.png" alt="" />
    </div>
    <div
      class="mt-32 flex w-full justify-center items-center flex-col bg-lag-md text-lag-light absolute"
    >
      <h3 class="text-5xl m-6">Login</h3>
      <form
        class="flex w-full justify-center items-center flex-col"
        @submit.prevent="pressed"
      >
        <div class="login">
          <input
            class="rounded-md m-1 h-10 w-60 text-black"
            type="text"
            placeholder="  email"
            v-model="email"
          />
        </div>
        <div class="password">
          <input
            class="rounded-md m-1 h-10 w-60 text-black"
            type="password"
            placeholder="  password"
            v-model="password"
          />
        </div>
        <div
          class="bg-orange text-lag-dark text-3xl font-bold rounded-md h-10 w-52 m-4"
          v-if="loggedIn"
          @click="logout"
        >
          Logout
        </div>
        <button
          class="bg-orange text-lag-dark text-3xl font-bold rounded-md h-10 w-52 m-4"
          v-else
        >
          Login
        </button>
        <div class="error m-6" v-if="error">{{ error.message }}</div>
      </form>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";
import "firebase/auth";
import Cookies from "js-cookie";

export default {
  mounted() {
    this.setupFirebase();
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
      loggedIn: false,
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          console.log(data.user.uid);
          let userID = data.user.uid;
          this.$store.commit('SET_USERID', userID);
          this.$router.push("/");
        })
        .catch((error) => (this.error = error));
    },
    logout() {
      firebase.auth().signOut();
      console.log("logged out");
    },
    setupFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log("logged in");
          this.loggedIn = true;
          firebase
            .auth()
            .currentUser.getIdToken(true)
            .then(token => {
              Cookies.set("access_token", token);
            });
        } else {
          this.loggedIn = false;
          Cookies.remove('access_token');
        }
      });
    },
  },
};
</script>

