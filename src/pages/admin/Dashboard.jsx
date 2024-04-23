import React, { useMemo, useState } from 'react'
import { BiSolidUser, BiCart } from "react-icons/bi";
import { BsArrowLeftCircle } from 'react-icons/bs';
import { FiSettings } from "react-icons/fi";
import { Link, Outlet } from 'react-router-dom';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

const Dashboard = () => {
  const [side, setSide] = useState(false);
  const menus = [
    {
      title: 'User',
      link: '',
      icon: '<BiSolidUser/>'
    },
    {
      title: 'Cart',
      link: '',
      icon: '<BiCart/>'
    },
    {
      title: 'Setting',
      link: '',
      icon: '<FiSettings/>'
    },
  ];

  const data = useMemo(() => [
    {
      name: "aldi",
      age: '20'
    },
    {
      name: "aldi2",
      age: '21'
    },
    {
      name: "aldi3",
      age: '22'
    },
  ]);

  const columns = [
    {
      header: 'Name',
      accessorKey: 'name'
    },
    {
      header: 'Age',
      accessorKey: 'age'
    },
  ];

  const table = useReactTable({columns, data, getCoreRowModel : getCoreRowModel()});

  return (
    <div className='flex'>
      <div className={`${side ? 'w-20 ' : 'w-[250px]'} h-screen bg-blue-900 p-3 duration-300`}>
        <div className='pt-3 pb-10 relative'>
          <div className='text-white'>LOGO</div>
          {/* <div className='bg-white w-'> */}
            <BsArrowLeftCircle onClick={() => setSide(!side)} size={30} className={`bg-white rounded-full px-1 absolute -right-7 shadow-sm cursor-pointer ${side ? 'rotate-180' : ''}`} />
          {/* </div> */}
        </div>
        <ul className='space-y-2'>
          {menus.map((item, index) => (
            <Link to="" className={`flex ${side ? 'justify-center' : ''}`}>
              <li key={index} className={` flex items-center gap-2 `}>
                  <BiSolidUser size={30}/>
                  {side ? '' : <span className='text-slate-200'>{item.title}</span>}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='flex-1 h-screen bg-slate-300'>
          {/* <Outlet/> */}
          <div className='p-3'>
          <table>
            <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              
            </tfoot>
          </table>
          </div>
      </div>
    </div>
  )
}

export default Dashboard
