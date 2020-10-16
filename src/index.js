module.exports = function check(str, bracketsConfig) {
   const brackets = bracketsConfig.join('').replace(/\,/g, ``);
   let stack = [];
   for (let char of str) {
      let bracketsIndex = brackets.indexOf(char);

      if (stack.length > 0 && brackets[bracketsIndex] === brackets[stack[stack.length - 1]]) {
         stack.pop();
         continue;
       }

      if(bracketsIndex % 2 === 0) {
         stack.push(bracketsIndex + 1);
      } else {
         if(stack.pop() !== bracketsIndex) {
            return false;
         }
      }
   }
   return stack.length === 0;
}