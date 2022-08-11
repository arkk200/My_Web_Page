import WrapPage from "./Pages/WrapPage";
import Header from "./Header";
import Background from "./Background";
import './WrapContainer.css';

function App() {
  return (
    <div id="wrap-container">
      <Header />
      <Background />
      <WrapPage />
    </div>
  );
}

export default App;
