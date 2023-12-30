import React, { useState } from 'react';

const mainTable = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
]



const DataTable = ({ items }) => {
    // console.log(items)
  return (
      <table>
          <thead>
              <tr>
                  <th>Date</th>
                  <th>Views</th>
                  <th>Article</th>
              </tr>
          </thead>
          <tbody>
              {items.map(item => (
                  <tr>
                      <td>{item.date}</td>
                      <td>{item.views}</td>
                      <td>{item.article}</td>
                  </tr>
              ))}
          </tbody>
      </table>
  );
};

const XTable = () => {
    const [sortedData, setSortedData] = useState([...mainTable]);

    const sortByDate = ()=>{
        let data = [...sortedData];
        data.sort((a,b)=> {
            if(a.date !== b.date) return new Date(b.date)- new Date(a.date);
            return b.views-a.views
        });
        setSortedData([...data]);
    }

    const sortByViews = ()=>{
        let data = [...sortedData];
        data.sort((a,b)=> {
            if(a.views !== b.views) return b.views-a.views;
            return new Date(b.date)- new Date(a.date);
        })
        setSortedData([...data]);
    }
    return (
        <div>
            <h1>Date and Views Table</h1>
            <button onClick={sortByDate}>Sort by Date</button>
            <button onClick={sortByViews}>Sort by Views</button>

            <DataTable items={sortedData} />
        </div>
    );
};

export default XTable;