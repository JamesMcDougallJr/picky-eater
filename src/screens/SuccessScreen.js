import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SuccessDetail from '../components/SuccessDetail';

const SuccessScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  return (
    <View>
      <Text styles={styles.headingStyle}>SUCCESS YOU PICKED ONE FINALLY!</Text>
      <SuccessDetail id={id} />
    </View>
  );
}

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 25,
    textAlign: 'center',
  }
});

export default SuccessScreen;