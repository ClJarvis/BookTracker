import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

const API_KEY = 'neueneustadt::stepzen.net+1000::739ac5baadd9780ac6f613b44ad1599fbf840b38143f9c966f6efd96acbe6685';

const client = new ApolloClient({
  uri: "<https://neueneustadt.stepzen.net/api/plundering-dragonfly/__graphql>",
  headers: {
    Authorization: `Apikey ${API_KEY}`, 
  },
  cache: new InMemoryCache(),
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ApolloProvider client={client}>
          <Navigation colorScheme={colorScheme} />
        </ApolloProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
