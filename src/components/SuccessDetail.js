import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import useYelpBusinessResults from '../hooks/useYelpBusinessResults';
import StarRating from 'react-native-star-rating';

const SuccessDetail = ({ id }) => {
  const [name,
    rating,
    phone,
    imageUrl] = useYelpBusinessResults(id);
  return (
    <View>
      <Text style={styles.headingStyle}>{name}</Text>
      <StarRating rating = {rating}/>
      <TouchableOpacity onPress={() => Linking.openURL(`tel:${phone}`)}>
        <Text style={styles.text}>Make a call: {phone}</Text>
      </TouchableOpacity>

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