import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

const API_BASE = 'http://192.168.0.104:3001/api';

const PlaceOrderScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const placeOrder = async () => {
    try {
      const res = await fetch(`${API_BASE}/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, address }),
      });

      const data = await res.json();
      if (res.ok) {
        Alert.alert('Order Placed!', `Order ID: ${data.orderId}`);
        navigation.navigate('UnlockScreen', { orderId: data.orderId });
      } else {
        Alert.alert('Error', data.message || 'Could not place order');
      }
    } catch (e) {
      console.error(e);
      Alert.alert('Error', 'Failed to place order');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Place a Mock Order</Text>
      <TextInput placeholder="Name" onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Phone" onChangeText={setPhone} keyboardType="phone-pad" style={styles.input} />
      <TextInput placeholder="Address" onChangeText={setAddress} style={styles.input} />
      <Button title="Place Order" onPress={placeOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  header: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
});

export default PlaceOrderScreen;
