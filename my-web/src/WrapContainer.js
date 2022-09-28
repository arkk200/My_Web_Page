import WrapPage from "./Pages/WrapPage";
import Header from "./Header";
import Background from "./Background/Background";
import PageGuide from "./PageGuide";
import './WrapContainer.css';

function WrapContainer() { 
  return (
    <div id="wrap-container">
      <Header />
      <Background />
      <WrapPage />
      <PageGuide />
    </div>
  );
}

export default WrapContainer;
