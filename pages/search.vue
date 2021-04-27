<template>
  <div class="bg-lag-light overflow-scroll h-screen w-screen relative flex justify-center content-center">
    <div class="h-20 bg-lag-dark w-full absolute z-10">
      <img class="max-h-16 pt-2 pl-4 mt-1" src="~assets/logo.png" alt="" />
    </div>
    <div class="mt-28 md:mt-32 grid bg-gradient-to-tl from-light-orange to-light-orange rounded-md w-screen m-4 md:w-2/3 lg:h-4/5 xl:h-5/6 h-screen md:h-full md:grid-cols-2 xl:grid-cols-auto shadow-lg border-4 overflow-scroll md:overflow-hidden">
      <button class="md:hidden m-4 h-16 w-4/5 md:h-20 md:w-2/3  bg-gradient-to-tl from-lag-dark via-lag-md to-lag-dark rounded-full place-self-center shadow-lg">
       <nuxt-link to='/vegetables' class="text-4xl rounded-full text-orange">Vegetables</nuxt-link>
      </button>
      <button class="md:hidden m-4 h-16 w-4/5 md:h-20 md:w-2/3 bg-gradient-to-tl from-lag-dark via-lag-md to-lag-dark rounded-full place-self-center shadow-lg">
        <nuxt-link to='/fruits' class="text-4xl rounded-full p-2 m-6 text-orange">Fruits</nuxt-link>
      </button>
      <button class="md:hidden m-4 h-16 w-4/5 md:h-20 md:w-2/3  bg-gradient-to-tl from-lag-dark via-lag-md to-lag-dark rounded-full place-self-center shadow-lg">
        <nuxt-link to='/grains' class="text-4xl rounded-full p-2 m-6 text-orange">Grains</nuxt-link>
      </button>
      <button class="md:hidden m-4 h-16 w-4/5 md:h-20 md:w-2/3  bg-gradient-to-tl from-lag-dark via-lag-md to-lag-dark rounded-full place-self-center shadow-lg">
        <nuxt-link to='/meatpoultry' class="text-4xl rounded-full p-2 m-6 text-orange">Meats</nuxt-link>
      </button>
      <button class="md:hidden m-4 h-16 w-4/5 md:h-20 md:w-2/3  bg-gradient-to-tl from-lag-dark via-lag-md to-lag-dark rounded-full place-self-center shadow-lg">
        <nuxt-link to='/seafood' class="text-4xl rounded-full p-2 m-6 text-orange">Seafood</nuxt-link>
      </button>
      <button class="md:hidden m-4 h-16 w-4/5 md:h-20 md:w-2/3  bg-gradient-to-tl from-lag-dark via-lag-md to-lag-dark rounded-full place-self-center shadow-lg">
        <nuxt-link to='/boxed' class="text-4xl rounded-full p-2 m-6 text-orange">Boxed Meals</nuxt-link>
      </button>
      <button class="md:hidden m-4 h-16 w-4/5 md:h-20 md:w-2/3  bg-gradient-to-tl from-lag-dark via-lag-md to-lag-dark rounded-full place-self-center shadow-lg">
        <nuxt-link to='/canned' class="text-4xl rounded-full p-2 m-6 text-orange">Canned</nuxt-link>
      </button>
      <button class="md:hidden m-4 h-16 w-4/5 md:h-20 md:w-2/3  bg-gradient-to-tl from-lag-dark via-lag-md to-lag-dark rounded-full place-self-center shadow-lg">
        <nuxt-link to='/fruits' class="text-4xl rounded-full p-2 m-6 text-orange">Fruits</nuxt-link>
      </button>

      <div class="vegetables relative rounded-lg h-40 xl:h-60 xl:mt-6 xl:ml-6 z-0 mt-4 ml-4 mr-4 mb-2 object-contain shadow-lg hover:bg-lag-md">
        <nuxt-link to='/vegetables' class="cat-link rounded-lg w-full h-full text-center absolute z-20 object-contain flex items-center justify-center">
          <h3 class="opacity-0 text-8xl z-30 text-white">VEGETABLES</h3>
        </nuxt-link>
      </div>
      <div class="fruits rounded-lg h-40 xl:h-60 xl:mt-6 xl:mr-6 relative z-0 mt-4 ml-4 mr-4 mb-2 object-contain shadow-lg hover:bg-lag-md">
         <nuxt-link to='/fruits' class="cat-link rounded-lg w-full h-full text-center absolute z-20 object-contain flex items-center justify-center">
          <h3 class="opacity-0 text-8xl z-30 text-white">FRUITS</h3>
         </nuxt-link>
      </div>
      <div class="breads rounded-lg h-40 xl:h-60 xl:ml-6 relative z-0 mt-4 ml-4 mr-4 mb-2 shadow-lg hover:bg-lag-md">
          <nuxt-link to='/grains' class="cat-link rounded-lg w-full h-full text-center absolute z-20 object-contain flex items-center justify-center">
            <h3 class="opacity-0 text-8xl z-30 text-white">GRAINS</h3>
          </nuxt-link>
      </div>
      <div class=" meats rounded-lg h-40 xl:h-60 xl:mr-6 relative z-0 mt-4 ml-4 mr-4 mb-2 shadow-lg hover:bg-lag-md">
          <nuxt-link to='/meatpoultry' class="cat-link rounded-lg w-full h-full text-center absolute z-20 object-contain flex items-center justify-center">
            <h3 class="opacity-0 text-8xl z-30 text-white">MEATS</h3>
          </nuxt-link>
      </div>
      <div class="seafood rounded-lg h-40 xl:h-60 xl:ml-6 relative z-0 mt-4 ml-4 mr-4 mb-2 shadow-lg hover:bg-lag-md">
        <nuxt-link to='/seafood' class="cat-link rounded-lg w-full h-full text-center absolute z-20 object-contain flex items-center justify-center">
           <h3 class="opacity-0 text-8xl z-30 text-white">SEAFOOD</h3>
        </nuxt-link>
      </div>
      <div class="boxed rounded-lg h-40 xl:h-60 xl:mr-6 relative z-0 mt-4 ml-4 mr-4 mb-2 shadow-lg hover:bg-lag-md">
         <nuxt-link to='/boxed' class="cat-link rounded-lg w-full h-full text-center absolute z-20 object-contain flex items-center justify-center">
            <h3 class="opacity-0 text-8xl z-30 text-white">BOXED MEALS</h3>
         </nuxt-link>
      </div>
      <div class="canned rounded-lg h-40 xl:h-60 xl:ml-6 xl:mb-6 relative z-0 m-4 shadow-lg hover:bg-lag-md">
          <nuxt-link to='/canned' class="cat-link rounded-lg w-full h-full text-center absolute z-20 object-contain flex items-center justify-center">
              <h3 class="opacity-0 text-8xl z-30 text-white">CANNED</h3>
          </nuxt-link> 
      </div>
      <div class="supplies rounded-lg h-40 xl:h-60 xl:mr-6 xl:mb-6 relative z-0 m-4 shadow-lg hover:bg-lag-md">
          <nuxt-link to='/supplies' class="cat-link rounded-lg w-full h-full text-center absolute z-20 object-contain flex items-center justify-center">
                <h3 class="opacity-0 text-8xl z-30 text-white">SUPPLIES</h3>
          </nuxt-link>
      </div>

     
      <!-- <nuxt-link to='/seafood' class="">
        <img src="~assets/seafood.jpg" alt="Seafood" class="rounded-lg max-h-40">
      </nuxt-link>
      <nuxt-link to='/boxed' class="">
        <img src="~assets/boxed.jpg" alt="Boxed Meals" class="rounded-lg max-h-40">
      </nuxt-link>
      <nuxt-link to='/canned' class="">
        <img src="~assets/canned.jpg" alt="Canned Goods" class="rounded-lg max-h-40">
      </nuxt-link>
      <nuxt-link to='/supplies' class="">
        <img src="~assets/battery.jpg" alt="Supplies" class="rounded-lg max-h-40">
      </nuxt-link> -->
      
    </div>  
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

<style>

.overlay {
  background: linear-gradient(rgba(0,0,0,0.2),rgba(23,125,155,0.2));
}

.vegetables {
  background-image: url("~assets/veg.jpg"), linear-gradient(rgba(0,0,0,0.2),rgba(23,125,155,0.2));
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-position: center;
}

.fruits {
  background-image: url("~assets/fruit.jpg"), linear-gradient(rgba(23,125,155,0.2),rgba(23,125,155,0.2));
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-position: center;
}

.breads {
  background-image: url("~assets/breads.jpg"), linear-gradient(rgba(23,125,155,0.2),rgba(23,125,155,0.2));
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-position: center;
}

.meats {
  background-image: url("~assets/meats.jpg"), linear-gradient(rgba(23,125,155,0.2),rgba(23,125,155,0.2));
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-position: center;
}

.seafood {
  background-image: url("~assets/seafood.jpg"), linear-gradient(rgba(23,125,155,0.2),rgba(23,125,155,0.2));
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-position: center;
}

.boxed {
  background-image: url("~assets/boxed.jpg"), linear-gradient(rgba(23,125,155,0.2),rgba(23,125,155,0.2));
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-position: center;
}

.canned {
  background-image: url("~assets/canned.jpg"), linear-gradient(rgba(23,125,155,0.2),rgba(23,125,155,0.2));
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-position: center;
}

.supplies {
  background-image: url("~assets/battery.jpg"), linear-gradient(rgba(23,125,155,0.2),rgba(23,125,155,0.2));
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-position: center;
}

.cat-link:hover h3 {
    opacity: 1;
}

</style>