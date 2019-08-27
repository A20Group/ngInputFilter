
# ngInputFilter

Input Filter library (Number & Alphabet For Persian & English Language) For AngularJS.

### Number Filter : 
Only Allow Numeric Values.


### Alphabet Filter : 
Any Values Are Allowed But Returns Valid/InValid Status And Synced With Ng-Message.


  

## Getting started



[![npm](https://img.shields.io/npm/v/ng-input-filter?style=flat-square)](https://www.npmjs.com/package/ng-input-filter)

To install ngInputFilterNumber use npm
```
npm install ng-input-filter --save
```
### The first way

Inject the `ngInputFilter` to  your angular-application module.

```javascript
import {ngInputFilter} from  "ng-input-filter";
var  app = angular.module('myApp', ['ngInputFilter']);
```
### The second way

inject `ngInputFilterNumber` or `ngInputFilterAlpha` to  your angular-application As a directive.

```javascript
var  app = angular.module('myApp', []);

import {ngInputFilterNumber} from  "ng-input-filter";
ngModule.directive("ngInputFilterNumber", ngInputFilterNumber);

import {ngInputFilterAlpha} from  "ng-input-filter";
ngModule.directive("ngInputFilterAlpha", ngInputFilterAlpha);
```


## Docs
### Number directive

 1. Integer (positive only):
 ```html
<input type="text" ng-model="self.myModel"
ng-input-filter-number="uint">
```

 2. Integer (positive and <= 500):
 ```html
<input type="text" ng-model="self.myModel"
ng-input-filter-number="float" long-int="80">
```

 3. Integer (both positive and negative):
 ```html
<input type="text" ng-model="self.myModel"
ng-input-filter-number="int">
```

 4. Floating point (use . or , as decimal separator):
 ```html
<input type="text" ng-model="self.myModel"
ng-input-filter-number="float">
```

  ### Alphabet directive

 1. English Alphabet:
 ```html
<input type="text" ng-model="self.myModel"
ng-input-filter-alphabet="englishAlphabet">
```

 2. English:
 ```html
<input type="text" ng-model="self.myModel"
ng-input-filter-alphabet="english">
```

 3. Persian Alphabet:
 ```html
<input type="text" ng-model="self.myModel"
ng-input-filter-alphabet="persianAlphabet">
```

 4. Persian:
 ```html
<input type="text" ng-model="self.myModel"
ng-input-filter-alphabet="persian">
```

 5. Persian With English Number:
 ```html
<input type="text" ng-model="self.myModel"
ng-input-filter-alphabet="persianEnglishNumber">
```

When you Want To Handle Error Text Messages With Ng-Messages
 ```html
<div ng-messages="formName.inputName.$error">
<div ng-message="inputFilterAlpha">
	Your Text For Invalid
</div>
</div>
```



## Feedback, Feature requests, and Bugs
All are welcome on the [issue tracker](https://github.com/A20Group/ng-input-filter/issues).