class ngInputFilterNumberClass {
    constructor() {
        this.require = 'ngModel',
        this.restrict = 'A'
    }

    link(scope, element, attrs, ngModelCtrl) {
        let setInputFilter = function (textbox, inputFilter) {
            ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
                textbox.addEventListener(event, function () {
                    let result = inputFilter(this.value);
                    if (result) {
                        this.oldValue = this.value;
                        this.oldSelectionStart = this.selectionStart;
                        this.oldSelectionEnd = this.selectionEnd;
                        ngModelCtrl.$setViewValue(this.oldValue);
                    } else if (this.hasOwnProperty("oldValue")) {
                        this.value = this.oldValue;
                        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                        ngModelCtrl.$setViewValue(this.value);
                    }
                    // ngModelCtrl.$validators.inputFilterNumber = function () {
                    //     return result;
                    // };
                });
            });
        }

        let type = attrs.ngInputFilterNumber || "uint";


        if (type == "uint") {
            setInputFilter(element[0], function (value) {
                return /^\d*$/.test(value);
            }, ngModelCtrl);
        }

        if (type == "longInt") {
            if (!attrs.longInt) {
                throw new Error(
                    "ngInputFilterNumber longInt type need to longInt attribute."
                );
            }
            else {
                setInputFilter(element[0], function (value) {
                    return /^\d*$/.test(value) && (value === "" || parseInt(value) <= attrs.longInt);
                }, ngModelCtrl);
            }
        }

        if (type == "int") {
            setInputFilter(element[0], function (value) {
                return /^-?\d*$/.test(value);
            }, ngModelCtrl);
        }

        if (type == "float") {
            setInputFilter(element[0], function (value) {
                return /^-?\d*[.,]?\d*$/.test(value);
            }, ngModelCtrl);
        }
    }
}

const ngInputFilterNumber = () => new ngInputFilterNumberClass;

export default ngInputFilterNumber;

export {
    ngInputFilterNumber
}