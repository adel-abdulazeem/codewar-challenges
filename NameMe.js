function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName

    //If the constructor returns an object explicitly, that returned object replaces the default this.
    // return {name: this.name =  this.firstName + ' ' + this.lastName}
}