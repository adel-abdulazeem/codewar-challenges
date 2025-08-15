//func takes url parsed it out to domain 
// str of url, valid, url could be www or http
// str of domain name
// 
// 
function domainName(url){
    // str then replace https;// with '', then replace wwww with '', then split by delimiter of '.'
    // conditional to determine if if url starts with https or http
    if(url.includes('https')){
      return url.replace('https://', '').replace('www.', '').split('.')[0]
    } else if(url.includes('http')){
      return url.replace('http://', '').replace('www.', '').split('.')[0]
  
    }
    return url.replace('www.','').split('.')[0]
  }
  
  console.log(domainName("http://github.com/carbonfive/raygun"), 'github')
  console.log(domainName('https://www.zombie-bites.com'))
  console.log(domainName("www.xakep.ru"), "xakep")