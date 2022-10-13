import GlobalStyle from './globalStyle';
import Header from './components/Header';
import ControlRotas from './routers/Routes'

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <ControlRotas/>
    </div>
  );
}

export default App;
