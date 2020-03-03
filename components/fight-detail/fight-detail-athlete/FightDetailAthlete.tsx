import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'
import { Button, Card, Icon } from 'react-native-elements'
import Constants from '../../../Constants'
import Cup from '../../shared/cup/Cup'
import isWinner from '../../shared/utils'

function FightDetailAthlete({fight, athlete, navigation}) {

  function getPicture() {
    let picture = '/assets/athletes/unknown.jpg'
    if (athlete.picture) {
      picture = athlete.picture;
    } else if (athlete.gender == 'M') {
      picture = '/assets/athletes/man.svg'
    } else if (athlete.gender == 'F') {
      picture = '/assets/athletes/woman.svg'
    }
    return picture
  }

  const picture = getPicture()
    return (
      <Card containerStyle={styles.card}
            key={athlete.id}
            title={athlete.firstName + ' ' + athlete.lastName}>
        <Image
          style={styles.photo}
          source={{uri: Constants.urlAssets + picture}}
        />

        <Text>{athlete.club} ({athlete.department})</Text>
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
          {isWinner(fight, athlete) ? <Cup style={styles.cup} /> : null}
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
    width: '95%',
  },
  picture: {},
  video: {
    margin: 20
  },
  cup: {
    width: 80,
    height: 70
  },
  viewCup: {
    width: 80,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  photo: {
    width: 200,
    height: 200
  }
})