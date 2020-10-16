module.exports = function check(str, bracketsConfig) {
   const brackets = bracketsConfig.join('');
   let stack = [];
   for (let char of str) {
      let bracketsIndex = brackets.indexOf(char);
      if(bracketsIndex % 2 === 0) {
         stack.push(bracketsIndex + 1);
      } else {
         if(stack.pop() !== bracketsIndex) {
            return false;
         }
      }
   }
   return  stack.length === 0;
}