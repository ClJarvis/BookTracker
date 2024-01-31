import { StyleSheet, FlatList, Text } from 'react-native';

import { View } from '../components/Themed';

import { useMyBooks } from '../context/MyBooksProvider';
import BookItem from "../components/BookItem";
import BooksRead from 'Booksread';

export default function TabTwoScreen() {
  const { savedBooks } = useMyBooks();
  console.log(savedBooks);
/*
const pagesRead = (sum => value => sum += value)(0);
const totalPagesRead = pagesRead; */

/*const pagesRead = savedBooks.reduce((accumulator ,savedBooks) => {
  return accumulator += savedBooks.pagesRead;
}, 0) */

let totalPagesRead = 0;
savedBooks.forEach(savedBooks => {
  totalPagesRead += savedBooks.pages;
})


console.log(totalPagesRead);
console.log(savedBooks[1].pages);

  return (
    <View style={styles.container}>
      <FlatList 
        data={savedBooks}
        renderItem={({ item }) => <BookItem book={item} />}
      />
          <Text style={{fontSize: '1.5rem', background:'rgb(3 169 244 / 60%)', padding: 6,}}> Number of Books Read: {savedBooks.length} <br /> Total Pages Read: {totalPagesRead}</Text> 
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
    text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
