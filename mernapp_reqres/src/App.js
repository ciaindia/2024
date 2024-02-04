// import Sqr from "./components/Sqr";
// import Listing from "./components/Listing";
import Users from "./components/Users";
// import A from "./A";
import Useradd from "./components/Useradd";
import Useredit from "./components/Useredit";
import Home from "./components/Home";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "./components/NoPage";

function App() {
  
  return ( //JSX (javaScript and XML)
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="user-add" element={<Useradd />} />
          <Route path="user-edit" element={<Useredit />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      {/* 
      <Useredit/>
      <Useradd/>
      <Users />
      <A />
      <Listing />
      <Sqr x={5} />
      <Sqr x={6} />
      <Sqr x={7} />
      <h1>Hello World</h1>
      <h1>Hello Bharat</h1>
      <h1>Hello {name}</h1> 
      */}
    </>
  );

}

export default App;
