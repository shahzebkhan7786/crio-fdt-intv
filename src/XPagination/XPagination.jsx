import React, { useState, useEffect } from 'react';
import "./XPagination.css";
import axios from 'axios';

const endpoint = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/memberss.json";

const Pagination = ({ currentPage, itemsPerPage, totalItems, paginate }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToNextPage = () => {
      if (currentPage < totalPages) {
          paginate(currentPage + 1);
      }
  };

  const goToPreviousPage = () => {
      if (currentPage > 1) {
          paginate(currentPage - 1);
      }
  };


return (
      <nav>
          <div className='pagination'>
              <div className='page-item'>
                  <button onClick={goToPreviousPage}  className='page-link'>
                      Previous
                  </button>
              </div>
              {/* Optional: Display Current Page (You can also show total pages if needed) */}
              <div className='page-item'>
                  <div className='page-link'>{currentPage}</div>
              </div>
              <div className='page-item'>
                  <button onClick={goToNextPage}  className='page-link'>
                      Next
                  </button>
              </div>
          </div>
      </nav>
  );
};

const DataTable = ({ currentItems }) => {
    // console.log(currentItems)
  return (
      <table>
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                 
              </tr>
          </thead>
          <tbody>
              {currentItems.map(item => (
                  <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.role}</td>
                  </tr>
              ))}
          </tbody>
      </table>
  );
};


const XPagination = () => {
    const [data, setData] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState()

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async ()=>{
        try{
            const res = await axios.get(endpoint);
            setData(res?.data)
            setCurrentItemsData(res?.data, 1);
            if (res.status !== 200) {
                throw new Error(`${res.status} ${res.statusText}`);
            }
        }catch(error){
            console.log(error.message);
        }
    }

    const paginate = (num)=> {
        setCurrentPage(num);
    }

    const setCurrentItemsData = (allData, pageNo)=>{
        //if curr=1, items: 0-9 => 1-1 * 10
        //if curr=2, items: 10-19 = 2-1 * 10
        //if curr=3, items: 20-29 => 3-1 * 10
        //if curr=4, items: 30-39 => curr-1 * 10
        //if curr=5, items: 40-49
        if(!allData) return;

        let arr = [], start = (pageNo - 1) * 10;

        for(let i = start; i < start+10; i++){
            if(allData[i]) arr.push(allData[i])
        }

        setCurrentItems(arr);
    }

    useEffect(()=>{
        setCurrentItemsData(data, currentPage);
    }, [currentPage])

    return (
        <div className='XPagination'>
            <h1>Employess Table Data</h1>
            {data && <DataTable currentItems={currentItems} />}
            <Pagination currentPage={currentPage} itemsPerPage={10}  totalItems ={data?.length} paginate ={paginate}/>
        </div>
    );
};

export default XPagination;