import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'
import { Button, Card, Icon } from 'react-native-elements'
import Constants from '../../../Constants'
import Cup from '../../shared/cup/Cup'
import isWinner from '../../shared/utils'
import Man from '../../shared/man/Man'
import Woman from '../../shared/woman/Woman'
import { Athlete } from '../../../models/athlete.model'
import { Fight } from '../../../models/fight.model'

interface FightDetailAthleteProps {
  fight: Fight,
  athlete: Athlete,
  navigation: any
}

function FightDetailAthlete({fight, athlete, navigation}: FightDetailAthleteProps) {

  function getPicture() {
    let picture = '/assets/athletes/unknown.jpg'
    if (athlete.picture) {
      picture = athlete.picture;

    } else if (athlete.gender == 'M') {
      return (<Man style={styles.svgMan}/>)

    } else if (athlete.gender == 'F') {
      return (<Woman style={styles.svgMan}/>)
    }

    return (<Image
      style={styles.photo}
      source={{uri: Constants.urlAssets + picture}}
    />)
  }

  const picture = getPicture()
  return (
    <Card containerStyle={styles.card}
          key={athlete.id}
          title={athlete.firstName + ' ' + athlete.lastName}>

      {picture}

      <Text style={styles.text}>{athlete.club} ({athlete.department})</Text>
      {
        athlete.height && athlete.height !== 0 ?
          <Text>{athlete.height} cm</Text>
          : null
      }
      {!!fight.video ? (
        <Button buttonStyle={styles.video}
                icon={
                  <Icon
                    name='movie'
                    size={15}
                    color='white'
                  />
                }
                title='Vidéo'
                onPress={() => navigation.navigate('FightVideo', {url: fight.video})}
        />
      ) : null}

      <View style={styles.viewCup}>
        {isWinner(fight, athlete) ? <Cup height='80px' width='80px'/> : null}
      </View>
    </Card>
  )
}

export default FightDetailAthlete

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 5,
    height: '95%',
    width: '95%'
  },
  picture: {},
  video: {
    margin: 20
  },
  viewCup: {
    width: '100%',
    alignItems: 'center',
  },
  photo: {
    width: 200,
    height: 200
  },
  svgMan: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 165
  },
  text: {
    textAlign: 'center'
  }
})