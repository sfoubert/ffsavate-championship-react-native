import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import { Fight } from '../../models/fight.model'
import { findFights } from '../../services/fights.service'
import { Icon, ListItem } from 'react-native-elements'
import Cup from '../shared/cup/Cup'
import isWinner from '../shared/utils'

function Fights({route, navigation}) {
  const {championshipId} = route.params
  const [fights, setFights] = useState([])

  useEffect(() => {

    async function fetchFights() {
      const fights: Fight[] = await findFights(championshipId)
      setFights(fights);
    }

    fetchFights();

  }, [])

  return (
    <ScrollView>
      {
        fights.map((f: Fight) => (
          <ListItem
            key={f.id}
            title={f.weight}
            subtitle={
              <View style={styles.subtitleView}>
                {!!f.video ? (
                  <Icon
                    iconStyle={styles.viewIcon}
                    name='videocam'
                  />
                ) : null}
                <Text style={styles.subtitleText}>
                  {f.athlete1.lastName.toUpperCase()}
                </Text>
                <View style={{width: 16,height: 14}}>
                {isWinner(f, f.athlete1) ? <Cup style={styles.cup}/> : null}
                </View>
                <Text style={styles.subtitleText}>
                  /
                  {f.athlete2.lastName.toUpperCase()}
                </Text>
                <View style={{width: 16,height: 14}}>
                {isWinner(f, f.athlete2) ? <Cup style={styles.cup}/> : null}
                </View>
              </View>
            }
            onPress={() => navigation.navigate('FightDetail', {fight: f})}
            bottomDivider
            chevron
          />
        ))
      }
    </ScrollView>
  );
}

export default Fights;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  subtitleView: {
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  subtitleText: {
    paddingTop: 7
  },
  viewIcon: {
    color: 'dodgerblue',
    width: 20,
    margin: 5
  },
  cup: {
    width: 16,
    height: 14
  }
});
