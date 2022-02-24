import { StatusBar } from 'expo-status-bar';
import React, { Component, useState , useEffect } from 'react';
import { StyleSheet,
         Text,
         View,
         ScrollView,
         TextInput,
         FlatList,
         TouchableOpacity,
         TouchableWithoutFeedback,
         Dimensions,
         Image }
from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { black_shoes , colorful_shoes } from '../../data/shoes'

export default function App({ navigation }) {

  const nextPage = (nome, img, price, desc) => {
      navigation.navigate('detail', {nome: nome, img: img, price: price, desc: desc});
  }

  function Track({nome, img, price, desc}) {
    const [liked, setLiked] = useState(null);

    return (
      <TouchableOpacity onPress={() => nextPage(nome, img, price, desc)} style = {styles.products}>
        <TouchableOpacity onPress = {() => {setLiked(!liked)}}>
          { !liked && <MaterialCommunityIcons name="heart-outline" size={25} color="black" />}
          { liked && <MaterialCommunityIcons name="heart" size={25} color="red" />}
        </TouchableOpacity>
        <Image style = {styles.img}
        source = {img}>
        </Image>
        <Text numberOfLines={2} style = {{height: 40, fontSize: 12, padding: 5, fontWeight: 'bold'}}> {nome} </Text>
        <Text numberOfLines={1} style = {{fontSize: 20, opacity: 0.4, fontWeight: 'bold'}}>R$ {price}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style = {{marginTop: 40}}>
          <TextInput style = {styles.text_input} multiline = {false} maxLength={50} />
        </View>
        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity style = {styles.button}>
            <AntDesign name="man" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style = {styles.button}>
            <AntDesign name="woman" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style = {styles.button}>
            <Feather name="menu" size={20} color="white" />
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
              nome = {item.nome}
              img = {item.image}
              price = {item.price}
              desc = {item.desc}
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
              price = {item.price}
              desc = {item.desc}
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
    width: '96%',
    height: 45,
    borderRadius: 5,
    marginHorizontal: '2%',
    padding: 10,
    backgroundColor: '#E8E8E8',
    alignSelf: 'center'
  },
  button: {
    height: 40,
    borderRadius: 20,
    marginTop: 10,
    marginLeft: '2%',
    padding: 10,
    backgroundColor: '#8a05be'
  },
  text_1: {
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold'
  },
  products: {
    width: 150,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff'
  },
  img: {
    width: 150,
    height: 90,
    alignSelf: 'center'
  }
});
