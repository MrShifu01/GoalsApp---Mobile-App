import { StyleSheet, View, Text, Pressable } from "react-native"

// ================== GoalItem ==================
const GoalItem = (props) => {

  return (
    <View style={styles.goalItem}>
        <Pressable 
        android_ripple={{color: '#000'}} 
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={props.onDeleteGoal.bind(this, props.goalId)}>
          <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  )
}
export default GoalItem

// ================== StyleSheet ==================
const styles = StyleSheet.create({

    goalItem: {
        borderRadius: 4,
        backgroundColor: '#444',
        color: '#fff',
        borderColor: '#000000',
        borderWidth: 1,
        marginBottom: 8,
        marginTop: 8,
        },

        pressedItem: {
          opacity:0.5,
        },

        goalText: {
            color: '#fff',
            padding: 10,
        },
})

