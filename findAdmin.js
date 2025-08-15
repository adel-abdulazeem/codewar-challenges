//P: arr of obj || []
//R: objects that property GitHubAdmin == yes || []
//E:
//P:
function findAdmin(list, lang) {
    //loop through list arr
    //filter upon conditional of js dev && lang == js
    // condtional in case list is empty arr
    return list.filter(item => item.language == lang && item.githubAdmin == 'yes')
  
  }
  var list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
  ]
  console.log(findAdmin([],'JavaScript'))