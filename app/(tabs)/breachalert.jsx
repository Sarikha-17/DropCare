import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, ImageBackground } from 'react-native';
import back from '@/assets/images/background.png'; 

const BreachAlertsScreen = ({ route }) => {
  const userId = route?.params?.userId || 'user123';
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://your-backend-url.com/api/breaches/${userId}`)
      .then(res => res.json())
      .then(data => {
        setLogs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator style={{ marginTop: 100 }} size="large" color="#000" />;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={back} style={styles.image} resizeMode='cover'>
        <Text style={styles.title}>Breach Alerts</Text>
        <FlatList
          data={logs}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.alertBox}>
              <Text style={styles.message}>{item.message}</Text>
              <Text style={styles.time}>{new Date(item.timestamp).toLocaleString()}</Text>
            </View>
          )}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000'
  },
  alertBox: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#e74c3c',
    backgroundColor: '#fdecea',
    marginBottom: 10,
    borderRadius: 8
  },
  message: {
    color: '#c0392b',
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    height: '100%',
  },
  time: {
    marginTop: 5,
    color: '#555'
  }
});

export default BreachAlertsScreen;
