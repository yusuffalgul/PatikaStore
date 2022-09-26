import React from 'react';
import {
    View,
    Image,
    Text
    } from 'react-native'

import styles from './Card.style'



const Card = ({product}) => {

    return (
        <View style = {styles.container}>
            <Image style = {styles.image}  source={{uri : product.imgURL}}/>
            <View style = {styles.inner_container}>
                <Text style = {styles.title}>{product.title}</Text>
                <Text style = {styles.price}>{product.price}</Text>
                <Text style = {styles.stock}>{!product.inStock ? 'STOKTA YOK!!!!' : product.inStock}</Text>
            </View>   
          </View>


    );
}


export default Card;