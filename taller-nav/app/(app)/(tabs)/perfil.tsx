import { View, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Perfil() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', gap: 12, padding: 20 }}>
      <Button title="Acerca de" onPress={() => router.push('/acerca')} />
      <Button title="Cerrar sesión" onPress={() => router.replace('/login')} />
    </View>
  );
}