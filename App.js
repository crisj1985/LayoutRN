import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const App = () => {
    return (
      <>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('./assets/img/bg.jpg')} style={styles.banner} />
          </View>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>Que haces en Paris</Text>
            <ScrollView
                horizontal
            >
              <View>
                <Image source={require('./assets/img/actividad1.jpg')} style={styles.ciudad} />
              </View>
              <View>
                <Image source={require('./assets/img/actividad2.jpg')} style={styles.ciudad} />
              </View>
              <View>
                <Image source={require('./assets/img/actividad3.jpg')} style={styles.ciudad} />
              </View>
              <View>
                <Image source={require('./assets/img/actividad4.jpg')} style={styles.ciudad} />
              </View>
              <View>
                <Image source={require('./assets/img/actividad5.jpg')} style={styles.ciudad} />
              </View>
            </ScrollView>
          </View>
        </View>
      </>
    )
};

const styles = StyleSheet.create({
  banner: {
    height: 200,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width:200,
    height:250,
    marginRight:10
  },
})

export default App