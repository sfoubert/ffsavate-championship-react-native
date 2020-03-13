import React from 'react'
import {storiesOf} from '@storybook/react-native'
import {View, Text, StyleSheet} from 'react-native'
import Cup from '../../components/shared/cup/Cup'
import Man from '../../components/shared/man/Man'
import Woman from '../../components/shared/woman/Woman'

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
    <Cup style={{width : 16, height: 16}}>
    </Cup>
  </CenteredView>
))

storiesOf('Man', module).add('view', () => (
  <CenteredView>
    <Man style={{width : 170, height: 140}}>
    </Man>
  </CenteredView>
))

storiesOf('Woman', module).add('view', () => (
  <CenteredView>
    <Woman style={{width : 170, height: 140}}>
    </Woman>
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
