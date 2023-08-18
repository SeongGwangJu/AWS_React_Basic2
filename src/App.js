import { Route, Routes } from "react-router-dom";
import CustomerInputTest from "./pages/CustomerInputTest/CustomerInputTest";
import InputTest from "./pages/InputTest/InputTest";
import Main from "./pages/Main/Main";
import Mypage from "./pages/Mypage/Mypage";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Main />} />
      <Route path="/customerinputtest" element={ <CustomerInputTest />} />
      <Route path="/inputtest" element={ <InputTest />} />
      <Route path="mypage" element={ <Mypage/>}/>
    </Routes>
    </>
  );
}

export default App;
