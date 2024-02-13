import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function Categories() {
    const [data,setData]=useState(null)
    const fetchedData = useLoaderData()

    useEffect(function(){
        setData(fetchedData.meals)
       
    },[])
    console.log(data)
    return (
        <>
            <div>Categories</div>
            {data?.map((item,index)=>
            <p key={index}>{item.strMeal}</p>)}
        </>
    )
}