import { Ionicons as Icon } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const BUTTON_SIZE = width / 2.5; // larger buttons
const ICON_SIZE = BUTTON_SIZE / 2; // icon scales with button

const buttons = [
  { name: 'ios-water', label: 'Soil Monitoring', color1: '#4CAF50', color2: '#81C784' },
  { name: 'ios-stats-chart', label: 'Soil Health Estimation', color1: '#2196F3', color2: '#64B5F6' },
  { name: 'ios-chatbubble', label: 'Farmer Query Assistant', color1: '#FF9800', color2: '#FFB74D' },
  { name: 'ios-bug', label: 'Pest Detection', color1: '#f44336', color2: '#E57373' },
  { name: 'ios-leaf', label: 'Weed Detection', color1: '#8BC34A', color2: '#AED581' },
];

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('./assets/icon.png')}
      style={styles.background}
      resizeMode="repeat"
    >
      <ScrollView contentContainerStyle={styles.container}>
        {buttons.map((btn, index) => (
          <Animatable.View
            key={index}
            animation="bounceIn"
            delay={index * 200}
            style={styles.animatable}
          >
            <TouchableOpacity activeOpacity={0.8}>
              <LinearGradient
                colors={[btn.color1, btn.color2]}
                style={[styles.button, { width: BUTTON_SIZE, height: BUTTON_SIZE }]}
              >
                <Icon name={btn.name} size={ICON_SIZE} color="#fff" />
                <Text style={styles.text}>{btn.label}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animatable.View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  animatable: {
    margin: 10,
  },
  button: {
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    elevation: 5,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default HomeScreen;
