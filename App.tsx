import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex h-full items-center justify-center">
      <Text className="font-bold">Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
