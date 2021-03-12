<template>
  <div>
      <h1 class="text-7xl text-green-800">My Listings</h1>
    <ul v-if="Object.keys(categories).length > 0">
      <!-- <li v-for="item in cases" :key="item.phone">{{ item }}</li> -->
      <!-- <li v-if="categories">{{ categories }}</li> -->
      <li v-for="(item, key) in categories" :key="key">
          <h1 class="text-xl"> {{ item.item }} </h1>
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
        //const addRef = this.$fire.database.ref("cases/address");
        

        try {
            const snapshot = await messageRefs.once("value");
            //const snapshot2 = await addRef.once("value");
            this.categories = snapshot.val();
            //this.addresses = snapshot2.val();
           // console.log(snapshot2.val());

            // var parsed = JSON.parse(JSON.stringify(this.names));
            // console.log(parsed.address[1]);
            // console.log('break');
             console.log(this.categories);
             //this.addresses = this.names.address;
            // console.log('break');
            // console.log(addRef);
            
            // for(var i = 0; i < this.names.address.length; i++) {
            //     console.log(this.names.address[i]);
            // }
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