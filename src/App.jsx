import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './componenets/Navbar';
import Banner from './componenets/Banner';
import Category from './componenets/Category';
import Card from './componenets/Card';
import Jumbotron from './componenets/Jumbotron';
import Footer from './componenets/Footer';
import { getAllQurban } from './redux/asyncAction/qurban';
import axios from 'axios';
import { product1, product2 } from './data/product1';

function App() {
  const dispatch = useDispatch();
  const qurbanList = useSelector((state) => state.qurban.list);

  console.log('dapet',qurbanList);

  useEffect(() => {

    dispatch(getAllQurban());

  }, []);

  const menus1 = [
    {
      name: "All",
      link: ""
    },
    {
      name: "Milk & Dairies",
      link: ""
    },
    {
      name: "Cofess & Tea",
      link: ""
    },
    {
      name: "Pet Foods",
      link: ""
    },
    {
      name: "Vegetables",
      link: ""
    },
  ];

  const menus2 = [
    {
      name: "Featured",
      link: ""
    },
    {
      name: "Populer",
      link: ""
    },
    {
      name: "New Added",
      link: ""
    },
  ];

  const menus3 = [
    {
      name: "All Detail",
      link: ""
    },
  ];




  return (
    <div className='max-w-7xl mx-auto space-y-3 px-2 relative'>
      <Navbar/>
      <Banner/>
      <Category/>
      <Card title="Populer Products" menu={menus1} data={product1} />
      <Card left={true} title="Daily Best Sells" menu={menus2} data={product1} />
      <Card title="Deals Of The Day" menu={menus3} data={product2} />
      <Jumbotron/>
      <Footer/>
      {/* <div className='h-[300px] bg-red-300  '>

      </div> */}
    </div>
  )
}

export default App
