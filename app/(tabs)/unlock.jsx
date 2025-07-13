import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, ImageBackground } from 'react-native';
import back from '@/assets/images/background.png';

export default function App() {
  const [otp, setOtp] = useState('');

  const handleUnlock = () => {
    Alert.alert('✅ Unlocked', 'Your data is unmasked!');
  };

  return (
    <ImageBackground source={back} style={styles.background} resizeMode="cover">
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          placeholderTextColor="#666"
          value={otp}
          onChangeText={setOtp}
          keyboardType="number-pad"
        />
        <Button title="Unlock" onPress={handleUnlock} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    padding: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#000',
    backgroundColor: 'white',
  },
});
