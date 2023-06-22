import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import { createRoot, Root } from 'react-dom/client';

import { App } from './components/App';
import { API_TOKEN, API_BASE_URL } from './config/constants';

const httpLink = new HttpLink({
  uri: API_BASE_URL,
  headers: {
    authorization: `Bearer ${API_TOKEN}`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const container = document.getElementById('root') as HTMLElement;
const root: Root = createRoot(container);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
