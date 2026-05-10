import { useEffect, useState } from "react";
import '../about/About.css'

function About(){
const liveurl = "https://category-api-p3zg.onrender.com";


const [product , setproduct] = useState([]);
const [loading,setloading] = useState(true);

useEffect(()=>{
    fetch(liveurl+"/products")
    .then(res => res.json())
    .then(data => {setproduct(data.data);
        setloading(false)})
    
    .catch(err =>{ console.log(err);
        setloading(false)
    })
    ,[]})
    
    // console.log(product);

    if(loading){
        return <h1 className="loadheading">...loading products </h1>
    }
    return(
        <>
        <h1 className="productheading"> Our Products</h1>
         <div className="cardcontainer">
            
            

      {product.map((item) => (
        <div key={item._id}>
          <img src={item.image.url} />
          <h1>{item.name}</h1>
          <h2>₹{item.price}</h2>
        </div>
      ))}

    </div>
        
        </>
    )
}

export default About