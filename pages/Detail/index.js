import React from 'react';
import { View, Text, Image, ScrollView, Dimensions, StyleSheet} from 'react-native';

import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';

export default function Detail({ route }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.background_image}>
        <Image
        source={route.params.img}
        style={styles.image}
        resizeMode="cover"
        />
      </View>
      <View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 24 } ]}>{route.params.nome}</Text>
        </View>
        <View>
          <Text style={[styles.title, { fontSize: 19 } ]}>R$ {route.params.price}</Text>
        </View>  
        <View style={styles.dotContainer}>
          <Dot color="#2379f4" />
          <Dot color="#8A05BE" />
          <Dot color="#ddd" />
          <Dot color="#000" />
        </View>
        <View style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#300441" color="#FFF" >40</SizeButton>
            <SizeButton>37</SizeButton>
            <SizeButton>39</SizeButton>
            <SizeButton>42</SizeButton>
          </ScrollView>
        </View>
        <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            {route.params.nome}
          </Text>
          <Text style={styles.textContent}>
            {route.params.desc}
          </Text>
        </View>
        <Button/>
        <View style={styles.line} />
        <Footer/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#F5F5F5'
  },
  background_image: {
    backgroundColor: '#fff',
    width: '100%',
    height: 300
  },
  image:{
    flex: 1,
    width: '100%',
    height: 300,
    resizeMode: 'contain'
  },
  title:{
    fontWeight: 'bold',
    paddingHorizontal: '2%'
  },
  dotContainer:{
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: '2%'
  },
  textList:{
    fontSize: 16,
    lineHeight: 25,
  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  }
});