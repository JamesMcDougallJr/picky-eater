import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import GradientButton from 'react-native-gradient-buttons';

const PreviewDetail = ({navigation}) => {
  const next = (price) => {
    // navigate to the next page with the price
    navigation.navigate("Main", {price: price});
  }

  return (
    <View>
      <Text style={styles.headingStyle}>Pick a Price Range.</Text>
      <GradientButton text="$" onPressAction={() => next(1)} />
      <GradientButton text="$$" onPressAction={() => next(2)} />
      <GradientButton text="$$$" onPressAction={() => next(3)} />
      <GradientButton text="$$$$" onPressAction={() => next(4)} />
    </View>
  );
}

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 25,
    textAlign: 'center',
  }
});

export default withNavigation(PreviewDetail);