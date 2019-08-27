const ngInputFilter = angular.module('ngInputFilter', []);

import { ngInputFilterNumber } from "./ngInputFilterNumber";
import { ngInputFilterAlphabet } from "./ngInputFilterAlphabet";

ngInputFilter.directive("ngInputFilterNumber", ngInputFilterNumber);
ngInputFilter.directive("ngInputFilterAlphabet", ngInputFilterAlphabet);

export default ngInputFilter;
export {
    ngInputFilter,
    ngInputFilterNumber,
    ngInputFilterAlphabet
};
