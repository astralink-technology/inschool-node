'use strict';

angular.module('inSchoolApp.validationServices', []).
    factory('validationServices', function () {
    return {
        validateRequiredField: function (value, requiredMessage) {
            if (value){
                return false; //returns false
            }else{
                if (requiredMessage){
                    return requiredMessage;
                }else{
                    return "Required";
                }
            }
        },
        validateEmail: function (value, required, requiredMessage, invalidEmailMessage){
            //validate if its required first
            if (required){
                if (value){
                    //validate the email next
                    var checkEmailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (checkEmailRegex.test(value)){
                        return false;
                    }else{
                        if (invalidEmailMessage){
                            return invalidEmailMessage;
                        }else{
                            return "Invalid Email";
                        }
                    }
                }else{
                    if (requiredMessage){
                        return requiredMessage;
                    }else{
                        return "Required";
                    }
                }
            }else{
                if (value){
                    //validate the email next
                    var checkEmailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (checkEmailRegex.test(value)){
                        return false;
                    }else{
                        if (invalidEmailMessage){
                            return invalidEmailMessage;
                        }else{
                            return "Invalid Email";
                        }
                    }
                }else{
                        return "Unable to validate Email";
                }
            }
        },
        validateAlphaNumeric : function (value, required, requiredMessage, invalidAlphaNumericMessage){

            //validate if its required first
            if (required){
                if (value){
                    //validate the text next
                    var checkAlphaNumeric =  /^[a-z0-9]+$/i;
                    if (checkAlphaNumeric.test(value)){
                        return false;
                    }else{
                        if (invalidAlphaNumericMessage){
                            return invalidAlphaNumericMessage;
                        }else{
                            return "Alphanumeric. Must not contain other characters";
                        }
                    }
                }else{
                    if (requiredMessage){
                        return requiredMessage;
                    }else{
                        return "Required";
                    }
                }
            }else{
                if (value){
                    //validate the text next
                    var checkAlphaNumeric =  /^[a-z0-9]+$/i;
                    if (checkAlphaNumeric.test(value)){
                        return false;
                    }else{
                        if (invalidAlphaNumericMessage){
                            return invalidAlphaNumericMessage;
                        }else{
                            return "Invalid";
                        }
                    }
                }else{
                    return "Alphanumeric. Must not contain other characters";
                }
            }
        },
        validateRequiredInteger : function (value, required, requiredMessage, invalidIntegerMessage){
            //validate if its required first
            if (required){
                if (value){
                    if ($.isNumeric(value)){
                        return false;
                    }else{
                        if (invalidIntegerMessage){
                            return invalidIntegerMessage;
                        }else{
                            return "Not a number";
                        }
                    }
                }else{
                    if (requiredMessage){
                        return requiredMessage;
                    }else{
                        return "Required";
                    }
                }
            }else{
                if (value){
                    if ($.isNumeric(value)){
                        return false;
                    }else{
                        if (invalidIntegerMessage){
                            return invalidIntegerMessage;
                        }else{
                            return "Not a number";
                        }
                    }
                }else{
                    return "Unable to validate";
                }
            }
        }

    };

});