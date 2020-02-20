import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';

export const CUP = require('../../../assets/fights/cup.svg');

function Cup(props) {
  return (
      <Image
        style={props.style}
        source={CUP}
        PlaceholderContent={<ActivityIndicator />}
      />
  );
}

export default Cup;
