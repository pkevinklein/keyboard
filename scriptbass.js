var bass = document.getElementById("bass");
bass.addEventListener("click", function(){
    bassFunction();
    console.log("algo");

})

function bassFunction() {



    //bassline
    const bassLine = new Tone.Synth().toMaster();
    const bassLoop = new Tone.Loop(function(time) {
      console.log(time);
      bassLine.triggerAttackRelease("C1", "2n");
    }, "4n").start(0);
    const notes = ["C1", "C2", "D1", "D2", "Eb1", "Eb2", "D1", "D2"];
    const synthPart = new Tone.Sequence(
      function(time, note) {
        bassLine.triggerAttackRelease(note, "10hz", time);
      },
      notes,
      "8n"
    );
    // synthPart.start();

     let bass = document.getElementById('bass');
        bass.addEventListener("click", function(e){
            let playingBass = false;
            if (!playingBass) {
                synthPart.start();
                Tone.Transport.start();
                console.log("playing bass is ", playingBass);
                playingBass = true;
                console.log("playing bass is ", playingBass);
            } else if (playingBass) {
                Tone.Transport.stop();
                playingBass = !playingBass;
            }
        });

}
