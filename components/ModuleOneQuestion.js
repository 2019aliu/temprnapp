import React, { Component, useState } from "react";
import { StyleSheet, Text, View , Button} from 'react-native';
import ModuleOneData from './ModuleOneData.js';

const questionList = ModuleOneData.questions;

const index = 0;

const ModuleOneQuestion = ({route, navigation}) => {
    const { question, answers, isStart, isEnd } = route.params;
    // more validation here

    const [ score, setScore ] = useState(0);
    const [ answerScore, setAnswerScore ] = useState(0);

    const nextButton = isEnd ? (
        <Button 
            title="Save your results" 
            onPress={() => {
                setScore(score + answerScore);
                setAnswerScore(0);
                navigation.navigate("ModuleOneEnd");
            }}
        />
    ) : (
        <Button 
            title="Go to next question" 
            onPress={() => {
                setScore(score + answerScore);
                setAnswerScore(0);
                navigation.navigate("ModuleOneQuestion", {
                    question: 'This is question 2',
                    isStart: false,
                    isEnd: false,
                    questionIndex: {index},
                    answers: [
                        'answerChoice1',
                        'answerChoice2',
                        'answerChoice3',
                        'answerChoice4',
                    ]
                });
            }}
        />
    );
    

    return (
        <View>
            <Text>{question}</Text>
            {/* think aboutd navigating to the next question for the answer choices */}
            <View>
                <Button title={answers[0]} style={styles.answer} onPress={() => setAnswerScore(0)}/>
                <Button title={answers[1]} style={styles.answer} onPress={() => setAnswerScore(1)}/>
                <Button title={answers[2]} style={styles.answer} onPress={() => setAnswerScore(2)}/>
                <Button title={answers[3]} style={styles.answer} onPress={() => setAnswerScore(3)}/>
            </View>
            <Text>Your score is {score + answerScore}</Text>
            <View>
                {nextButton}
                <Button title="Go Back" onPress={() => navigation.goBack()}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    answer: {
        color: 'red',
    }
})

export default ModuleOneQuestion;