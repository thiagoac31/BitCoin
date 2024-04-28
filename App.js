import React, {useState, useEffect} from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';
import CurrentPrice from './src/components/currentPrice';
import HistoryGraphic from './src/components/historyGraphic';
import QuotationList from './src/components/quotationList';

function addZero(number){
  if (number <=9){
    return "0" + number
  }
  return number
}

function url(qtdDays){
  const date = new Date()
  const listLasDays = qtdDays
  const endDate = 
    `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`
  date.setDate(date.getDate() - listLasDays)
  const startDate = 
    `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}}`

  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`
}

async function getListCoins(url){
  let respone = await fetch(url)
  let returnApi = await respone.json()
  let selectListQuotation = returnApi.bpi

  const queryCoinsList = Object.keys(selectListQuotation).map((key) => {
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotation[key]
    }
  })
  let data = queryCoinsList.reverse()
  return data
}

async function getPriceCoinsGraphics(url){
  let responeGraphic = await fetch(url)
  let returnApiGraphic = await responeGraphic.json()
  let selectListQuotationGraphic = returnApiGraphic.bpi

  const queryCoinsListGraphic = Object.keys(selectListQuotationGraphic).map((key) => {
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotationGraphic[key]
    }
  })
  let dataGraphic = queryCoinsListGraphic
  return dataGraphic
}

export default function App() {
  const [coinsList, setCoinsList] = useState([])
  const [coinsGraphicList, setCoinsGraphicList] = useState([0])
  const [days, setDays] = useState(30)
  const [updateData, setUpdateData] = useState(true)
  
  function updateDay(number){
    setDays(number)
    setUpdateData(true)
  }

  useEffect(() => {
    getListCoins(url(days)).then((data) => {
      setCoinsList(data)
    })
    getPriceCoinsGraphics(url(days)).then((dataGraphic) =>{
      setCoinsGraphicList(dataGraphic)
    })

    if (updateData){
      setUpdateData(false)
    }

  }, [updateData])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor='#f50d41'   
        barStyle="light-content"
      />
      <CurrentPrice/>
      <HistoryGraphic infoDataGraphic={coinsGraphicList}/>
      <QuotationList filterDay={updateDay} listTransactions={coinsList}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40:0
  },
  
});
