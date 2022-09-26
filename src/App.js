import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet, 
  FlatList,
  } from 'react-native';

import Card from './Components/Card';

import product_data from './product.json';


function App() {


  const renderProduct = ({item}) => <Card product = {item} />;

  const [text, onChangeText] = React.useState(null);

  return (
    <View style = {styles.container}>
      <Text style = {styles.header_text}>PATIKASTORE</Text>
        <TextInput  
          style  = {styles.search}
          onChangeText = {onChangeText}
          value = {text}
          placeholder = "Search"
        />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data = {product_data}
        renderItem = {renderProduct}     
        numColumns = {2}
      />
    </View>
    




  ); 


}


export default App;


const styles = StyleSheet.create({
  container : {
    flex : 1,
  },  
  header_text : {
    fontWeight : 'bold',
    fontSize : 50,
    color : 'purple',
    marginLeft : 15
  },
  search : {
    borderWidth : 1,
    margin : 10,
    marginLeft : 15,
    borderRadius : 10,
    padding : 8
  }




});