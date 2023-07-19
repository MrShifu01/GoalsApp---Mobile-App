import { useState } from "react"
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"

// ================== GoalInput ==================
const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('')
 
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <View style={styles.textInput}>
          <TextInput
            placeholder="Enter a Goal"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={props.toCloseModal} title="Cancel" color='#999' />
          </View>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal" color='#111' />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput

// ================== StyleSheet ==================
const styles = StyleSheet.create({

  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444',
    padding: 16,
  },

  textInput: {
    width: '90%',
    borderColor: '#eee',
    backgroundColor: '#eee',
    color: '#ccc',
    borderWidth: 1,
    padding: 12,
    marginBottom: 16, 
    marginRight: 8, 
    borderRadius: 4,
  },

  buttonContainer: {
    flexDirection: 'row',
  },

  button: {
    width: '30%',
    marginLeft: 8,
    marginRight: 8,
  },

  image: {
    width: 100,
    height:100,
    margin: 20,
  }
})


