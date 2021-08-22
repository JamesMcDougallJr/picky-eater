import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const YelpResultDetail = ({ name, image_url }) => {
  return (
    <View>
      <Text style={styles.headingStyle}>Would you like to go to {name}? </Text>
      <Image 
        source={{ uri: image_url }}
        style={styles.imageStyle}/>
    </View>
  );
}

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 18,
  },
  imageStyle: {
    width: 400, 
    height: 400
  }
});

export default YelpResultDetail;