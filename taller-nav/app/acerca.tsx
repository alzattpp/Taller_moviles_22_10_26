import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Acerca() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Biblioteca v1.0</Text>
      <Button title="Cerrar" onPress={() => router.back()} />
    </View>
  );
}