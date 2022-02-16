const AUDIO_INTERVAL = 40;
const AUDIO_RUNNING_AVERAGE_LENGTH = 100;
const AUDIO_RUNNING_AVERAGE_LENGTH_FRAC = 15;

class Audio {

    constructor(call) {
        this.currentNote = 0;
        this.level = 0;

        this.stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        this.audioContext = new AudioContext();
        this.mediaStreamAudioSourceNode = audioContext.createMediaStreamSource(this.stream);
        this.analyserNode = audioContext.createAnalyser();
        mediaStreamAudioSourceNode.connect(this.analyserNode);
        this.pcmData = new Float32Array(analyserNode.fftSize);
const onFrame = () => {
            
        };

        userStartAudio();
        this.audioContext = getAudioContext();
        this.mic = new p5.AudioIn();
        this.mic.start(this.startPitchAndLevel);
        this.call = call;  
        
        this.activeLevel = true;
        this.activePitch = true;

        this.runningLevel = []
        this.runningLevelIndex = 0;
    }

    resumeLevel = () => { this.activeLevel = true; }
    stopLevel = () => { this.activeLevel = false; }
    resumePitch = () => { this.activeLevel = true; this.activePitch = true; }
    stopPitch = () => { this.activePitch = false; }

    startPitchAndLevel = () => {
        while (this.runningLevel.length < AUDIO_RUNNING_AVERAGE_LENGTH) {
            this.runningLevel.push(this.mic.getLevel());
        }

        this.pitch = ml5.pitchDetection('./model/', this.audioContext, this.mic.stream, this.modelLoaded);
    }

    modelLoaded = () => {
        console.log('Audio Loaded');
        loop();
        setInterval(() => {
            this.update();
        }, AUDIO_INTERVAL);
        this.call()
    }

    update = () => {
        this.updateLevel();
        if (this.activePitch && this.getLevel() > .00001/*0.002*/) {
            this.updatePitch();
        }
        //console.log("audio update - ", this.getNote(), this.getLevel());
    }

    updateLevel = () => {

        this.analyserNode.getFloatTimeDomainData(this.pcmData);
        let sumSquares = 0.0;
        for (const amplitude of this.pcmData) { sumSquares += amplitude*amplitude; }
        const level = Math.sqrt(sumSquares / this.pcmData.length);

        //const level = this.mic.getLevel();
        this.runningLevel[this.runningLevelIndex] = level;
        this.runningLevelIndex += 1;
        this.runningLevelIndex %= AUDIO_RUNNING_AVERAGE_LENGTH;

        //console.log(this.getLevel(), this.getRelativeLevel(), this.mic.getLevel());
    }

    updatePitch = () => {
        this.pitch.getPitch((err, frequency) => {
            if (frequency) {
                let midiNum = freqToMidi(frequency);
                this.currentNote = midiNum % 12;
            }
        });
    }

    getNote = () => {
        return this.currentNote;
    }

    getLevel = (frac) => {
        if (frac == undefined) {
            frac = AUDIO_RUNNING_AVERAGE_LENGTH_FRAC
        }
        let avg = 0;
        const start = this.runningLevelIndex - frac + AUDIO_RUNNING_AVERAGE_LENGTH;
        const end = this.runningLevelIndex + AUDIO_RUNNING_AVERAGE_LENGTH;
        for (let i = start; i < end; i++) {
            avg += this.runningLevel[i % AUDIO_RUNNING_AVERAGE_LENGTH];
        }
        avg /= AUDIO_RUNNING_AVERAGE_LENGTH;
        return avg;
    }

    getRelativeLevel = () => {
        let current = 0;
        let full = 0;

        let start = this.runningLevelIndex - AUDIO_RUNNING_AVERAGE_LENGTH_FRAC + AUDIO_RUNNING_AVERAGE_LENGTH;
        let end = this.runningLevelIndex + AUDIO_RUNNING_AVERAGE_LENGTH;
        for (let i = start; i < end; i++) {
            current += this.runningLevel[i % AUDIO_RUNNING_AVERAGE_LENGTH];
        }

        full = current;
        start = this.runningLevelIndex + AUDIO_RUNNING_AVERAGE_LENGTH;
        end = this.runningLevelIndex + 2 * AUDIO_RUNNING_AVERAGE_LENGTH - AUDIO_RUNNING_AVERAGE_LENGTH_FRAC;
        for (let i = start; i < end; i++) {
            full += this.runningLevel[i % AUDIO_RUNNING_AVERAGE_LENGTH];
        }

        current /= AUDIO_RUNNING_AVERAGE_LENGTH_FRAC;
        full /= AUDIO_RUNNING_AVERAGE_LENGTH;
        return current/full;
    }
}