class TV {
    constructor(brand, channel, volume) {
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
    }
    increaseVolume (vol) {
        if (this.volume + vol <= 100) {
            this.volume += vol;
        }
    }
    decreaseVolume (vol) {
        if (this.volume - vol >= 0) {
            this.volume -= vol;
        }
    }
    setChannel (chan) {
        if (chan > 0 && chan <= 50) {
            this.channel = chan;
        }
    }
    resetTV () {
        this.brand = 'Samsung';
        this.channel = 1;
        this.volume = 50;
    }
    
}

const tv = new TV('Samsung', 1, 50);

tv.increaseVolume(5);
tv.increaseVolume(50);
tv.decreaseVolume(50);
tv.setChannel(5);
tv.resetTV();



console.log(`${tv.brand} at channel ${tv.channel}, volume ${tv.volume}`);