var traverseDomAndCollectElements = function(startEl, matchFunc, matchParams) {
  var resultSet = []; // array of queried selectors

  if (typeof startEl == "undefined") {
    startEl = document.body;
  }

  // if matchFunc returns true, push element into resultSet
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }

  var i = startEl.children.length;
  if(i == 0) {
    return resultSet;
  }
  else {
    // TO-KNOW: recursive depth-first search
    while(i--) {
      var child = startEl.children[i];
      var childResultSet = traverseDomAndCollectElements(child, matchFunc);
      resultSet = resultSet.concat(childResultSet);
  }
}
  return resultSet; // array of elements in the document that match the desired selectors
};

var $ = function(selector) {
  var elements; // TO-DO: elements in the DOM to be referenced with selector

  // id match function
  // test with $("#pagetitle")
  if (selector[0] == "#") {
    var idName = selector.slice(1); // remove # and store in var
    var idMatchFunc = function(element) {
      return element.id == idName;  // compare id names
    }
    return traverseDomAndCollectElements(document.body, idMatchFunc);
  }
  else if (selector[0] == ".") {
    // for elements with multiple classes, must use element.classList to get the array of classes attached to the element
    var className = selector.slice(1);
    var classMatchFunc = function(element) {
      var selectorClasses = element.classList;
      for (var i in selectorClasses) {
        return selectorClasses[i] == className;  // compare class names
      }
    }
    return traverseDomAndCollectElements(document.body, classMatchFunc);
  }
  else if (selector[0] == "<") {
    var tagName = selector.slice(1);  // elimnates 1st angle bracket
    tagName = tagName.slice(0,tagName.length-1);  // eliminates 2nd angle bracket for checking

    var tagMatchFunc = function(element) {
      return element == tagName;
    }

  }

  // 1. decide which type of selector this is
  // 2. write match function for that specific selector
  // your code here
  // your code here
  // your code here

  return elements;
};

