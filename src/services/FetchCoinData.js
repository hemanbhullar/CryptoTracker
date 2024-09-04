import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinData(page, currency, setLoading, setData) {
    const perPage = 20;
    try {
        const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}`);
        // setItems(response.data);
        console.log(response);
        setData((prevData) => [...prevData, ...response.data]);
        setLoading(false);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

// export async function fetchMoreData(page, currency, setItems, setHasMore, setPage) {
//     const perPage = 20;
//     try{
//         const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page+1}`);

//         setItems((prevItem) => [...prevItem, ...response.data]);

//         response.data.length > 0 ? setHasMore(true) : setHasMore(false);
//         setPage((page) => page+1);
//     } catch(error) {
//         console.log(error);
//         return null;
//     }
// };