var kick = document.getElementById("kick");
kick.addEventListener("click", function(){
    kickFunction();
    console.log("algo");

})
        function kickFunction() {

            const beat = new Tone.MembraneSynth().toMaster();
            const loop = new Tone.Loop(function(time) {
                console.log(time);
                beat.triggerAttackRelease("C1", "2n");
            }, "4n").start(0);

            let kick = document.getElementById('kick');
            let playingKick = false;
            kick.addEventListener("click", function(e){
                if (!playingKick) {
                    Tone.Transport.start();
                    console.log("playing kick is ", playingKick);
                    playingKick = true;
                    console.log("playing kick is ", playingKick);
                } else if (playingKick) {
                    Tone.Transport.stop();
                    playingKick = !playingKick;
                }
            });

}
