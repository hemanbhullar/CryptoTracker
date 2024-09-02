import { useContext, useState } from "react";
import { useQuery } from "react-query";
import MyLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert.";

function useFetchCoinHistory(coinId) {
    const { currency } = useContext(CurrencyContext);

    const [days, setDays] = useState(90);
    const [interval, setCoinInterval] = useState('daily');

    const { data: historicData, isLoading, isError } = useQuery(['coinHistoricData', coinId, interval, currency, days], () => fetchCoinHistoricData(coinId, interval, days, currency), {
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    if(isLoading) {
        return <MyLoader />
    }

    if(isError) {
        return <Alert message="Error fetching data" type="error" />
    }

    return(
        historicData,
        isLoading,
        isError,
        setDays,
        setCoinInterval,
        days,
        currency
    )
}

export default useFetchCoinHistory;