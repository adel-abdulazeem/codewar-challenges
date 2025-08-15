function angle(n) {
    //func tht find the total sum ofinternal angles in n sided polygon
    //param is a num, > 2 , n represent the num of sides 
    // return a num which reprsent the sum of total angles
    // conditional statement to determine if n === 3 then it return retun 180 
    // if > 3 it should return 360
    
    //sum of interior angles of a polygon = number of triangles * 180°.
    // num of triangles = n - 2
      return (n-2) * 180
  }