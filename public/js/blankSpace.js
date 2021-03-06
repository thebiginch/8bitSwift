var playButton = document.getElementById("playButton");
var stopButton = document.getElementById("stopButton");
var pauseButton = document.getElementById("pauseButton");
var music = new BandJS();
music.setTimeSignature(4,4);
music.setTempo(80);
var rightHand = music.createInstrument('triangle').setVolume(25);
var leftHand = music.createInstrument('sawtooth').setVolume(60);
var low = music.createInstrument('square').setVolume(20);
var bass = music.createInstrument('brown','noises').setVolume(100);
var snare = music.createInstrument('white', 'noises').setVolume(60);
//measure 1
leftHand.rest('eighth')
.note('sixteenth', 'F5')
.note('sixteenth', 'F5')
.note('sixteenth', 'F5')
.note('sixteenth', 'F5')
.note('sixteenth', 'F5')
.note('sixteenth', 'F5')
.note('eighth', 'G5')
.note('eighth', 'A5')
.rest('quarter')
//measure 2
.rest('eighth')
.note('sixteenth', 'F5')
.note('sixteenth', 'F5')
.note('sixteenth', 'F5')
.note('sixteenth', 'F5')
.note('eighth', 'F5')
.note('eighth', 'A5')
.note('eighth', 'E5')
.note('eighth', 'E5')
.note('eighth', 'F5')
//measure 3
.rest('eighth')
.note('sixteenth', 'F5')
.note('sixteenth', 'F5')
.note('sixteenth', 'F5')
.note('sixteenth', 'F5')
.note('sixteenth', 'F5')
.note('sixteenth', 'F5')
.note('eighth', 'G5')
.note('eighth', 'A5')
.rest('quarter')
//measure 4
.rest('eighth')
.note('sixteenth', 'F5')
.note('sixteenth', 'F5')
.note('eighth', 'F5')
.note('eighth', 'F5')
.note('eighth', 'A5')
.note('eighth', 'E5')
.note('eighth', 'E5')
.note('eighth', 'F5')
//measure 5
.rest('eighth')
.note('sixteenth', 'C6')
.note('sixteenth', 'C6')
.note('eighth', 'C6')
.note('eighth', 'Bb5')
.note('eighth', 'A5')
.note('eighth', 'Bb5')
.note('eighth', 'A5')
.note('eighth', 'G5')
//measure 6
.rest('eighth')
.note('eighth', 'G5')
.note('eighth', 'G5')
.note('eighth', 'G5')
.note('eighth', 'Bb5')
.note('eighth', 'A5')
.note('eighth', 'G5')
.note('eighth', 'F5')
//measure 7
.rest('eighth')
.note('sixteenth', 'C6')
.note('sixteenth', 'C6')
.note('eighth', 'C6')
.note('eighth', 'Bb5')
.note('eighth', 'A5')
.note('eighth', 'Bb5')
.note('eighth', 'A5')
.note('eighth', 'G5')
//measure 8
.rest('eighth')
.note('eighth', 'F5')
.note('quarter', 'Bb5')
.note('quarter', 'Bb5')
.note('eighth', 'Bb5')
.note('eighth', 'C6')
//measure 9
.rest('eighth')
.note('sixteenth', 'F5')
.note('sixteenth', 'F5')
.note('eighth', 'F5')
.note('sixteenth', 'F5')
.note('sixteenth', 'F5')
.note('eighth', 'G5')
.note('eighth', 'A5')
.rest('quarter')
//measure 10
.rest('eighth')
.note('eighth', 'F5')
.note('eighth', 'F5')
.note('eighth', 'F5')
.note('eighth', 'A5')
.note('eighth', 'E5')
.note('eighth', 'E5')
.note('eighth', 'F5')
//measure 11
.rest('eighth')
.note('sixteenth', 'F5')
.note('sixteenth', 'F5')
.note('eighth', 'F5')
.note('eighth', 'F5')
.note('eighth', 'G5')
.note('eighth', 'A5')
.rest('quarter')
//measure 12
.rest('eighth')
.note('eighth', 'F5')
.note('eighth', 'F5')
.note('eighth', 'F5')
.note('eighth', 'A5')
.note('eighth', 'E5')
.note('eighth', 'E5')
.note('eighth', 'F5')
//measure 13
.rest('eighth')
.note('sixteenth', 'C6')
.note('sixteenth', 'C6')
.note('eighth', 'C6')
.note('eighth', 'Bb5')
.note('eighth', 'A5')
.note('eighth', 'Bb5')
.note('eighth', 'A5')
.note('eighth', 'G5')
//measure 14
.rest('eighth')
.note('eighth', 'G5')
.note('eighth', 'G5')
.note('eighth', 'G5')
.note('eighth', 'Bb5')
.note('eighth', 'A5')
.note('eighth', 'G5')
.note('eighth', 'F5')
//measure 15
.rest('dottedEighth')
.note('sixteenth', 'F5')
.note('eighth', 'G5')
.note('sixteenth', 'G5')
.note('sixteenth', 'F5')
.note('dottedEighth', 'G5')
.note('dottedEighth', 'G5')
.note('sixteenth', 'G5')
.note('sixteenth', 'F5')
//measure 16
.note('eighth', 'D5')
.note('dottedQuarter', 'D5')
.rest('sixteenth')
.note('sixteenth', 'C5')
.note('eighth', 'A5')
.note('eighth', 'F5')
.note('sixteenth', 'F5')
.note('quarter', 'F5')
.rest('sixteenth')
.rest('dottedHalf')
bass
.repeatStart()
.note('thirtySecond', 'C4')
.rest('dottedSixteenth')
.rest('sixteenth')
.note('thirtySecond', 'C4')
.rest('thirtySecond')
.rest('eighth')
.note('thirtySecond', 'C4')
.rest('dottedSixteenth')
.rest('half')
.note('thirtySecond', 'C4')
.rest('dottedSixteenth')
.rest('sixteenth')
.note('thirtySecond', 'C4')
.rest('thirtySecond')
.rest('eighth')
.note('thirtySecond', 'C4')
.rest('dottedSixteenth')
.rest('eighth')
.note('thirtySecond', 'C4')
.rest('dottedSixteenth')
.rest('quarter')
.repeat(7)
.rest('whole')
snare.repeatStart()
.rest('quarter')
.note('thirtySecond', 'A4')
.rest('dottedSixteenth')
.rest('eighth')
.rest('quarter')
.note('thirtySecond', 'A4')
.rest('dottedSixteenth')
.rest('eighth')
.repeat(15)
.rest('whole')
rightHand.repeatStart()
.note('eighth', 'C6')
.note('eighth', 'C6')
.note('eighth', 'C6')
.note('sixteenth', 'F5')
.note('sixteenth', 'F5')
.note('eighth', 'F5')
.note('eighth', 'F5')
.note('eighth', 'F5')
.note('eighth', 'F5')
.note('eighth', 'A5')
.note('eighth', 'A5')
.note('eighth', 'A5')
.note('sixteenth', 'F5')
.note('sixteenth', 'F5')
.note('eighth', 'F5')
.note('eighth', 'F5')
.note('eighth', 'F5')
.note('eighth', 'F5')
.repeat(7)
.rest('whole')
low.repeatStart()
.note('whole', 'F2')
.note('whole', 'F2')
.note('whole', 'D2')
.note('whole', 'D2')
.note('whole', 'G2')
.note('whole', 'G2')
.note('whole', 'Bb2')
.note('whole', 'Bb2')
.repeat()
.rest('whole')
var player = music.finish();
leftHand.repeatFromBeginning(500);
rightHand.repeatFromBeginning(500);
low.repeatFromBeginning(500);
bass.repeatFromBeginning(500);
snare.repeatFromBeginning(500);
function playSong() {
    playButton.disabled = true;
    pauseButton.disabled = false;
    stopButton.disabled = false;
    player.play();
    playing = true;
}
function pauseSong() {
    if (playing) {
        player.pause();
        playing = false;
    }
    else {
        player.play();
        playing = true;
    }
}
function stopSong() {
    player.stop();
    playing = false;
    enablePlay();
}
function enablePlay() {
    playButton.disabled = false;
}
   
playButton.onclick = playSong;
pauseButton.onclick = pauseSong;
stopButton.onclick = stopSong;