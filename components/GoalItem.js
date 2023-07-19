import { StyleSheet, View, Text } from "react-native"

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    goalItem: {
        padding: 10,
        borderRadius: 4,
        backgroundColor: '#444',
        color: '#fff',
        borderColor: '#000000',
        borderWidth: 1,
        marginBottom: 8,
        marginTop: 8,
        },

        goalText: {
            color: '#fff',
        },
})

export default GoalItem