<template>
  <div>
      <h1 class="text-7xl text-green-800">Search for Items</h1>
    <ul v-if="Object.keys(categories).length > 0">
      <!-- <li v-for="item in cases" :key="item.phone">{{ item }}</li> -->
      <!-- <li v-if="categories">{{ categories }}</li> -->
      <li v-for="(item, key) in categories" :key="key">
          <h1 class="text-xl"> {{ key }}: {{ item.item }} </h1>
      </li>
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

             console.log(this.categories);
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