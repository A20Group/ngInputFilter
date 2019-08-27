class ngInputFilterAlphabetClass {
    constructor() {
        this.require = 'ngModel',
        this.restrict = 'A'
    }

    link(scope, element, attrs, ngModelCtrl) {
        let type = attrs.ngInputFilterAlphabet || "englishAlphabet";

        if (type == "englishAlphabet") {
            let regex = /^[a-z]*$/i;
            ngModelCtrl.$validators.inputFilterAlphabet = function (value) {
                return regex.test(value);
            };
        }

        if (type == "english") {
            let regex = /^[0-9a-z]*$/i;
            ngModelCtrl.$validators.inputFilterAlphabet = function (value) {
                return regex.test(value);
            };
        }

        if (type == "persianAlphabet") {
            let regex = /^[\u0600-\u06EF\u06FA-\u06FF\s]+$/;
            ngModelCtrl.$validators.inputFilterAlphabet = function (value) {
                return regex.test(value);
            };
        }

        if (type == "persian") {
            let regex = /^[\u0600-\u06FF\s]+$/;
            ngModelCtrl.$validators.inputFilterAlphabet = function (value) {
                return regex.test(value);
            };
        }

        if (type == "persianWithEnglishNumber") {
            let regex = /^[\u0600-\u06FF0-9\s]+$/;
            ngModelCtrl.$validators.inputFilterAlphabet = function (value) {
                return regex.test(value);
            };
        }

        if (type == "persianAndEnglishAlphabet") {
            let regex = /^[\u0600-\u06EF\u06FA-\u06FFa-z\s]+$/;
            ngModelCtrl.$validators.inputFilterAlphabet = function (value) {
                return regex.test(value);
            };
        }
    }
}

const ngInputFilterAlphabet = () => new ngInputFilterAlphabetClass;

export default ngInputFilterAlphabet;

export {
    ngInputFilterAlphabet
}