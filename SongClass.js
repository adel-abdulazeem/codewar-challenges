// code here
class Song {
    constructor(title, artist) {
        this.title = title
        this.artist = artist
        this.listeners = new Set()
    }
    howMany(arr) {
        const todayListeners = new Set(arr.map(name => name.toLowerCase()));
        let count = 0;
        for (let listener of todayListeners) {
            if (!this.listeners.has(listener)) {
                count++;
                this.listeners.add(listener)
            }
        }
        return count
    }
}

const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
console.log(mountMoose.howMany(['John', 'joHN', 'carl']))
console.log(mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn'])); // 5
console.log(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']));
