function yearsAgo(year){
    console.log(year)
    
  const date = new Date();
    // console.log(date.getFullYear()-year);
    
    return date.getFullYear()-year;
  }
  export default yearsAgo;