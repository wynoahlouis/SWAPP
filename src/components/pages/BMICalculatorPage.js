import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { Button, Text } from 'react-native-paper';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBMIResult] = useState(null);

  const calculateBMI = () => {
    // Add logic to calculate BMI
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);

      const bmi = weightInKg / (heightInMeters * heightInMeters);
      setBMIResult(bmi.toFixed(2));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text>Enter Height (cm):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={height}
          onChangeText={(text) => setHeight(text)}
        />

        <Text>Enter Weight (kg):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />

        <Button mode="contained" onPress={calculateBMI} style={styles.button}>
          Calculate BMI
        </Button>

        {bmiResult !== null && (
          <View style={styles.resultContainer}>
            <Text>Your BMI: {bmiResult}</Text>
            {/* Add additional information or recommendations based on BMI if needed */}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default BMICalculator;

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
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
