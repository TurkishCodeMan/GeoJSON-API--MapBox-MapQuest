<template>
  <div class="container">
    <div class="text-box">
      <input type="text" v-model="address" />
      <button @click="addClicked" class="add">Add Address</button>
    </div>
  </div>
</template>

<script>
import GeoService from "../services/GeoService";
export default {
  data() {
    return {
      address: "",
    };
  },
  methods: {
    async addClicked() {
      if (this.address != "") {
        const data = await GeoService.postLocations({ address: this.address });
        console.log(data);
        return this.$router.push({ name: "map" });
      }
      alert("Lütfen Bir Adres Giriniz !");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.text-box {
  display: flex;
  flex-direction: column;
}
input,
.add {
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
input:focus,
.add:focus {
  outline: none;
}

input {
  min-width: 50vh;
  min-height: 2rem;
  margin-bottom: 2.5rem;
  padding: 1rem;
  color: rebeccapurple;
}
.add {
  padding: 1rem;
  color: white;
  background-color: rebeccapurple;
}
</style>