<template>
  <div>
    <ul>
      <li v-for="name in names" :key="name.id">{{ name }}</li>
      <li v-for="address in addresses" :key="address.id">{{ address }}</li>
    </ul>
  </div>
</template>



<script>
export default {
    data() {
        return {
            names: [],
            addresses: [],
        };
    },
    created() {
        this.readFromRealtimeDb();
    },
    methods: {
        async readFromRealtimeDb() {
        const messageRefs = this.$fire.database.ref("cases");
        var addRef = this.$fire.database.ref("cases/address");
        

        try {
            const snapshot = await messageRefs.once("value");
            this.names = snapshot.val();
            console.log(snapshot.val());
            var parsed = JSON.parse(JSON.stringify(this.names));
            console.log(this.names.address[1]);
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