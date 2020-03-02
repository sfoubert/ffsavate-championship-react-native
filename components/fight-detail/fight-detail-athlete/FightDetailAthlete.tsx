import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import Constants from '../../../constants/Constants';
import Cup from '../../shared/cup/Cup'
import isWinner from '../../shared/utils'

function FightDetailAthlete({fight, athlete, navigation}) {

    const picture = athlete.picture ? athlete.picture : '/assets/athletes/unknown.jpg';
    return (
      <Card containerStyle={styles.card}
            key={athlete.id}
            title={athlete.firstName + ' ' + athlete.lastName}>
        <Image
          style={{width: 200, height: 200}}
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
        {isWinner(fight, athlete) ? <Text><Cup style={styles.cup} /></Text> : null}
      </Card>
    );
}

export default FightDetailAthlete;

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
  cup: {
    width: 80,
    height: 70
  }
});