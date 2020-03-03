import React from 'react'
import { StyleSheet, View } from 'react-native'
import Swiper from "react-native-web-swiper";
import FightDetailAthlete from "./fight-detail-athlete/FightDetailAthlete"

interface FightDetailProps {
  route?: any;
  navigation: any;
}

function FightDetail({route, navigation}: FightDetailProps) {

  const {fight} = route.params
  return (
    <Swiper
      from={0}
      minDistanceForAction={0.1}
      controlsProps={{
        dotsTouchable: true,
        prevPos: 'left',
        prevTitle: '<',
        prevTitleStyle: styles.swiperbutton,
        nextPos: 'right',
        nextTitle: '>',
        nextTitleStyle: styles.swiperbutton
      }}
    >
      <View style={styles.slide1}>
        <FightDetailAthlete fight={fight} athlete={fight.athlete1} navigation={navigation}/>
      </View>
      <View style={styles.slide2}>
        <FightDetailAthlete fight={fight} athlete={fight.athlete2} navigation={navigation}/>
      </View>
    </Swiper>
  )
}

export default FightDetail

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  swiperbutton: {
    color: 'dodgerblue',
    fontSize: 24,
    fontWeight: '500'
  }

})