import React, { FunctionComponent, useEffect } from 'react'
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
import TabBarLabel from './components/shared/tab-bar-label/TabBarLabel'
import { StyleSheet } from 'react-native'
import './i18n'
import { useTranslation } from 'react-i18next'
import StorybookUIRoot from './storybook'

import registerForPushNotificationsAsync from './services/pushNotification.service'
import * as firebase from 'firebase'

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: 'AIzaSyAXah7fFGIcgTw1wuv60SjswPUCb-wR9EE',
  authDomain: 'ffsavate-championship.firebaseapp.com',
  databaseURL: 'https://ffsavate-championship.firebaseio.com',
  projectId: 'ffsavate-championship',
  storageBucket: 'ffsavate-championship.appspot.com',
  messagingSenderId: '381212872489'
};

function ChampionshipStack() {
  const { t } = useTranslation()
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
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Fights'
        component={Fights}
        options={{title: t('header.fights')}}
      />
      <Stack.Screen
        name='FightDetail'
        component={FightDetail}
        options={{title: t('header.fight')}}
      />
      <Stack.Screen
        name='FightVideo'
        component={FightVideo}
        options={{title: t('header.video')}}
      />
      <Stack.Screen
        name='StoryBook'
        component={StorybookUIRoot}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function AboutStack() {
  return (
    <Stack.Navigator
      headerMode='screen'
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: styles.headerStyle,
      }}
    >
      <Stack.Screen
        name='About'
        component={About}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='StoryBook'
        component={StorybookUIRoot}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator()
const ChampionshipTabs: FunctionComponent = () => {
  const {t} = useTranslation()
  return (
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
          tabBarLabel: () => <TabBarLabel>{t('tabs.championships')}</TabBarLabel>,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name='home' color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name='Events'
        component={Events}
        options={{
          tabBarLabel: () => <TabBarLabel>{t('tabs.events')}</TabBarLabel>,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name='calendar' color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name='About'
        component={AboutStack}
        options={{
          tabBarLabel: () => <TabBarLabel>{t('tabs.about')}</TabBarLabel>,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name='information' color={color} size={size}/>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const App: FunctionComponent = () => {

  firebase.initializeApp(firebaseConfig);

  useEffect(() => {
    registerForPushNotificationsAsync()
  }, [])

  return (
    <NavigationContainer>
      <ChampionshipTabs/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'dodgerblue'
  },
  tabStyle: {
    backgroundColor: 'dodgerblue',
  },
})
