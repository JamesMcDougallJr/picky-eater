import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import useYelpResults from '../hooks/useYelpSearchResults';
import YelpResultDetail from './YelpResultDetail';
import { withNavigation } from "react-navigation";

const MainViewDetail = ({ navigation, price }) => {
  const [names, urls, ids, setNames, setUrls, setIds] = useYelpResults(price);

  const remove = () => {
    setNames(names.slice(1, names.length));
    setUrls(urls.slice(1, urls.length));
    setIds(ids.slice(1, ids.length));
  }

  const next = () => {
    navigation.navigate("Success", { id: ids[0], restaurant: names[0] });
  }

  return (
    <View>
      <Text style={styles.headingStyle}>Time to decide.</Text>
      <Text>What's for dinner?</Text>
      <YelpResultDetail
        name={names[0]}
        image_url={urls[0]} />
      <View style={styles.buttonStyle}>
        <GradientButton
          text="Yes"
          blueMarine
          width='45%'
          onPressAction={() => next()} />
        <GradientButton
          text="No"
          pinkDarkGreen
          width='45%'
          onPressAction={() => remove()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 25,
    textAlign: 'center',
  },
  buttonStyle: {
    flexDirection: 'row',
  }
});

export default withNavigation(MainViewDetail);