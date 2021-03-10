<template>
    <div>
        <div class="m-auto grid grid-flow-col grid-cols-3 grid-rows-3">
            <div class="border-black border-2"></div>
            <div class="border-black border-2"></div>
            <div class="border-black border-2"></div>
            <div class="border-black border-2"></div>
            <div class="border-black border-2">
                                                <label class="text-right float-left" for="itemName">Item Name:</label>
                <input class="inline-block text-left float-right w-8/12 border-black rounded bg-gray-300" id="itemName" type="text">
                <br>
                <br>
                <label class="text-right float-left" for="category">Category:</label>
                <input class="inline-block text-left float-right w-8/12 rounded bg-gray-300" id="category" type="text">
                <br>
                <br>
                <label class="align-top text-right float-left" for="description">Description:</label>
                <textarea class="inline-block text-left float-right w-8/12 rounded bg-gray-300" id="description" cols="30" rows="10">
                </textarea>
            </div>
            <div class="border-black border-2"></div>
            <div class="border-black border-2"></div>
            <div class="border-black border-2"></div>
            <div class="border-black border-2"></div>
        </div>
    </div>
</template>


<script>
    export default {
    
    }
</script>


<style scoped>

</style>