"use client"
import { useState, useEffect } from "react"
export default function CoinMarket(){
    const API_KEY = "bb5f5eda5a8f57467437f0dabdaa88f2"
    const [data, setData] = useState<any>(null)
    useEffect(()=>{
        fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
        .then((response)=> response.json())
        .then((jsonConverted)=>{
            console.log("converted data", jsonConverted);
            
            setData(jsonConverted)
        })

    },[])

    
    return(
        <div>
             BTC{data?.rates?.BTC}
        CRC{data?.rates.CRC}
        FCT{data?.rates.FCT}
        MCO{data?.rates.MCO} 
        </div>
        
    )
}

// bb5f5eda5a8f57467437f0dabdaa88f2
 