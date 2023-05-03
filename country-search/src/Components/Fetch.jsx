import axios from "axios";
import { useState,useEffect } from "react";

export const Fetch=(url,params)=>{


  const [loading,setLoading]=useState(false);

  const [err,setError]=useState(false);

  const [data,setData]=useState([]);

  useEffect(()=>{

    setLoading(true);

    axios
      .get(url,{


        params: {

          ...params,

        },
        
      })
      .then(({data})=>{

        setLoading(false);

        setData(data);
      })
      .catch(()=>{

        setLoading(false);

        setError(true);

      });


  }, [params?.q]);

  return {loading,data,err};
};
