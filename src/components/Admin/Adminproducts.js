import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Adminproducts = () => {

  let [data, setData] = useState([])
  useEffect(() => {
    axios.get("/data_lao").then((abc) => {
      setData(abc.data)
    })
  }, [])

  // console.log(data);



  return (
    <>
      <div style={{marginTop:"10px"}}>
        <table  >
          <tr className='tabletd' >
            <td>Picture</td>
            <td>Name</td>
            <td>Price</td>
            <td>Available Stock</td>
            <td>Discription</td>
            <td>Delete</td>
            <td>Edit</td>
          </tr>

          {
            data.map((product, index) => {
              return <>
                <tr className='tabletd'>
                  <td><img src={product.imgdata} style={{ height: "60px", marginTop: "10px" }} /></td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.discription}</td>
                  <td><button style={{ color: "black" }} onClick={async () => {

                    let resp = await axios.delete('/user-delete-karo?someID=' + product._id);
                    if(resp.data.success){
                      data.splice(index,1)
                      setData([...data])
                      console.log("serggdrg");
                    }
                  }
                  }> Delete</button></td>
                  <td><Link to={'/AddProducts/'+product._id}><button style={{ color: "black" }} >Edit</button></Link></td>

                </tr>
              </>
            })
          }
        </table>
      </div>
    </>
  )
}

export default Adminproducts
