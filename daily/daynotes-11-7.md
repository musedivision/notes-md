# Daily Grind :smile:

## Monday 11-7

1.  converted pdf menus to word for shane;
    talked to Prscilla about facebook. Not my problem.

2. finished that recursive arr.reduce() FCC quession
    IT DIDNT EVEN NEED RECURSION
    just had flatten then filter with arr.indexOf()
    ```javascript
    // recursively flattening the argument array
    var recursiveArg = function(arg) {
      return arg.reduce(function callback(a,b, currentIndex,array){
        // didnt need to recurisively flatten anyway FUCK
        return a.concat(b);
      }, []);
    };

    // filter out non uniques
    var array =  recursiveArg(arg).filter(function(value,i){
      // if arr.indexOf() if -1 then keep if less current index then remove
      var  indexTest =  arr.indexOf(value);
      if (indexTest === i | indexTest === -1 ) {
        return true;
      } else if (indexTest < i) {
        return false;
      }
    });
    ```

  3. Typed up all of the menu info for SNAP. toook awhile but hey
      bought the domain snapsocial.co.nz for rudy. Must remember to bill for that when I send my invoice
  4. changed - deleted some old menus on thewhiterabbitonthepark
  
