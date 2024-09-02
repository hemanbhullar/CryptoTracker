import CoinInfo from "./CoinInfo";
import MyLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert.";
import useFetchCoinHistory from "../Hooks/UseFetchCoinHistory";
  
function CoinInfoContainer( { coinId } ) {

    const {historicData, isError, isLoading, currency, days, setDays, setCoinInterval} = useFetchCoinHistory(coinId);

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