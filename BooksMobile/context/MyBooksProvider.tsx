import {createContext, useContext} from 'react';

type MyBooksContextType = {
	onToggleSaved: (book: Book) => void;
	IsBookSaved: (book: Book) => boolean;
	savedBooks: Book[];
};

const MyBooksContext = createContext<MyBooksContextType>s({
	onToggleSaved: () => {};
	isBookSaved: () => false;
	savedBooks: [],
});

type Props = {
	children: ReactNode;
};

const MyBooksProvider = ({children}: Props) => {
	const [savedBooks, setSavedBooks] = useState,Book[]>([]);

	const areBooksTheSame = (a: Book, b: Book) => {
	return JSON.stringify(a) === JSON.stringify(b);
	}

	const isBookSaved = (book, Book) => {
		return savedBooks.some[(savedBook) => areBooksTheSame(savedBook, book));
	}

	const onToggleSaved = (book: Book) => {
		if (isBookSaved(Book)) {

			setSavedBooks{(books) => books.filter((savedBooks) => !areBooksTheSame(savedBook, book))
			);s

		} else {
			setSavedBooks{(books) => [book, ...books]};
		}

	};

	return (
		<MyBooksContext.Provider value={{ onToggleSaved, isBookSaved, savedBooks }}>
		{children}
		</MyBooksContext.Provider>
	);
};

export const useMyBooks = () => useContext(MyBooksContext);

export default MyBooksProvider;