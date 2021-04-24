import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet,
         Text,
         View,
         ScrollView,
         TextInput,
         FlatList,
         Touchable,
         TouchableOpacity,
         Image }
from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function App() {
  const black_shoes = [
    {
      nome: 'Tênis Nike Revolution 5',
      image: require('./assets/sneakers/black_1.webp')
    },
    {
      nome: 'Tênis Nike SB Charge Canvas',
      image: require('./assets/sneakers/black_2.webp') 
    },
    {
      nome: 'Tênis Nike Air Zoom Vapor Cage 4',
      image: require('./assets/sneakers/black_3.webp')
    }
  ]
  const colorful_shoes = [
    {
      nome: 'Tênis Nike Air Max 270 React Bauhaus',
      image: require('./assets/sneakers/colorful_1.webp')
    },
    {
      nome: 'Tênis Paul George Shoes 3 Vermelho',
      image: require('./assets/sneakers/colorful_2.webp')
    },
    {
      nome: 'Tênis Nike Air Max 270 React Azul',
      image: require('./assets/sneakers/colorful_3.webp')
    }
  ]

  function Track({img, nome}) {
    const [liked, setLiked] = useState(null);

    return (

      <TouchableOpacity style = {styles.products}>
        <TouchableOpacity onPress = {() => {setLiked(!liked)}}>
          { !liked && <MaterialCommunityIcons name="heart-outline" size={25} color="black" />}
          { liked && <MaterialCommunityIcons name="heart" size={25} color="red" />}
        </TouchableOpacity>
        <Image style = {styles.img}
        source = {img}>
        </Image>
        <Text style = {{fontWeight: 'bold'}}> {nome} </Text>
      </TouchableOpacity>

    )

  }

  return (

    <View style={styles.container}>
      <ScrollView>
        <View style = {{flexDirection: 'row', marginTop: 40}}>
          <TextInput style = {styles.text_input} multiline = {false} maxLength={50} />
          <TouchableOpacity style = {styles.button(40, 0)}>
            <Feather name="menu" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity style = {styles.button(40, 10)}>
            <AntDesign name="man" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style = {styles.button(40, 10)}>
            <AntDesign name="woman" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <Text style = {styles.text_1}>Pretos</Text>
        <FlatList
            horizontal
            data={black_shoes}
            showsHorizontalScrollIndicator={false}
            style={{height: 220}}
            renderItem={( {item } ) => (

              <Track 
                img = {item.image}
                nome = {item.nome}
              />

            )}

            keyExtractor={(item, index) => index.toString()}
          
        />

        <Text style = {styles.text_1}>Coloridos</Text>
        <FlatList
            horizontal
            data={colorful_shoes}
            showsHorizontalScrollIndicator={false}
            style={{height: 220}}
            renderItem={( {item } ) => (

              <Track 
                img = {item.image}
                nome = {item.nome}
              />

            )}

            keyExtractor={(item, index) => index.toString()}
          
        />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  text_input: {
    width: '80%',
    height: 40,
    borderRadius: 5,
    marginLeft: '2%',
    padding: 5,
    backgroundColor: '#E8E8E8'
  },
  button:(height, margin_top) => ({
    height: height,
    borderRadius: 5,
    marginTop: margin_top,
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#8a05be'
  }),
  text_1: {
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold'
  },
  products: {
    width: 150,
    height: 200,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#fff'
  },
  img: {
    width: 125,
    height: 125
  }
});
