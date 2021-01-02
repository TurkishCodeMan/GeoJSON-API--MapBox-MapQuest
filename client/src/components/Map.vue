<template>
  <div class="container">
    <div id="mapContainer"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import GeoService from "../services/GeoService";
export default {
  data() {
    return {
      api_key:
        "pk.eyJ1IjoidHVya2lzaGNvZGVtYW4iLCJhIjoiY2tqZnBjczlnOHUxNjMycWp4MXZjbzlyayJ9.zKUVRPZfWQHHeORQXYWMZQ",
    };
  },
  methods: {
    loadMap(stores) {
      mapboxgl.accessToken = this.api_key;
      let map = new mapboxgl.Map({
        container: "mapContainer",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [38.103536, 38.482016],
        zoom: 9,
      });

      map.on("load", function () {
        console.log("Burada");
        map.addLayer({
          id: "points",
          type: "symbol",

          source: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: stores,
            },
          },
          layout: {
            "icon-image": "{icon}-15",
            "icon-size": 1.5,
            "text-anchor": "top",
            "text-offset": [0, 0.9],
            "text-field": "{name}",
          },
        });
      });
    },
  },
  async mounted() {
    const data = await GeoService.getLocations("/");
    let stores = data.data.map((item) => {
      return {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
            item.location.coordinates[0],
            item.location.coordinates[1],
          ],
        },
        properties: {
          name: item.location.formattedAddress,
          icon: "shop",
        },
      };
    });

    this.loadMap(stores);
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
#mapContainer {
  min-width: 100vh;
  min-height: 80vh;
  border: none;
}
#mapContainer:focus {
  outline: none;
}
</style>