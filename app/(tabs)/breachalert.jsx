import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { getBreachAlerts } from '@/services/api.js'; // ✅ import service
import back from '@/assets/images/background.png';
import { ImageBackground } from 'react-native';

const BreachAlertScreen = ({ route }) => {
  const userId = route?.params?.userId || 'user123';
  const [loading, setLoading] = useState(true);
  const [breachData, setBreachData] = useState(null);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const data = await getBreachAlerts(userId);
        setBreachData(data);
      } catch (error) {
        console.error('Failed to fetch breach alerts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  return (
    <ImageBackground source={back} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.header}> Breach Alerts</Text>

        {breachData?.breached ? (
          <>
            <Text style={styles.warning}> Data Leak Detected!</Text>
            <FlatList
              data={breachData.details}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.alertBox}>
                  <Text style={styles.alertText}>Field: {item.field}</Text>
                  <Text style={styles.alertText}>Leaked on: {item.leakedOn}</Text>
                  <Text style={styles.alertText}>Masked Value: {item.value}</Text>
                </View>
              )}
            />
          </>
        ) : (
          <Text style={styles.safe}> Your data is safe.</Text>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  warning: {
    color: 'orange',
    fontSize: 18,
    marginBottom: 10,
  },
  safe: {
    color: 'white',
    fontSize: 18,
  },
  alertBox: {
    backgroundColor: '#fff2e6',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  alertText: {
    fontSize: 16,
    color: '#000',
  },
});

export default BreachAlertScreen;
