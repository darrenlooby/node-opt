var options = {};

module.exports = function (conf) {

    if (!arguments[0]) {
        // there are no arguments given, therefore it's a getter
        // not only is it a getter, it's gloval getter
        return options;
    } else {
        if (!arguments[1]) {
            // there is only a single argument given
            // so it's a getter for a single param or setter for an object

            if (arguments[0] + "" === arguments[0]) {
                // this is a string therefore is a getter or setter of a param
                // not an object setter

                if (!options[arguments[0]]) {
                    // check to see if there string provided is the name of a
                    // param that is stored - if not:
                    return false;
                } else {
                    // if the string does represent the name of a param
                    // that isstored then:
                    return options[arguments[0]];
                }

            } else {
                // this is not a string, therefore is an object setter

                // itterate over the input and put items in the pair store    
                for (var item in conf) {
                    options[item] = conf[item];
                }

            }
        } else {
            options[arguments[0]] = arguments[1];
        }
    }
};