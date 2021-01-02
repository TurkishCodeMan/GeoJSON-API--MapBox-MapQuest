import API from "./API"
class GeoService {
    static async getLocations() {
        try {
            const response = await API().get("/")
            return response.data;
        } catch (error) {
            return error;
        }
    }
    static async postLocations(location){
        try {
            const response = await API().post("/stores",location)
            return response.data;
        } catch (error) {
            return error;
        }
    }
}

export default GeoService;