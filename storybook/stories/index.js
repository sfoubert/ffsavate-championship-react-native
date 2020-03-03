import React from 'react'
import {storiesOf} from '@storybook/react-native'
import {View, Text, StyleSheet} from 'react-native'
import Cup from "../../components/shared/cup/Cup"

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}

const CenteredView = ({children}) => <View style={style}>{children}</View>

storiesOf('Cup', module).add('medium view', () => (
  <CenteredView>
    <Cup style={styles.cup}>
    </Cup>
  </CenteredView>
)).add('small view', () => (
  <CenteredView>
    <Cup style={{width : 16, height: 14}}>
    </Cup>
  </CenteredView>
))

storiesOf('CenteredView', module).add('default view', () => (
  <CenteredView>
    <Text>Hello Storybook</Text>
  </CenteredView>
))


const styles = StyleSheet.create({
  cup: {
    width: 160,
    height: 140
  }
})
