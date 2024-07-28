import { useEffect, useState } from "react"

//costume hooks..

const useFetch=(url)=>{

  const [data,setData]=useState([]);

  useEffect(()=>{

    fetch(url).then((res)=>{
      res.json().then((result)=>{
        //since the url provided has data as objects of objects to access data we must use result.products
        setData(result.products);
      })
    
    }).catch((err)=>{
      console.log(err);
    })

  }
  ,[])

  return data ;

}

export default useFetch