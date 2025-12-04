import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { WeatherDisplay } from './components/WeatherDisplay';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#f3f4f6',
    flex: 1,
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar style={isDarkMode ? 'light' : 'dark'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View style={styles.container}>
            <Text style={[styles.title, {color: isDarkMode ? '#fff' : '#000'}]}>
              Weather App
            </Text>
            <Text style={[styles.subtitle, {color: isDarkMode ? '#d1d5db' : '#4b5563'}]}>
              Current weather and forecast
            </Text>

            <WeatherDisplay latitude={59.9100} longitude={10.7600} />

            <View style={[styles.infoBox, {backgroundColor: isDarkMode ? '#374151' : '#e5e7eb'}]}>
              <Text style={[styles.infoText, {color: isDarkMode ? '#d1d5db' : '#374151'}]}>
                Currently showing weather for Oslo.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 32,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
    lineHeight: 24,
  },
  infoBox: {
    borderRadius: 8,
    padding: 16,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default App;
