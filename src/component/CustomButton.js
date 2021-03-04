import React, { Component } from 'react';
import { View, Text, Platform, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({onPress, title}) => {
    return( 
        <TouchableOpacity 
        onPress={onPress} 
        style={styles.buttons}
    >
        <View>
        <Text style={styles.texts}>{title}</Text>
        </View>
    </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: '#A6B189', 
        width: 140, 
        height: 42, 
        alignItems:'center', 
        justifyContent: 'center', 
        borderRadius: 25,
    },
    texts: {
        color: '#FFF', 
        fontWeight: 'bold', 
        fontSize: 16
    }
})
 

