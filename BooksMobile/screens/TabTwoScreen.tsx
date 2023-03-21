import { StyleSheet, FlatList, } from 'react-native';

import { View } from '../components/Themed';

import { useMyBooks } from '../context/MyBooksProvider';
import BookItem from "../components/BookItem";

export default function TabTwoScreen() {
  const { savedBooks } = useMyBooks();
  console.log(savedBooks);

  return (
    <View style={styles.container}>
      <FlatList 
        data={savedBooks}
        renderItem={({ item }) => <BookItem book={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
