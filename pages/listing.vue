<template>
  <div>
    <div class="m-auto grid grid-flow-col grid-cols-3 grid-rows-3">
      <div class="border-black border-2"></div>
      <div class="border-black border-2"></div>
      <div class="border-black border-2"></div>
      <div class="border-black border-2"></div>
      <div class="border-purple-600 border-2">
        <label class="text-right float-left" for="itemName">Item Name:</label>
        <input
          v-model='item'
          class="inline-block text-left float-right w-8/12 border-black rounded bg-gray-300"
          id="itemName"
          type="text"
          required
        />
        <br />
        <br />
        <label class="text-right float-left" for="category">Category:</label>
        <select @change="catChange($event)" name="category" id="category" class="inline-block text-left float-right w-8/12 rounded bg-gray-300" required>
            <option v-for="(category, key) in categories" :key="key">{{ category }}</option>
        </select>
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
        <button v-on:click="addItem()" class="bg-blue-500 rounded-full p-2" type="submit">Submit</button>

      </div>
      <div class="border-black border-2"></div>
      <div class="border-black border-2"></div>
      <div class="border-black border-2"></div>
      <div class="border-black border-2"></div>
    </div>
  </div>
</template>


<script>
    import firebase from 'firebase';


    export default {
        created() {
            this.readFromRealtimeDb();
        },
        data() {
            return {
                item: null,
                categories: []
            }
        },
        methods: {
            async readFromRealtimeDb() {
            const messageRef = this.$fire.database.ref("categories");
            console.log(messageRef);
            try {
                const snapshot = await messageRef.once("value");

                console.log(snapshot.val());
            } catch (e) {
                alert(e);
                return;
            }
            },
            addItem() {
                firebase.database().ref('categories').push({item:this.item})
                .then((data)=>{console.log(data)})
                .catch((error)=>{console.log(error)});
            },
            catChange(event) {
                console.log(event.target.value);
            },
        },
    };
</script>


<style scoped>
</style>