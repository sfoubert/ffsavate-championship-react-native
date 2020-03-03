import React, { FunctionComponent, ReactNode } from 'react'
import { StyleSheet, Text } from 'react-native'

interface TabBarLabelProps {
  children: ReactNode
}

const TabBarLabel: FunctionComponent<TabBarLabelProps> = ({children}) => (
  <Text style={styles.tabBarLabel}>{children}</Text>
)

export default TabBarLabel

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 13,
    color: '#B0C4DE',
    //fontFamily: 'Arial, Helvetica, sans-serif',
  }
})
