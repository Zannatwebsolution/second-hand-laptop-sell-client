import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    const { data: products = [], refetch } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
          const res = await fetch(`http://localhost:8000/products/${user?.email}`, {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          });
          const data = await res.json();
          return data;
        },
      });
    return (
        <div>
        <h2 className="text-3xl mb-5">My Products</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Sl</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Product Code</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products?.data?.map((product, i) => (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <td><img src={product?.image} alt="" className='w-[75px]' /></td>
                  <td>{product?.product_name}</td>
                  <td>{product?.categoryName}</td>
                  <td>{product?.product_code}</td>
                  <td>{product?.sale_price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyProducts;