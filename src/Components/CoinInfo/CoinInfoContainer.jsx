import { useContext, useState } from "react";
import { CurrencyContext } from "../../Context/CurrencyContext";
import CoinInfo from "./CoinInfo";
import { useQuery } from "react-query";
import { fetchCoinHistoricData } from "../../services/FetchHistoricData";
import MyLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert.";
  
function CoinInfoContainer( { coinId } ) {

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

    return (
        <div>
            <CoinInfo 
            historicData = {historicData} 
            setDays = {setDays} 
            setCoinInterval={setCoinInterval} 
            days = {days}
            currency = {currency}
             />
        </div>
    );
}

export default CoinInfoContainer;