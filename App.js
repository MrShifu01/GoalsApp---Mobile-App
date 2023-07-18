import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [goals, setGoals] = useState([])

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    setGoals(currentGoals => [...currentGoals, enteredGoalText])
    setEnteredGoalText('')
  }

  return (
    <View style={styles.appContainer}>
      
      {/* Text Input and Button */}
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput} 
        placeholder="Enter a Goal" 
        onChangeText={goalInputHandler}
        />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>

      {/* List of inputted goals */}
      <View style={styles.goalsContainer}>
        <Text>Goal List</Text>
        {goals.map((goal, index) => <Text key={goal + index}>{goal}</Text>)}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 16,
    },

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
      width: '70%',
      borderColor: '#cccccc',
      borderWidth: 1,
      padding: 8,
      marginBottom: 8, 
      marginRight: 8, 
    },

    goalsContainer: {
      flex: 4,
    }

});
