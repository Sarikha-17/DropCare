import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Switch,
  Alert,
  ImageBackground,
} from 'react-native';

import back from '@/assets/images/background.png';

const ProfileScreen = () => {
  const [step, setStep] = useState('input');
  const [isMasked, setIsMasked] = useState(true);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const maskName = (name) => {
    const [first, last] = name.split(' ');
    return (
      (first?.charAt(0) || '') +
      '***' +
      ' ' +
      (last?.charAt(0) || '') +
      '***'
    );
  };

  const maskPhone = (phone) => '+91-XXX-' + phone.slice(-4);
  const maskAddress = () => 'Bldg ***';

  const handleSubmit = () => {
    if (!name || !address || !phone) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    setStep('profile');
    setIsMasked(true);
  };

  const toggleMask = () => setIsMasked(!isMasked);

  return (
    <ImageBackground source={back} style={styles.image}>
      {/* 👇 Welcome text above the overlay box */}
      <Text style={styles.greeting}>Welcome, Sarikha!</Text>

      <View style={styles.overlay}>
        {step === 'input' ? (
          <>
            <Text style={styles.welcome}>Enter Your Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Address"
              placeholderTextColor="#999"
              value={address}
              onChangeText={setAddress}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="#999"
              value={phone}
              keyboardType="phone-pad"
              onChangeText={setPhone}
            />
            <Button title="Confirm" onPress={handleSubmit} />
          </>
        ) : (
          <>
            <Text style={styles.welcome}>DropSafe Profile</Text>

            <Text style={styles.label}>
              Name: {isMasked ? maskName(name) : name}
            </Text>
            <Text style={styles.label}>
              Address: {isMasked ? maskAddress(address) : address}
            </Text>
            <Text style={styles.label}>
              Phone: {isMasked ? maskPhone(phone) : phone}
            </Text>

            <View style={styles.toggleContainer}>
              <Text style={styles.label}>Show Real Info</Text>
              <Switch value={!isMasked} onValueChange={toggleMask} />
            </View>

            <Button title="Edit Profile" onPress={() => setStep('input')} />
          </>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 80,
  },
  greeting: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: 25,
    borderRadius: 16,
    width: '85%',
    borderWidth: 1.5,
    borderColor: 'white',
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: 'white',
    color: 'black',
  },
  label: {
    marginBottom: 10,
    fontSize: 18,
    color: 'white',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});

export default ProfileScreen;
