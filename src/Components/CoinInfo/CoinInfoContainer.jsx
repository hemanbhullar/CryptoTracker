import { useContext, useState } from "react";
import { CurrencyContext } from "../../Context/CurrencyContext";
import CoinInfo from "./CoinInfo";
import { useQuery } from "react-query";
import { fetchCoinHistoricData } from "../../services/FetchHistoricData";
import MyLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert.";
import useFetchCoinHistory from "../Hooks/UseFetchCoinHistory";
  
function CoinInfoContainer( { coinId } ) {

    const {historicData, isError, isLoading, currency, days, setDays, setCoinInterval} = useFetchCoinHistory(coinId);

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