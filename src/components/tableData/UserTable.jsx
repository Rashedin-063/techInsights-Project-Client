import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';


import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const UserTable = ({ users, handleMakeAdmin }) => {
  const [sorting, setSorting] = useState([]);

  // Define columns with proper IDs and accessors
  const columns = [
    {
      id: 'serialNumber',
      header: 'Sl. No.',
      cell: ({ row }) => row.index + 1,
    },
    {
      id: 'userName',
      header: 'User Name',
      accessorKey: 'displayName',
    },
    {
      id: 'userEmail',
      header: 'Email',
      accessorKey: 'email',
    },
    {
      id: 'profilePicture',
      header: 'Image',
      cell: ({ row }) => (
        <img
          src={row.original.photoURL}
          alt='Not Avaliable'
          style={{ width: '50px', height: '50px', borderRadius: '50%' }}
        />
      ),
    },
    {
      id: 'makeAdmin',
      header: 'Action',
      cell: ({ row }) => (
        <button
          onClick={handleMakeAdmin}
          style={{
            padding: '5px 10px',
            backgroundColor: '#229799',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Make Admin
        </button>
      ),
    },
  ];


  // Initialize table instance with the actual data
  const table = useReactTable({
    data: users,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div data-aos='fade-up' data-aos-duration='2500'>
      <table className='divide-x-2 divide-y-2 divide-green-lantern mt-12 mx-5 lg:mx-auto rounded-lg  border-r-2 border-r-green-lantern border-b-2 border-b-green-lantern overflow-x-auto'>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className='px-6 py-3 text-left text-sm lg:text-base font-medium uppercase tracking-wider border-2 border-deep-ocean'
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isSorted ? (
                    <span>
                      {header.column.getIsSorted() === 'desc' ? '🔽' : '🔼'}
                    </span>
                  ) : null}
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='divide-y divide-royal-amethyst'>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className='px-6 py-1 whitespace-nowrap text-sm font-medium border-2 border-green-lantern '
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
