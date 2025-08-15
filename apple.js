//Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

//function that takes an arguement and return a string
//P: +intg/ string for untyped lang
//R: string
//E: 
//P: 
function apple(x){
    //square the argument using Math.pow()
    //conditional to control which should be returned 
    return Math.pow(x,2) > 1000 ? `It's hotter than the sun!!` : 'Help yourself to a honeycomb Yorkie for the glovebox.'
    }

    apple(10)
    apple(200)