import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#f3f4f6',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <Text style={[styles.title, {color: isDarkMode ? '#fff' : '#000'}]}>
            🎉 Hello, React Native!
          </Text>
          <Text style={[styles.subtitle, {color: isDarkMode ? '#d1d5db' : '#4b5563'}]}>
            Welcome to your first React Native app
          </Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>✨ You're all set!</Text>
            <Text style={styles.cardText}>
              This is a simple React Native app running on your Android phone.
            </Text>
            <Text style={styles.cardText}>
              Edit App.tsx to change this screen and see live updates.
            </Text>
          </View>
          <View style={[styles.infoBox, {backgroundColor: isDarkMode ? '#374151' : '#e5e7eb'}]}>
            <Text style={[styles.infoText, {color: isDarkMode ? '#d1d5db' : '#374151'}]}>
              💡 Tip: Shake your device to open the developer menu
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
