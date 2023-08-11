import { useState ,useEffect} from 'react';
import React from 'react'
import axios from 'axios'


function Viewcomponent() {
let mydata = [{"_id":"64d36d5bcaf94f86e175cbc3","productname":"phone","description":"ipone 14","price":95000,"productimage":"https://buro.re/wp-content/uploads/2021/04/SMIPHXRECSG.jpeg","__v":0},{"_id":"64d36e77caf94f86e175cbc6","productname":"bottel","description":"waterbottel","price":150,"productimage":"https://hotlinemedia.blob.core.windows.net/product-imagery/a2531/printed/500px_100/a2531-400ml-aluminium-sports-bottle-with-carabiner-navyblue1.jpg","__v":0},{"_id":"64d36fe9caf94f86e175cbca","productname":"cosmetics","description":"makeup products","price":5000,"productimage":"https://img.freepik.com/free-photo/close-up-collection-make-up-beauty-products_23-2148620012.jpg","__v":0},{"_id":"64d3709acaf94f86e175cbcd","productname":"food","description":" pizza","price":200,"productimage":"https://i.ebayimg.com/images/g/5dYAAOSwep5kWhNS/s-l1600.jpg","__v":0},{"_id":"64d37177caf94f86e175cbd0","productname":"perfume","description":" wend","price":1500,"productimage":"https://i.ebayimg.com/images/g/8zUAAOSwVKhkMfUn/s-l500.png","__v":0}]
    const [data,setData] = useState(mydata);

    // useEffect(() =>{
    // async function fetchData (){
    //  try{
    //   const response = await axios.get("http://localhost:3001/allproducts");
    //   const prdtData = response.data;
    //   setData(prdtData); 
    //  }
    // catch(err){
    //  console.log("Error fetching data: ",err);
    // }
    
    // }
    // fetchData();
    // },[]);
      return (
        <div>
          <div className='prdt-main'>
            <div>
            
              {data.map((item)=>(
             <p key={item.id}>
              <img src={item.productimage}></img>
              <a>Product Type: {item.productname}</a><br/>
              <a>Product Description: {item.description}</a><br/>
              <a>Price(INR): {item.price}</a><br/>
              </p>
              )) }
            
            </div>
    
          </div>
    
        </div>
      )
    }

    


  


export default Viewcomponent;