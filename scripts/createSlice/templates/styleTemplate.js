const firstToLower = require("../firstCharLowerCase");

module.exports = (componentName) => `.${firstToLower(componentName)} {

}`;
