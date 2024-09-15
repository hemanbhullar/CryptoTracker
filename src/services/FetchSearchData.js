import axiosInstance from "../helpers/axiosInstance";

export async function fetchSearchData(value, setSuggestions) {
    try {
        const response = await axiosInstance.get(`/search?query=${value}`);
        setSuggestions(response.data.coins);
    } catch (error) {
        console.log(error);
    }
}