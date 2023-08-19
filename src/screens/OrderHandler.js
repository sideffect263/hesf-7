import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {useRoute} from '@react-navigation/native'; 


const OrderHandler = () => {

  console.log('OrderHandler')
  const route = useRoute();
  console.log(route.params)

  return (
    <View style={styles.container}>
        
      <Text>OrderHandler</Text>
    </View>
  )
}

//create a astyle sheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#86bbd8',
        alignItems: 'center',
        justifyContent: 'center',
        },
    });

export default OrderHandler