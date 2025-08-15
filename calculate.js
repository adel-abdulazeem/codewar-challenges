//P: not empty, str contains num and words of plus and mius
//R: str of num based on the how many nums added , subtracted or both
//E: "1plus2plus3plus4"  --> "10"
//P:
function calculate(str) {
    //split the given str by 'plus' then join by ' '
    //then split by 'minus' then join by ' -' then split by ' '
    //then reduce the resulted arr by summing each 2 nums 
      const num = str.split('plus').join(' ').split('minus').join(' -').split(' ').reduce((acc,c) => acc + Number(c), 0)
      return num
      }
    
      console.log(calculate('1minus2plus3plus4'))