<template>
  <div>
      <h1 class="text-7xl text-green-800">Search for Items</h1>
    <ul v-if="Object.keys(categories).length > 0">
      <!-- <li v-for="item in cases" :key="item.phone">{{ item }}</li> -->
      <!-- <li v-if="categories">{{ categories }}</li> -->
      <li v-for="(item, key) in categories" :key="key">
          <!-- <h1 v-for="fruit in Object.entries(key)" :key="key" > {{ fruit }} </h1> -->
          <!-- <h1 class="text-xl"> {{ key }}: {{ item }} </h1> -->
          <h1>{{key}}:</h1>
          <br>
          <div v-for="(subCat, key) in item" :key="key"> {{key}}: {{subCat.item}} 
              <div v-for="superSub in subCat" :key="superSub">  {{ superSub.item }}</div>
          </div>

          <br>
      </li>
      <!-- {{Object.entries(categories)}} -->
      <br><br>
      <div>
        <!-- <li v-for="(vegetable, key) in categories" :key="key">
            <h1> {{ key }}: {{ vegetable }} </h1>
        </li> -->
      </div>
    </ul>
  </div>
</template>



<script>
export default {
    data() {
        return {
            categories: [],
            addresses: [],
        };
    },
    created() {
        this.readFromRealtimeDb();
    },
    methods: {
        async readFromRealtimeDb() {
        const messageRefs = this.$fire.database.ref("categories");
        

        try {
            const snapshot = await messageRefs.once("value");
              
            this.categories = snapshot.val();
             
 

            
            // console.log(this.categories);
             console.log(snapshot.val());

        } catch (e) {
            alert(e);
            return;
        }
        },
    },
};
</script>


<style scoped>
</style>