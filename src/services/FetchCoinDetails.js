import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinDetails(id) {
    try {
        const response = await axiosInstance.get(`/coins/${id}`);
        // setItems(response.data);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}