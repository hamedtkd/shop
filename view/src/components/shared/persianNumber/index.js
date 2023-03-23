export const persianNumber =(number)=>{
    const persian = new Intl.NumberFormat('fa');
    return persian.format(number)
}

