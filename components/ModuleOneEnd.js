import React, { Component, useState } from "react";
import { StyleSheet, Text, View , Button} from 'react-native';

const ModuleOneEnd = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Congrats you finished the Module!</Text>
        </View>
    )
}

export default ModuleOneEnd;