import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const InputSection = (props) => {
   return (
      <View style={props.viewStyle}>
         <Text style={[styles.inputLabel, props.labelStyle]}> {props.label}</Text>
         <TextInput
            style={styles.input}
            autoCapitalize="none"
            {...props}
         ></TextInput>
      </View>
   )
}
const styles = StyleSheet.create({
   inputLabel: {
      color: '#8A8F9E',
      fontSize: 10,
      textTransform: 'uppercase'
   },
   input: {
      borderBottomColor: '#8A8F9E',
      borderBottomWidth: StyleSheet.hairlineWidth,
      height: 40,
      fontSize: 15,
      color: '#161F3D'
   }
})

export default InputSection
