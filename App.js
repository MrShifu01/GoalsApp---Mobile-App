import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem'

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [goals, setGoals] = useState([])

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    setGoals(currentGoals => [...currentGoals, {
      text: enteredGoalText,
      key: Math.random().toString()
    }])
    setEnteredGoalText('')
  }

  return (
    <View style={styles.appContainer}>
      
      {/* Text Input and Button */}
      <View style={styles.inputContainer}>
        <View style={styles.textInput}>
          <TextInput
          placeholder="Enter a Goal"
          onChangeText={goalInputHandler}
          />
        </View>
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>

      {/* List of inputted goals */}
      <View style={styles.goalsContainer}>

        {/* Flatlist better than ScrollView */}
        {/* By adding a key property the list items as they are objects, Flatlist sees the keys and automatically saves it */}
        <FlatList 
        data={goals} 
        renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} />
        }}/>
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
      borderRadius: 4,
    },

    goalsContainer: {
      flex: 4,
    },
});
