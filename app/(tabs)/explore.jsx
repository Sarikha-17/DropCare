import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet
} from 'react-native';

import back from "@/assets/images/background.png"

export default function ExploreScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleStart = () => {
    alert('Account Created');
  };

  return (
    <ImageBackground
      source={back}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.smallText}>
          Already have an account? <Text style={styles.link}>Sign in</Text>
        </Text>
        <Text style={styles.heading}>Create your free account</Text>
        <Text style={styles.subHeading}>Experience DropCare features with no cost</Text>
        <Text style={styles.signin}>Sign in to DropCare</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Horizontal Buttons Box */}

        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    padding: 24,
    backgroundColor: 'hsla(300, 28.90%, 67.50%, 0.85)',
    margin: 20,
    borderRadius: 16,
  },
  smallText: {
    fontSize: 12,
    color: '#333',
    marginBottom: 8,
  },
  signin: {
    fontSize: 22,
    marginBottom: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  link: {
    color: '#6A0DAD',
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 1,
  },
  subHeading: {
    fontSize: 16,
    color: '#222',
    marginBottom: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 19,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#6A0DAD',
    borderRadius: 20,
    padding: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  
});
