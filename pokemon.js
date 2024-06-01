class Pokemon {
    constructor(name, captureRate) {
        this.name = name;
        this.captureRate = captureRate;
        this.captured = false;
    }

    increaseCaptureRate() {
        if (!this.captured) {
            this.captureRate++;
        }
    }

    isCaptureRateFull() {
        return this.captureRate >= 10;
    }
}

module.exports = Pokemon;