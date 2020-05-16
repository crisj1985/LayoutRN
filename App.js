import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const App = () => {
    return (
      <>
        <View style={{flexDirection:'row'}}>
          <Image source={require('./assets/img/bg.jpg')} style={styles.banner} />
        </View>
      </>
    )
};

const styles = StyleSheet.create({
  banner: {
    height:250,
    flex:1
  },
 
})

export default App