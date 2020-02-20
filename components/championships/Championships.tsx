import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { Button, Card, Icon } from 'react-native-elements'
import { findChampionships } from '../../services/championships.service'
import { Championship } from '../../models/championship.model'
import Constants from '../../constants/Constants'
import Moment from 'moment'
import { useNavigation } from "@react-navigation/core"

function Championships() {
  const navigation = useNavigation()

  const [championships, setChampionships] = useState([])

  useEffect(() => {

    async function fetchFights() {
      const championships: Championship[] = await findChampionships()
      setChampionships(championships)
    }

    fetchFights()

  }, [])

  return (
    <ScrollView style={styles.container}>
      {
        renderCards()
      }
    </ScrollView>
  )

  function renderCards() {
    return championships.map((championship: Championship) => {
      return (
        <Card
          key={championship.id}
          title={championship.label}
          image={{uri: Constants.urlAssets + championship.picture}}>
          <Text>{Moment(championship.fightDate).format('DD/MM/YYYY')} - {championship.place}</Text>
          <Button
            icon={<Icon name='search' color='white'/>}
            buttonStyle={styles.button}
            onPress={() => navigation.navigate('Fights', {championshipId: championship.id})}
            title='VOIR'/>
        </Card>
      )
    })
  }
}

export default Championships

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  button: {
    backgroundColor: '#03A9F4',
    borderRadius: 8,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  }
})
