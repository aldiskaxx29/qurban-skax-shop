import axios from 'axios';
import React, { useState } from 'react'

const Jumbotron = () => {
  const [email, setEmail] = useState([]);
  const api = 'https://sheet.best/api/sheets/333d533d-6f13-4c88-a26e-67107532d5f2';

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Email: email
    }

    console.log('data', data);

    axios.post(`${api}`, data).then((response) => {
      console.log('berhasil', response);
    })

    setEmail('');
  }

  const handleChange = (e) => {
    setEmail(e.target.value);
  }

  const array = [
    {
      name: "satu",
      list:[
        "satu 1",
        "satu 2"
      ],
    },
    {
      name: "dua",
      list:[
        "dua 1",
        "dua 2"
      ],
    },
    {
      name: "tiga",
      list:[
        "tiga 1",
        "tiga 2"
      ], 
    },
  ];

  const [change, setChange] = useState([]);

  const change1 = (e) => {
    console.log('tes', e.target.value);
    setChange(e.target.value);
    console.log('tes1', change?.split(','));
  }

  
  return (
    <div className='bg-green-200 rounded-md h-[400px] items-center flex'>
      <div className='md:pl-16 px-3 space-y-2'>
        <p className='text-4xl'>Stay home & get your daily <br/> needs from our shop</p>
        <span>Start You'r Daily Shopping with Nest Mart</span>
        <div className='flex flex-row'>
          <form action="" onSubmit={handleSubmit}>
            <input type="email" name='email' value={email} onChange={handleChange} className='p-3 rounded-l-md outline-green-300 w-[200px]' placeholder='Enter' />
            {/* <br />
            <select name="change1" id="" onChange={change1}>
              {array.map((item) => (
                <option value={item.list}>{item.name}</option>
              ))}
            </select>
            <br />
            {change?.length < 0 ? '' : 
            <select name="change2" id="">
                {change?.map((items) => (
                  <option value={items}>{items}</option>
                  ))}
            </select>
                } */}
            <button type='submit' className='p-3 rounded-r-md bg-green-500 text-white focus:outline-none'>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
