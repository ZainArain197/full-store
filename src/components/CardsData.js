let CardsData = [{
    id: 1,
    name: "Dolce & Gabbana-Black-Sorrento-Sneakers",
    imgdata: "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222003F128012_4/dolce-and-gabbana-black-sorrento-sneakers.jpg",
    Disription: " a shoe with a rubber sole that is designed for people to wear while running, playing sports, etc.",
    somedata: " 1175 + order placed from here recently",
    price: 500,
    rating: "4.9",
    qnty: 0,
    size: 44
}
    ,
{
    id: 2,
    name: "Dolce & Gabbana-Pink-Portofino-Sneakers",
    imgdata: "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222003F128019_1/dolce-and-gabbana-pink-portofino-sneakers.jpg",
    Disription: " a shoe with a rubber sole that is designed for people to wear while running, playing sports, etc.",
    somedata: " 2525 + order placed from here recently",
    price: 25,
    rating: "3.9",
    qnty: 0,
    size:44
},
// {
//     id: 3,
//     name: "Dolce & Gabbana-white and Black-Airmaster-Sneakers",
//     imgdata: "https://img.ssensemedia.com/images/f_auto,q_auto:best/221003F128024_1/dolce-and-gabbana-white-and-black-airmaster-sneakers.jpg",
//     Disription: " a shoe with a rubber sole that is designed for people to wear while running, playing sports, etc.",
//     somedata: " 650 + order placed from here recently",
//     price: 70,
//     rating: "4.2",
//     qnty: 0,
//     size: 44
// },
{
    id: 4,
    name: "Dolce & Gabbana-white and Black-Airmaster-Sneakers",
    imgdata: "https://img.ssensemedia.com/images/f_auto,q_auto:best/221003F128024_4/dolce-and-gabbana-white-and-black-airmaster-sneakers.jpg",
    Disription: " a shoe with a rubber sole that is designed for people to wear while running, playing sports, etc.",
    somedata: " 300 + order placed from here recently",
    price: 70,
    rating: "3.8",
    qnty: 0,
    size: 44
},
// {
//     id: 5,
//     name: "Dolce & Gabbana MOSCHINO-Black-Teddy-Sock-Sneakers",
//     imgdata: "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222720F127002_4/moschino-black-teddy-sock-sneakers.jpg",
//     Disription: " a shoe with a rubber sole that is designed for people to wear while running, playing sports, etc.",
//     somedata: "1050 + order placed from here recently",
//     price: 210,
//     rating: "4.0",
//     qnty: 0,
//     size: 44
// },
// {
//     id: 6,
//     name: "Dolce & Gabbana Pink-Sorrento-Sneakers",
//     imgdata: "https://img.ssensemedia.com/images/f_auto,q_auto:best/222003F128004_1/dolce-and-gabbana-pink-sorrento-sneakers.jpg",
//     Disription: " a shoe with a rubber sole that is designed for people to wear while running, playing sports, etc.",
//     somedata: " 1100 + order placed from here recently",
//     price: 100,
//     rating: "3.8",
//     qnty: 0,
//     size: 44
// },
{
    id: 7,
    name: "Dolce & Gabbana Pink-Daymaster-Sneakers",
    imgdata: "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222003F128003_1/dolce-and-gabbana-pink-daymaster-sneakers.jpg",
    Disription: " a shoe with a rubber sole that is designed for people to wear while running, playing sports, etc.",
    somedata: "500 + order placed from here recently",
    price: 300,
    rating: "3.8",
    qnty: 0,
    size: 44
},
{
    id: 8,
    name: "Dolce & Gabbana White and Black-Daymaster-Sneakers",
    imgdata: "https://img.ssensemedia.com/images/f_auto,q_auto:best/221003F128009_1/dolce-and-gabbana-white-and-black-daymaster-sneakers.jpg",
    Disription: " a shoe with a rubber sole that is designed for people to wear while running, playing sports, etc.",
    somedata: "500 + order placed from here recently",
    price: 100,
    rating: "3.2",
    qnty: 0,
    size: 44
},
{
    id: 9,
    name: "Dolce & Gabbana-Black-Portofino-Sneakers",
    imgdata: "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/221003F128001_1/dolce-and-gabbana-black-portofino-sneakers.jpg",
    Disription: " a shoe with a rubber sole that is designed for people to wear while running, playing sports, etc.",
    somedata: "2525 + order placed from here recently",
    price: 100,
    rating: "3.8",
    qnty: 0,
    size: 44
},
];

export default CardsData;


{/* <section className='container mt-3'>
<div className="iteamsdetails">

  {
    data.map((detailData, id) => {
      return (
        <>
          <div className="items_img">
            <img src={detailData.imgdata} alt="" />
          </div>

          <div className="details">
            <Table>
              <tr>
                <td> <p > <strong>Product Name</strong>  : {detailData.name}</p>
                  <p> <strong>Price</strong>  : $ {detailData.price}</p>
                  <p> <strong>Discription</strong>  : {detailData.Disription}</p>
                  <p> <strong>Total</strong>  : $ {detailData.price * detailData.qnty}</p>

                  <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                    <span style={{ fontSize: 24 }} onClick={detailData.qnty <= 1 ? () => dlt(detailData.id) : () => remove(detailData)} >-</span>
                    <span style={{ fontSize: 22 }}>{detailData.qnty}</span>
                    <span style={{ fontSize: 24 }} onClick={() => send(detailData)} >+</span>

                  </div>

                </td>



                <td>
                  <p> <strong>Rating</strong>  : <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}> {detailData.rating} </span></p>
                  <p><strong>Size : </strong> <span > {detailData.size}	</span></p>
                  <p><strong>Remove : </strong> <span ><i className='fas fa-trash' onClick={() => dlt(detailData.id)} style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i>	</span></p>

                </td>



              </tr>
              <button className="btnn" onClick={() => dlt(detailData.id)} >Check Out</button>
            </Table>
          </div>
        </>
      )
    })
  }


</div>
</section> */}