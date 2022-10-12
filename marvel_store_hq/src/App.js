import GlobalStyle from './globalStyle';
import Header from './components/Header';
import Routers from './Routers';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Routers/>
    </div>
  );
}

export default App;
