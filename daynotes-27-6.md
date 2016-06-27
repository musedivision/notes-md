# Daily Grind :smile:

### Monday 27/6

### log
1. __Planning study:__ worked out minimum pomos for each area of the current study pie.  
2. __Algorithims-int:__ _Where art thou_ Trying to conceive of a very dry and flexible algo.
  - can complete if its just testing two properties but this doesnt scale
  - using `arr.filter()` to return an arr of only the objects which contain property value matches
  - having trouble managing two property values to check!
  ```javascript
  var filterColl = collection.filter(function(name) {
    // testing that all the values are equal
    for(var value of Object.keys(source)) {
      console.log(value);
      if (name[value] != source[value]){
        console.log(name[value],source[value] );
        return false;
      }
    return true;
    }
  });
  ```
- __duolinguo:__ german and spanish
- __Porfolio:__ creating a jekyll workflow for a portfolio page.
  - just need to remember how to jekyll and node. its been so long
  - serve the site using jekyll commands.  
  ``` shell
  jekyll serve
  ```
  - need to setup a gulp workflow for the Porfolio


## thoughts :cloud:
