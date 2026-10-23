import { FlatList, Pressable, Text } from 'react-native';
import { Link } from 'expo-router';
import { LIBROS } from '@/data/libros';

export default function Inicio() {
  return (
    <FlatList
      data={LIBROS}
      keyExtractor={(l) => l.id}
      renderItem={({ item }) => (
        <Link href={`/libro/${item.id}`} asChild>
          <Pressable style={{ padding: 16, borderBottomWidth: 1, borderColor: '#ddd' }}>
            <Text style={{ fontSize: 18 }}>{item.titulo}</Text>
            <Text>{item.autor}</Text>
          </Pressable>
        </Link>
      )}
    />
  );
}