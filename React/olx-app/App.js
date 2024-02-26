import Router from './config/router';
import './App.css';
import './detailPageCSS.css';
import { store, persistor } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  return (
    <>

<Provider store={store}>
<PersistGate loading={null} persistor={persistor}>
    <Router />
    </PersistGate>
</Provider>
  
    </>
  );
}

export default App;
