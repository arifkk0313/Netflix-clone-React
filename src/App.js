
import React from "react";
import Navbar from "./Components/Nabar/navbar";
import './App.css'
import Banner from "./Components/Banner/banner";
import Rowpost from "./Components/rowpost/rowpost";
import { Originals,Actions,Trending, Comedy, Horror, Romantic } from './urls'
function App() {
  return (
    <div className="App">
    <Navbar />
    <Banner />
    <Rowpost url = {Originals} title = 'Netflix Originals'/>
    <Rowpost url = {Actions} title =  'Actions' isSmall/>
    <Rowpost url = {Trending} title =  'Trending' isSmall/>
    <Rowpost url = {Comedy} title =  'Comedy' />
    <Rowpost url = {Horror} title =  'Horror' isSmall/>
    <Rowpost url = {Romantic} title =  'Romantic' isSmall/>
    </div>
  );
}

export default App;
