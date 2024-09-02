import { useContext } from "react";
import { useQuery } from "react-query";
import { fetchCoinDetails } from "../../services/FetchCoinDetails";
import { CurrencyContext } from "../../Context/CurrencyContext";

function useFetchCoin(coinId) {

    const {currency} = useContext(CurrencyContext);

    //Todo , make api call and fetch the data

    const { data: coin, isLoading, isError, error } = useQuery(['coinDetails', coinId], () => fetchCoinDetails(coinId), {
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    return {
        currency,
        isError,
        isLoading,
        coin
    }
}

export default useFetchCoin;