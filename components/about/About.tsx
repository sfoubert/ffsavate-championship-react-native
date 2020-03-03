import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Card } from 'react-native-elements'
import * as WebBrowser from 'expo-web-browser'
import Constants from '../../Constants'

function About({navigation}) {

  const openBrowser = () => {
    WebBrowser.openBrowserAsync('https://sites.google.com/view/ffsavate-championship')
  }

  return (
    <Card
      title='A Propos'
      image={{uri: Constants.urlAssets + '/assets/about/about.jpg'}}>
      <View>
        <Text>seb_fou@hotmail.com</Text>
        <Text>Paris, France | 2020</Text>
        <Button title='App Privacy Policy' onPress={openBrowser}/>
        {Constants.env == 'dev' ?
          <Button type='outline' title='StoryBook' onPress={() => navigation.navigate('StoryBook')}/>
          : null}
        <Text>Environnement : {Constants.env}</Text>
      </View>
    </Card>
  )
}

export default About

const styles = StyleSheet.create({
})