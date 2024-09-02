import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { CurrencyContext } from "../../Context/CurrencyContext";
import {fetchCoinHistoricData} from "../../services/FetchHistoricData";

function useFetchCoinHistory(coinId) {
    const { currency } = useContext(CurrencyContext);

    const [days, setDays] = useState(7);
    const [interval, setCoinInterval] = useState('daily');

    const { data: historicData, isLoading, isError } = useQuery(['coinHistoricData', coinId, interval, currency, days], () => fetchCoinHistoricData(coinId, interval, days, currency), {
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    return{
        historicData,
        isLoading,
        isError,
        setDays,
        setCoinInterval,
        days,
        currency
    }
}

export default useFetchCoinHistory;