import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card } from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';
import Constants from "../../constants/Constants"

function About() {

  const openBrowser = () => {
    WebBrowser.openBrowserAsync('https://sites.google.com/view/ffsavate-championship');
  };

  return (
    <Card
      containerStyle={styles.container}
      title='A Propos'
      image={{uri: Constants.urlAssets + '/assets/championships/unknown.jpg'}}>
      <Text>seb_fou@hotmail.com</Text>
      <Text>Paris, France | 2020</Text>
      <Text>© Tous droits réservés</Text>
      <Button title="App Privacy Policy" onPress={openBrowser}/>
    </Card>
  );
}

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})