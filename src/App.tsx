import './App.css';
import { Header } from './components/header/Header';
import { CityList } from './components/CityList/CityList';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient()
  return (
    <div className="App">
     <QueryClientProvider client={queryClient}>
        <Header/>
        <CityList/>
     </QueryClientProvider>
    </div>
  );
}

export default App;
