# Daily Grind :smile:

### Tuesday 28/6

### log
1. __Typing:__  a wee 10min sesh
2. __Algorithms int:__ fuck yeah finished this pig one. I had misundestood the task. it needed to handle more than just one consonant at the beginning of the word. chur
``` javascript
function translatePigLatin(str) {
  //find the index of the first vowels
  var re = /([a+e+i+o+u])/i;
  var arr = str.split("");
  var vowel = str.match(re).index;
  // if its at the start just add "way"
  if (vowel === 0) {
    arr.push("way");
    str = arr.join("");
  // if first letter a consonant, grab all the consonants until first vowel and place them at the back with "ay"
  } else {
    var letters = arr.splice(0,vowel);
    arr.push(letters.join('') + "ay");
    str = arr.join('');
  }
  return str;
}
```

## thoughts :cloud:

Talked to monica about england on fb. Was really great. She drove home how hard it can be, new city/money/friends. gona line up ducks before locking away a decision to go there.

all you need to create stats is to send off ajax http requests about certain stats about the user! 
