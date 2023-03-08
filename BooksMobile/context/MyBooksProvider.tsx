import {createContext, useContext} from 'react';

const MyBooksContext = createContext({});


const MyBooksProvider = ({children}) => {
	return (
		<MyBooksContext.Provider value={{test : "Hello there!"}}>
		{children}
		</MyBooksContext.Provider>
	);
};

export const useMyBooks = () => useContext(MyBooksContext);

export default MyBooksProvider;