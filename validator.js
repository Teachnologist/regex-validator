class Validator {
    

    isNumber(number){
        var reg = new RegExp('^[0-9]+$');
        return reg.test(number);
    }

    isLetter(number){
        
    }

    isCapital(number){
        
    }
}

module.exports = Validator;