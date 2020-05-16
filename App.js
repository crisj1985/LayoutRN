import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const App = () => {
    return (
      <>
        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('./assets/img/bg.jpg')} style={styles.banner} />
          </View>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>Que haces en Paris</Text>
            <ScrollView horizontal>
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
            <Text style={styles.titulo}>Los mejores alojamientos</Text>
            <View>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('./assets/img/mejores1.jpg')} style={styles.mejores} />
              </View>
            </View>
            <View>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('./assets/img/mejores2.jpg')} style={styles.mejores} />
              </View>
            </View>
            <View>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('./assets/img/mejores3.jpg')} style={styles.mejores} />
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    )
};

const styles = StyleSheet.create({
  banner: {
    height: 175,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 15,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 200,
    height: 200,
    marginRight: 10,
  },
  mejores:{
      width:"100%",
      height:150,
      marginVertical:5
  }
})

export default App