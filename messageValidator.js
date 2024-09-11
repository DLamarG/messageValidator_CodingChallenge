function isAValidMessage(message){
    let nums = message.split(/[\D]/g).filter(x=> x!='')
    let chars = message.split(/[^\D]/g) .filter(x=> x!='').map(x=> x.length)
    if(message===''){return true}
    if(nums.length != chars.length){return false}
    if(/[A-Z]/gi.test(message[0])==true){return false}
    if(/^[a-z0-9]/gi.test(message)===false){return false}
    if(chars.join('')===nums.join('')){return true}
    if(chars.join('')!=nums.join('')){return false}
  }