import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './componenets/Navbar';
import Banner from './componenets/Banner';
import Category from './componenets/Category';
import Card from './componenets/Card';
import Jumbotron from './componenets/Jumbotron';
import Footer from './componenets/Footer';
import { getAllQurban } from './redux/asyncAction/qurban';

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
  ]

  return (
    <div className='max-w-7xl mx-auto space-y-3'>
      <Navbar/>
      <Banner/>
      <Category/>
      <Card title="Populer Products" menu={menus1} />
      <Card left={true} title="Daily Best Sells" menu={menus2} />
      <Card title="Deals Of The Day" menu={menus3} />
      <Jumbotron/>
      <Footer/>
    </div>
  )
}

export default App
