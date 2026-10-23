import { View, Text, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 24, gap: 12 }}>
      <TextInput
        placeholder="Correo"
        keyboardType="email-address"
        autoCapitalize="none"
        style={{ backgroundColor: 'white', padding: 12, borderRadius: 8 }}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        style={{ backgroundColor: 'white', padding: 12, borderRadius: 8 }}
      />
      <Button title="Entrar" onPress={() => router.replace('/')} />
    </View>
  );
}