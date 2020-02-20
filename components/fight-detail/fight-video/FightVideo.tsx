import React, { useRef } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { WebView } from 'react-native-webview';

function FightVideo({route}) {
    const {url} = route.params
  const webViewRef = useRef(null);
    return (
      <View style={styles.container}>
        <WebView
          ref={webViewRef}
          automaticallyAdjustContentInsets={false}
          source={{uri: url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate='normal'
          startInLoadingState={true}
          style={{zIndex: -1}}/>
        <Text style={styles.text}>
          Chargement...
        </Text>
      </View>
    )
}

export default FightVideo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    position: 'absolute',
    height: 300,
    width: 300,
    top: 0,
    zIndex: 8999999999999999999
  }
})