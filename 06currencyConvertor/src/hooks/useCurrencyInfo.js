import {useEffect, useState} from "react"


function useCurrencyInfo (currency){
        const [data, setData] = useState({})
        useEffect(()=>{
              fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
              .then((res)=>res.json())
              .then((res)=>{

                  if (res && res[currency]) {
                        setData(res[currency]); // Correctly setting state
                      } else {
                        console.error("Invalid response:", res);
                      }
                    })
                    .catch((error) => console.error("Fetch error:", error)); // Handle API errors
              
                }, [currency]); // dependencies :currency
              
                // Log data when it updates (to avoid stale logging)
                useEffect(() => {
                  console.log("Updated currency data:", data);
                }, [data]);
              
                return data;
              }
              
              export default useCurrencyInfo;