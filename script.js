(function() {
  //LOOP
  //EXAMPLE
  // Membrane Synth https://tonejs.github.io/docs/r12/MembraneSynth

  //bassline
  const bassLine = new Tone.Synth().toMaster();
  const bassLoop = new Tone.Loop(function(time) {
    // console.log(time);
    bassLine.triggerAttackRelease("C1", "2n");
  }, "4n").start(0);
  const notes = ["A2", "A3", "B2", "B3", "C3", "C4", "B2", "B3"];
  const synthPart = new Tone.Sequence(
    function(time, note) {
      bassLine.triggerAttackRelease(note, "15hz", time);
    },
    notes,
    "8n"
  );

  let bass = document.getElementById("bass");
  let playingBass = false;
  bass.addEventListener("click", function(e) {
    console.log("here");
    if (!playingBass) {
      console.log(" first if bass: ", playingBass);
      synthPart.start();
      Tone.Transport.start();
      playingBass = true;
      console.log("bass: ", playingBass);
    } else if (playingBass) {
      console.log("else playingBass is now", playingBass);
      Tone.Transport.stop();
      playingBass = !playingBass;
    }
  });

  // //kick loop
  const beat = new Tone.MembraneSynth().toMaster();
  const loop = new Tone.Loop(function(time) {
    // console.log(time);
    beat.triggerAttackRelease("C1", "2n");
  }, "4n").start(0);

  let kick = document.getElementById("kick");
  let playingKick = false;
  kick.addEventListener("click", function(e) {
    if (!playingKick) {
      // playingBass = false;
      Tone.Transport.start();
      playingKick = true;
    } else if (playingKick) {
      Tone.Transport.stop();
      playingKick = !playingKick;
    }
  });

  // var synth = new Tone.MembraneSynth().toMaster()
  //
  // //create a loop
  // var loop = new Tone.Loop(function(time){
  // 	synth.triggerAttackRelease("C1", "8n", time)
  // }, "4n")
  //
  // //play the loop between 0-2m on the transport
  // loop.start(0).stop('2m')
  //
  // //start/stop the transport
  // document.querySelector('tone-play-toggle').addEventListener('change', e => Tone.Transport.toggle())
  // //LOOP

  // //BPM
  //
  //
  //
  // let beat = new Tone.MetalSynth().toMaster()
  //
  // function triggerSynth(time){
  // 	beat.triggerAttackRelease('16n', time)
  // }
  //
  // Tone.Transport.schedule(triggerSynth, 0)
  // Tone.Transport.schedule(triggerSynth, 2 * Tone.Time('8t'))
  // Tone.Transport.schedule(triggerSynth, Tone.Time('4n') + Tone.Time('8t'))
  // Tone.Transport.schedule(triggerSynth, Tone.Time('4n') + 2 * Tone.Time('8t'))
  // Tone.Transport.schedule(triggerSynth, Tone.Time('0:2') + Tone.Time('8t'))
  // Tone.Transport.schedule(triggerSynth, Tone.Time('0:3') + Tone.Time('8t'))
  //
  // Tone.Transport.loopEnd = '1m'
  // Tone.Transport.loop = true
  //
  // //start/stop the transport
  // document.querySelector('tone-play-toggle').addEventListener('change', e => Tone.Transport.toggle())
  //
  // //start/stop the transport
  // document.querySelector('tone-slider').addEventListener('change', e => Tone.Transport.bpm.value = e.detail)
  // //BPM
  let octave = 4;
  let cOctave = 5;
  let up = document.getElementById("up");
  up.addEventListener("click", function() {
    octave++;
    cOctave++;
  });
  let down = document.getElementById("down");
  down.addEventListener("click", function() {
    octave--;
    cOctave--;
  });

  let synth = new Tone.Synth().toMaster();
  let effect1 = document.getElementById("effect1");
  effect1.addEventListener("click", function(e) {
    synth = new Tone.MembraneSynth().toMaster();
  });

  let effect2 = document.getElementById("effect2");
  effect2.addEventListener("click", function(e) {
    synth = new Tone.AMSynth().toMaster();
  });
  let effect3 = document.getElementById("effect3");
  effect3.addEventListener("click", function(e) {
    synth = new Tone.Synth().toMaster();
  });
  let effect4 = document.getElementById("effect4");
  effect4.addEventListener("click", function(e) {
    synth = new Tone.MonoSynth({
      volume: -10,
      envelope: {
        attack: 0.1,
        decay: 0.3,
        release: 2
      },
      filterEnvelope: {
        attack: 0.001,
        decay: 0.01,
        sustain: 0.5,
        baseFrequency: 200,
        octaves: 2.6
      }
    }).toMaster();
  });
  let effect5 = document.getElementById("effect5");
  effect5.addEventListener("click", function(e) {
    synth = new Tone.PolySynth(4, Tone.Synth, {
      volume: -8,
      oscillator: {
        partials: [1, 2, 1]
      },
      portamento: 0.05
    }).toMaster();
  });

  //keyboard
  // let a = document.getElementByClassname("white e");
  // $(document).keydown(function(event) {
  //   console.log("algo");
  //   //   if (event.which == 65) {
  //   //     console.log("hemos llegado tio");
  //   //     // event.preventDefault();
  //   //     $(this).addClass(".white-active");
  //   //   }
  // });
  // $(".white .e")getElementsByClassName("white e")
  // .classList.toogle("white-active");
  // $(document).keydown(function(event) {}

  // let keyArray = document.querySelectorAll(".set li");
  // console.log("keys, ", keyArray);
  //
  // const key = keyArray.filter(keys => {
  //   console.log("keys", keys);
  //   console.log("e.key", e.key);
  //   keys == e.key;
  // });

  function test(e, synth) {
    let keysArray = document.querySelectorAll(".set li");
    let myKey;
    for (let i = 0; i < keysArray.length; i++) {
      // console.log(e.key);
      // console.log(typeof e.key);
      // console.log(keysArray[i].innerHTML);
      // console.log("Llegamos aqui", keysArray[i].innerHTML.includes(e.key));
      if (keysArray[i].innerHTML.endsWith(e.key + "</h2>")) {
        console.log("Entrmos");
        myKey = keysArray[i].innerHTML.slice(4, 5);
        console.log("mykey ", myKey);

        keysArray[i].classList.remove("white-active");

        // document.addEventListener("keyup", function(e) {
        //   keysArray[i].classList.remove("white-active");
        // });
      }
    }
    //C
    if (e.key == "a") {
      function playSynth(synth) {
        synth.triggerAttackRelease("C" + octave, "8n");
      }
      playSynth(synth);
    }
    if (e.key == "w") {
      function playSynth(synth) {
        synth.triggerAttackRelease("C#" + octave, "8n");
      }
      playSynth(synth);
    }
    //D
    if (e.key == "s") {
      function playSynth(synth) {
        synth.triggerAttackRelease("D" + octave, "8n");
      }
      playSynth(synth);
    }
    //D#
    if (e.key == "e") {
      function playSynth(synth) {
        synth.triggerAttackRelease("D#" + octave, "8n");
      }
      playSynth(synth);
    }
    //E
    if (e.key == "d") {
      function playSynth(synth) {
        synth.triggerAttackRelease("E" + octave, "8n");
      }
      playSynth(synth);
    }
    //F
    if (e.key == "f") {
      function playSynth(synth) {
        synth.triggerAttackRelease("F" + octave, "8n");
      }
      playSynth(synth);
    }
    //F#
    if (e.key == "t") {
      function playSynth(synth) {
        synth.triggerAttackRelease("F#" + octave, "8n");
      }
      playSynth(synth);
    }
    //G
    if (e.key == "g") {
      function playSynth(synth) {
        synth.triggerAttackRelease("G" + octave, "8n");
      }
      playSynth(synth);
    }
    //G#
    if (e.key == "z") {
      function playSynth(synth) {
        synth.triggerAttackRelease("G#" + octave, "8n");
      }
      playSynth(synth);
    }
    //A
    if (e.key == "h") {
      function playSynth(synth) {
        synth.triggerAttackRelease("A" + octave, "8n");
      }
      playSynth(synth);
    }
    //A#
    if (e.key == "u") {
      function playSynth(synth) {
        synth.triggerAttackRelease("A#" + octave, "8n");
      }
      playSynth(synth);
    }
    //B
    if (e.key == "j") {
      function playSynth(synth) {
        synth.triggerAttackRelease("B" + octave, "8n");
      }
      playSynth(synth);
    }
    //C again
    if (e.key == "k") {
      console.log("octave ", octave);
      function playSynth(synth) {
        synth.triggerAttackRelease("C" + cOctave, "8n");
      }
      playSynth(synth);
    }
  }

  document.addEventListener("keydown", function(e) {
    test(e, synth);
  });
  return () => {
    document.removeEventListener("keydown", test);
  };
})();
// let body = document.getElementById('body');
// console.log(body);
// document.addEventListener("keydown", (e) => {

//  })
//create a looped note event every half-note
// var note = new Tone.Event(function(time, pitch){
// 	synth.triggerAttackRelease(pitch, "16n", time);
// }, "C2");
//
// //set the note to loop every half measure
// note.set({
// 	"loop" : true,
// 	"loopEnd" : "2n"
// });
//
// //start the note at the beginning of the Transport timeline
// note.start(0);
//
// //stop the note on the 4th measure
// note.stop("4m");

//
// const synths =[
//     new Tone.Synth(),
//     new Tone.Synth(),
//     new Tone.Synth()
// ]
// synths[0].oscillator.type ="sine";
// synths[1].oscillator.type ="sawtooth";
// synths[2].oscillator.type ="triangle";
//
// const gain = new Tone.Gain(0.6)
// gain.toMaster();
//
// synths.forEach(synth => synth.toMaster());
//
// const $rows = document.body.querySelectorAll("checks");
//     notes = ["G5", "E4", "C3"]
// let index = 0;
//
// Tone.Transport.scheduleRepeat(repeat, "8n");
// Tone.Transport.start();
//
// function repeat(time){
//     let step = index % 8; //amount of
//     for (let i = 0; i < $rows.length; i++) {
//         let synth = synths[i],
//         note = note[i],
//         $row = $rows[i],
//         $input = $row.querySelector(`input:nth-child(${step + 1})`);
//         if ($input.checked) synth.triggerAttackRelease(note, "8n", time)
//     }
//     index++;
// }
