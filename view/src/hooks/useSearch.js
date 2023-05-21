import { searchServices } from "@/api/services/search";
import { store } from "@/context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSearch = () => {
    const{setProducts}=useContext(store)
    const navigate = useNavigate()
    let searchName='';
    
    // var searching=null
    const handleSerach = (e) => {
        // e.preventDefault();
        navigate(`/search/${e.target.children[1].children[1].value}`)
        // searchName=e.target.value
        // searchServices({searchName,filter:'', sort:'',price:''}).then((res)=>{
        //     setProducts(res?.data?.data[0]);
        // })
        // searching = setInterval(() => {
  
        // }, 1000)
    }
    const handleStopSerach = () => {
        // clearInterval(searching)
    }
    return {
        handleSerach,
        handleStopSerach
    }
}