import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements'
import { Asset } from 'expo-asset'

export const CUP = require('../../../assets/fights/cup.svg')

const imageCup = Asset.fromModule(CUP);

function Cup(props) {
  return (
      <Image
        style={props.style}
        source={imageCup}
        PlaceholderContent={<ActivityIndicator />}
      />
  )
}

export default Cup
