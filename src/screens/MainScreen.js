import React from 'react';
import MainViewDetail from "../components/MainViewDetail";

const MainScreen = ({navigation}) => {
  const price = navigation.getParam('price');
  return <MainViewDetail price={price}/>;
}

export default MainScreen;