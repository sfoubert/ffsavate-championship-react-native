import React, { FunctionComponent } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Championships from './components/championships/Championships'
import Fights from './components/fights/Fights'
import FightDetail from './components/fight-detail/FightDetail'
import FightVideo from './components/fight-detail/fight-video/FightVideo'
import Events from './components/events/Events'
import About from './components/about/About'
import { StyleSheet } from "react-native"

const Stack = createStackNavigator();
function ChampionshipStack() {
  return (
    <Stack.Navigator
      headerMode='screen'
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: styles.headerStyle,
      }}
    >
      <Stack.Screen
        name='Championships'
        component={Championships}
        options={{ headerShown : false }}
      />
      <Stack.Screen
        name='Fights'
        component={Fights}
        options={{ title: 'Combats' }}
      />
      <Stack.Screen
        name='FightDetail'
        component={FightDetail}
        options={{ title: 'Combat' }}
      />
      <Stack.Screen
        name='FightVideo'
        component={FightVideo}
        options={{ title: 'Vidéo' }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator()
const ChampionshipTabs: FunctionComponent = () => (
    <Tab.Navigator
        initialRouteName='Championships'
        tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'lightsteelblue',
            tabStyle: styles.tabStyle
        }}
    >
        <Tab.Screen
            name='Championships'
            component={ChampionshipStack}
            options={{
                tabBarLabel: 'Championnats',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name='home' color={color} size={size}/>
                ),
            }}
        />
        <Tab.Screen
          name='Events'
          component={Events}
          options={{
            tabBarLabel: 'Calendrier',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name='calendar' color={color} size={size}/>
            ),
          }}
        />
        <Tab.Screen
          name='About'
          component={About}
          options={{
            tabBarLabel: 'A propos',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name='information' color={color} size={size}/>
            ),
          }}
        />
    </Tab.Navigator>
)

const App: FunctionComponent = () => (
    <NavigationContainer>
        <ChampionshipTabs/>
    </NavigationContainer>
)

export default App

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'dodgerblue'
  },
  tabStyle: {
    backgroundColor: 'dodgerblue'
  }

})
