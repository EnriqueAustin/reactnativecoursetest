import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHadler(enteredText) {
        setEnteredGoalText(enteredText);
      };

      function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
      };

    return (
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.textInput} 
            placeholder="Your course Goals!" 
            onChangeText={goalInputHadler}
            />
            <Button title='Add Goal' onPress={props.onAddGoal}/>
      </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
      },
      goalsContainer: {
        flex: 5,
      },
});