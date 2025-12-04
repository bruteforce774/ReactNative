import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  useColorScheme,
} from 'react-native';
import { fetchWeatherData, getWeatherIconUrl, WeatherData } from '../services/weatherApi';

interface WeatherDisplayProps {
  latitude: number;
  longitude: number;
}

export const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ latitude, longitude }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    loadWeather();
  }, [latitude, longitude]);

  const loadWeather = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchWeatherData(latitude, longitude);
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load weather');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text style={[styles.loadingText, { color: isDarkMode ? '#d1d5db' : '#4b5563' }]}>
          Loading weather data...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (!weather) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.currentWeather}>
        <View style={styles.currentHeader}>
          <Image
            source={{ uri: getWeatherIconUrl(weather.current.weather[0].icon) }}
            style={styles.weatherIcon}
          />
          <View>
            <Text style={styles.temperature}>{Math.round(weather.current.temp)}°C</Text>
            <Text style={styles.description}>
              {weather.current.weather[0].description}
            </Text>
          </View>
        </View>

        <View style={styles.detailsGrid}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Feels like</Text>
            <Text style={styles.detailValue}>{Math.round(weather.current.feels_like)}°C</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Humidity</Text>
            <Text style={styles.detailValue}>{weather.current.humidity}%</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Wind</Text>
            <Text style={styles.detailValue}>{Math.round(weather.current.wind_speed)} m/s</Text>
          </View>
        </View>
      </View>

      <View style={styles.forecastContainer}>
        <Text style={styles.forecastTitle}>7-Day Forecast</Text>
        {weather.daily.slice(0, 7).map((day, index) => {
          const date = new Date(day.dt * 1000);
          const dayName = index === 0 ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'short' });

          return (
            <View key={day.dt} style={styles.forecastItem}>
              <Text style={styles.forecastDay}>{dayName}</Text>
              <Image
                source={{ uri: getWeatherIconUrl(day.weather[0].icon) }}
                style={styles.forecastIcon}
              />
              <Text style={styles.forecastDescription}>{day.weather[0].main}</Text>
              <Text style={styles.forecastTemp}>
                {Math.round(day.temp.max)}° / {Math.round(day.temp.min)}°
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  centerContainer: {
    padding: 40,
    alignItems: 'center',
    gap: 12,
  },
  loadingText: {
    fontSize: 16,
  },
  errorContainer: {
    padding: 20,
    backgroundColor: '#fee2e2',
    borderRadius: 12,
    margin: 20,
  },
  errorText: {
    color: '#dc2626',
    fontSize: 16,
    textAlign: 'center',
  },
  currentWeather: {
    backgroundColor: '#3b82f6',
    borderRadius: 16,
    padding: 24,
    gap: 20,
  },
  currentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  weatherIcon: {
    width: 80,
    height: 80,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'capitalize',
  },
  detailsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.3)',
  },
  detailItem: {
    alignItems: 'center',
  },
  detailLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    marginBottom: 4,
  },
  detailValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  forecastContainer: {
    gap: 12,
  },
  forecastTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  forecastItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    padding: 12,
    borderRadius: 8,
    gap: 12,
  },
  forecastDay: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    width: 60,
  },
  forecastIcon: {
    width: 40,
    height: 40,
  },
  forecastDescription: {
    flex: 1,
    fontSize: 14,
    color: '#6b7280',
  },
  forecastTemp: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
});
