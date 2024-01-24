import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { Button, Text } from 'react-native-paper';

const SleepTracker = () => {
  const [sleepDuration, setSleepDuration] = useState('');
  const [sleepQuality, setSleepQuality] = useState('');
  const [notes, setNotes] = useState('');

  const onSaveSleepData = () => {
    // Add logic to save sleep tracking data
    // You can use a state management solution or API calls to save data

    // For now, let's log the data to the console
    console.log('Sleep Duration:', sleepDuration);
    console.log('Sleep Quality:', sleepQuality);
    console.log('Notes:', notes);

    // You can navigate to another screen or perform any other actions here
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text>Sleep Duration (hours):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={sleepDuration}
          onChangeText={(text) => setSleepDuration(text)}
        />

        <Text>Sleep Quality (1-10):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={sleepQuality}
          onChangeText={(text) => setSleepQuality(text)}
        />

        <Text>Notes:</Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={4}
          value={notes}
          onChangeText={(text) => setNotes(text)}
        />

        <Button mode="contained" onPress={onSaveSleepData} style={styles.button}>
          Save Sleep Data
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default SleepTracker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#365486',
    marginTop: 20,
  },
});
