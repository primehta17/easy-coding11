let salaries=[4000,2000];


function calculateAverageSalaryExcludingExtremes(salaries) {
    let max=-Infinity,min=Infinity,sum=0;
    for(let i=0;i<salaries.length;i++){
        sum+=salaries[i];
          max=Math.max(max,salaries[i]);
       
        min=Math.min(min,salaries[i]);
        
    }
  
    let allsum=sum-max-min;
    if(min+max==allsum){
        return 0;
    }
    return allsum/(salaries.length-2);
//    return (sum-max-min)/salaries.length;
}
console.log(calculateAverageSalaryExcludingExtremes(salaries))