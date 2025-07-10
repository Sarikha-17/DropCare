import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  ImageBackground,
} from 'react-native';

import back from '@/assets/images/background.png'; // Update path as needed

const UnlockScreen = ({ route, navigation }) => {
  const { location = 'Unknown', eta = 'Unknown', onUnlock } = route?.params || {};

  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');

  // Generate OTP when screen loads
  useEffect(() => {
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(randomOtp);
    console.log('Generated OTP:', randomOtp); // For testing
  }, []);

  const handleUnlock = () => {
    if (otp === generatedOtp) {
      Alert.alert('Success', 'OTP Verified. Unlocking details...');
      onUnlock?.(); // call back to unmask
      navigation.goBack();
    } else {
      Alert.alert('Invalid OTP', 'Please enter the correct OTP sent.');
    }
  };

  return (
    <ImageBackground source={back} 
    style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.header}> Smart Unlock</Text>

        <View style={styles.infoBox}>
          <Text style={styles.label}> Location:</Text>
          <Text style={styles.value}>{location}</Text>

          <Text style={styles.label}> Estimated Arrival:</Text>
          <Text style={styles.value}>{eta}</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          placeholderTextColor="#aaa"
          keyboardType="number-pad"
          value={otp}
          onChangeText={setOtp}
        />

        <Button title="Unlock" onPress={handleUnlock} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: 25,
    borderRadius: 16,
    width: '85%',
    borderColor: 'white',
    borderWidth:1.5, 
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  infoBox: {
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
  },
  input: {
    height: 50,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});

export default UnlockScreen;
