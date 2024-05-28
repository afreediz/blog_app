import React, { useEffect, useState } from 'react';
import API from '../../services/api';
const ProductTable = () => {
//   const products = [
//     { index: 1, name: 'Product A', price: '$10', category: 'Category 1' },
//     { index: 2, name: 'Product B', price: '$20', category: 'Category 2' },
//     { index: 3, name: 'Product C', price: '$30', category: 'Category 3' },
//     // Add more rows as needed
//   ];
  const [products, setProducts] = useState([])
  useEffect(()=>{
    async function getProducts(){
      try{
        const {data} = await API.get(`products/`)
        const res = await API.get(`products/count`)
        console.log(data);
        setProducts(data.products)
      }catch(error){
        console.log(error);
      }
    }
    getProducts()
  },[])
  console.log(products);

  return (
    <div className="">
        <h1>All products</h1>
        <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow-md sm:rounded-lg">
          <table className="min-w-full bg-gray-800 divide-y text-white divide-gray-200 shadow-md rounded-lg overflow-hidden">
            <thead className="">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider">
                  Index
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider">
                  Price
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product, index) => (
                <tr key={index} className="">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{index}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.category.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductTable;