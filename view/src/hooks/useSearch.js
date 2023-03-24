import { searchServices } from "@/api/services/search";

export const useSearch = () => {
    var searching=null
    const handleSerach = (e) => {
        e.preventDefault();
        searching = setInterval(() => {
            searchServices(e.target.value).then((res)=>{
                console.log(res?.data);
            })
  
        }, 1000)
    }
    const handleStopSerach = () => {
        clearInterval(searching)
    }
    return {
        handleSerach,
        handleStopSerach
    }
}