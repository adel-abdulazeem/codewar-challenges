// create a class Color Ghost, Ghosts obj are instantiated without any args, Ghosts are given a random color attr of white or yellow, or purple or red when instantiated.


var Ghost = function () {
    const colors = ["white", "yellow", "purple", "red"];
    const randomIndex = Math.floor(Math.random() * 4)
    this.color = colors[randomIndex]
}