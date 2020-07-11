import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ModuleOne = ({navigation}) => {
    return (
        <View>
            <Text>Module One</Text>
            <Text>This section is about general psychology</Text>
            <View>
                <Button 
                    title="Get Started" 
                    onPress={() => {navigation.navigate("ModuleOneQuestion", {
                        question: 'This is question 1',
                        isStart: true,
                        isEnd: false,
                        answers: [
                            'answerChoice1',
                            'answerChoice2',
                            'answerChoice3',
                            'answerChoice4',
                        ]
                    })}}
                />
                <Button title="Go Back" onPress={() => navigation.goBack()}/>
            </View>
        </View>
    )
}

export default ModuleOne;