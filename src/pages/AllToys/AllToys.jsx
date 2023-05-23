import React, { useContext } from "react";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../providers/AuthProviders";

const AllToys = () => {
  /* ---------Dynamic Title----------- */
  useTitle("All Toys");
  const {user} = useContext(AuthContext)
  return (
    <div>
      <h2 className="text-4xl text-center mt-10 mb-5 font-bold">All Toys</h2>

      <div className="overflow-x-auto w-full px-5">
        <table className="table w-full">
          {/* head */}
          <thead className="font-bold">
            <tr className="">
             
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Price</th>
              <th>Sub-category</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>

              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24">
                      <img
                        src={user?.photoURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel
                
              </td>
              <td>$100</td>
              <td>Ranga Putul</td>
              <td>35</td>
              <th>
                <button className="btn btn-secondary font-bold btn-xs text-white">View details</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
             
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24">
                      <img
                        src={user?.photoURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                
              </td>
              <td>$100</td>
              <td>Ranga Putul</td>
              <td>35</td>
              <th>
                <button className="btn btn-secondary font-bold btn-xs text-white">View details</button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
             
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24">
                      <img
                        src={user?.photoURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
               
              </td>
              <td>$100</td>
              <td>Ranga Putul</td>
              <td>35</td>
              <th>
                <button className="btn btn-secondary font-bold btn-xs text-white">View details</button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
            
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24">
                      <img
                        src={user?.photoURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                  
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                
              </td>
              <td>$100</td>
              <td>Ranga Putul</td>
              <td>35</td>
              <th>
                <button className="btn btn-secondary font-bold btn-xs text-white">View details</button>
              </th>
            </tr>
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default AllToys;
