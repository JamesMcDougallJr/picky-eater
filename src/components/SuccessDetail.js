import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import useYelpBusinessResults from '../hooks/useYelpBusinessResults';
import StarRating from 'react-native-star-rating';

import { phonecall, text } from 'react-native-communications';

const SuccessDetail = ({ id }) => {
  const [name,
    rating,
    phone,
    imageUrl] = useYelpBusinessResults(id);

  return (
    <View>
      <Text style={styles.headingStyle}>{name}</Text>
      <StarRating rating={rating} />
      <TouchableOpacity onPress={() => phonecall(phone, true)}>
        <Text style={styles.text}>Make a call: {phone}</Text>
      </TouchableOpacity>
      <GradientButton
        text="let James Know" 
        onPressAction={() => text("9513311897", `Hey, let's go to ${name}!\n${imageUrl}`)} />
      <Image
        source={{ uri: imageUrl }}
        styles={styles.imageStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 25
  },
  text: {
    fontSize: 15
  },
  imageStyle: {
    width: 400,
    height: 400
  }
});

export default SuccessDetail;