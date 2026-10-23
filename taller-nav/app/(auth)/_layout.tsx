import { Slot } from 'expo-router';
import { View, Text } from 'react-native';

export default function AuthLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: '#dbeafe', paddingTop: 60 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center' }}>
        Biblioteca
      </Text>
      <Slot />
    </View>
  );
}