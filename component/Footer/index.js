import React, {useState} from 'react';
import { View,
         Text,
         StyleSheet,
         FlatList,
         Image,
         TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import {colorful_shoes} from '../../data/shoes';

export default function Footer() {
  
    function Track({img, nome, price, desc}) {
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
          <Text style = {{height: 40, fontSize: 12, padding: 5, fontWeight: 'bold'}}> {nome} </Text>
          <Text style = {{fontSize: 20, opacity: 0.4, fontWeight: 'bold'}}>R$ {price}</Text>
        </TouchableOpacity>
      )
    }

    return (
        <View>
            <Text style={styles.title}>Você também pode gostar</Text>
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
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    },
    products: {
        width: 150,
        borderRadius: 5,
        margin: 10,
        padding: 10,
        backgroundColor: '#fff'
    },
        img: {
        width: 150,
        height: 90,
        alignSelf: 'center'
    }
})