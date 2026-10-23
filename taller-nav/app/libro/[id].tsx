import { View, Text } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { LIBROS } from '@/data/libros';

export default function Detalle() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const libro = LIBROS.find((l) => l.id === id);

  if (!libro) {
    return (
      <View style={{ padding: 20 }}>
        <Stack.Screen options={{ title: 'Detalle' }} />
        <Text>Libro no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Stack.Screen options={{ title: libro.titulo }} />
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{libro.titulo}</Text>
      <Text>{libro.autor}</Text>
      <Text>{libro.anio}</Text>
    </View>
  );
}