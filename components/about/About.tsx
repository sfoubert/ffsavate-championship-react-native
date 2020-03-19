import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Card, Icon } from 'react-native-elements'
import * as WebBrowser from 'expo-web-browser'
import Constants from '../../Constants'

function About({navigation}) {

  const openBrowser = () => {
    WebBrowser.openBrowserAsync('https://sites.google.com/view/ffsavate-championship')
  }

  return (
    <ScrollView style={styles.container}>
      <Card
        title='A Propos'
        image={{uri: Constants.urlAssets + '/assets/about/about.jpg'}}>
        <View>

          <Button buttonStyle={styles.video}
                  icon={
                    <Icon
                      name='movie'
                      size={15}
                      color='white'
                    />
                  }
                  title='Boxe Française'
                  onPress={() => navigation.navigate('FightVideo', {url: 'https://www.youtube.com/watch?v=RVzIBRcgtxo'})}
          />

          <Button buttonStyle={styles.video}
                  icon={
                    <Icon
                      name='movie'
                      size={15}
                      color='white'
                    />
                  }
                  title='Canne de combat'
                  onPress={() => navigation.navigate('FightVideo', {url: 'https://www.youtube.com/watch?v=OZ1kN6jeAXM&t=33s'})}
          />

          <Button buttonStyle={styles.video}
                  icon={
                    <Icon
                      name='movie'
                      size={15}
                      color='white'
                    />
                  }
                  title='Savate défense'
                  onPress={() => navigation.navigate('FightVideo', {url: 'https://www.youtube.com/watch?v=kmBoWFdarpI'})}
          />

          <Button buttonStyle={styles.video}
                  icon={
                    <Icon
                      name='movie'
                      size={15}
                      color='white'
                    />
                  }
                  title='Savate forme'
                  onPress={() => navigation.navigate('FightVideo', {url: 'https://www.youtube.com/watch?v=UwB-jx0Z_JI'})}
          />

          {Constants.env == 'dev' ?
            <Button
              buttonStyle={styles.video}
              type='outline'
              title='StoryBook'
              onPress={() => navigation.navigate('StoryBook')}/>
            : null}

          <Button
            buttonStyle={styles.video}
            type='outline'
            title='App Privacy Policy'
            onPress={openBrowser}/>

          <Text>Tous droits réservés © 2020</Text>
          <Text>Paris, France</Text>
          <Text>seb_fou@hotmail.com</Text>
          <Text>Environnement : {Constants.env}</Text>
        </View>
      </Card>
    </ScrollView>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
  },
  video: {
    margin: 20
  },
})