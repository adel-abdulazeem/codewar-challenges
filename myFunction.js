function myFunction() {
    var myObject = {
        objProperty: "string",
        objMethod: function () {
            return myObject.objProperty;
        }
    }

    return myObject;
};

const myObject = { objMethod: function () { return myObject; } };

console.log(myObject.objMethod())