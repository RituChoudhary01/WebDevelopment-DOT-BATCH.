import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import "./App.css"
export default function App(){
  const {fetchBlogPosts} = useContext(AppContext);
  useEffect(()=>{
    fetchBlogPosts();
  },[]);

  return(
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
      <Header/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

