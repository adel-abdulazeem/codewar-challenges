//P: arr of intg nums
//R: arr without duplicated el
//E:
//P:

function findDup( arr ){
    //valid or not upon condition of there's no missing num in bt
    //if true return the duplicated val if not return 
       return Number(arr.sort((a,b) => a- b).filter((x,i) => i !== arr.lastIndexOf(x)).join(''))
    
    }
    console.log(findDup([1,3,2,5,4,5,7,6]))
    
    console.log('cda'.split('').sort())