import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem'
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

// ================== App ==================
export default function App() {
  const [goals, setGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function addGoalHandler(enteredGoalText) {
    setGoals(currentGoals => [...currentGoals, {
      text: enteredGoalText,
      id: Math.random().toString()
    }])
    handleEndAddGoal()
  }

  function handleDeleteGoal(goalId) {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  function handleStartAddGoal() {
    setModalIsVisible(true)
  }

  function handleEndAddGoal() {
    setModalIsVisible(false)
  }

  return (
    <>
    {/* Status bar to style the time and battery of the phone */}
      <StatusBar style='auto'/> 
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#000" onPress={handleStartAddGoal} />
        <GoalInput
          visible={modalIsVisible}
          toCloseModal={handleEndAddGoal}
          onAddGoal={addGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  goalId={itemData.item.id}
                  onDeleteGoal={handleDeleteGoal}
                  text={itemData.item.text}
                />
              );
            }}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </>
  );
}

// ================== StyleSheet ==================
const styles = StyleSheet.create({

    appContainer: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 16,
    },
    goalsContainer: {
      flex: 4,
    },
});
