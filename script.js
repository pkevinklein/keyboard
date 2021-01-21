(function() {
<<<<<<< HEAD
  // //bassline
  // const bassLine = new Tone.Synth().toMaster();
  // const bassLoop = new Tone.Loop(function(time) {
  //   // console.log(time);
  //   bassLine.triggerAttackRelease("C1", "2n");
  // }, "4n").start(0);
  // const notes = ["A2", "A3", "B2", "B3", "C3", "C4", "B2", "B3"];
  // const synthPart = new Tone.Sequence(
  //   function(time, note) {
  //     bassLine.triggerAttackRelease(note, "15hz", time);
  //   },
  //   notes,
  //   "8n"
  // );

  // // bass
  // let bass = document.getElementById("bass");
  // let playingBass = false;
  // bass.addEventListener("click", function(e) {
  //   console.log("here");
  //   if (!playingBass) {
  //     console.log(" first if bass: ", playingBass);
  //     synthPart.start();
  //     Tone.Transport.start();
  //     playingBass = true;
  //     console.log("bass: ", playingBass);
  //   } else if (playingBass) {
  //     console.log("else playingBass is now", playingBass);
  //     Tone.Transport.stop();
  //     playingBass = !playingBass;
  //   }
  // });
  // SNARE
  var snare = new Tone.NoiseSynth({
    noise: {
      type: "white"
    },
    envelope: {
      attack: 0.005,
      decay: 0.1,
      sustain: 0.02
    }
  });

  var reverb = new Tone.Freeverb({
    roomSize: 0.7,
    dampening: 8000
  });
  var feedbackDelay = new Tone.FeedbackDelay({
    delayTime: "16n",
    feedback: 0.25
  });
  // var gate = new Tone.Gate(-50);
  var compressor = new Tone.MidSideCompressor();
  var gain = new Tone.Gain();

  snare.chain(reverb, compressor, gain);
  snare.chain(compressor, gain);

  gain.chain(Tone.Master); // dry

  // const snareLoop = new Tone.MembraneSynth().toMaster();
  // const snareNotes = [null, null, "G2", null, null, null, "G2", null];
  //
  // const synthPart2 = new Tone.Sequence(
  //   function(time, notes) {
  //     snare.triggerAttackRelease("8n");
  //   },
  //   snareNotes,
  //   "8n"
  // );
  // synthPart2.start();

  $("body").keydown(function(e) {
    console.log(e);
    if (e.keyCode == 77 && e.originalEvent.repeat == false) {
      snare.triggerAttackRelease("8n");
    }
  });

  //kick Loop party
  let kick = document.getElementById("kick");
  const kickLoop = new Tone.MembraneSynth().toMaster();
  const kickNotes = ["G2", null, "G2", null, "G2", null, "G2", "G2"];

  const synthPart1 = new Tone.Sequence(
    function(time, note) {
      kickLoop.triggerAttackRelease(note, "10hz", time);
    },
    kickNotes,
    "8n"
  );

  synthPart1.start();

  let playing = false;
  kick.addEventListener("click", function() {
    if (!playing) {
      Tone.Transport.start();
      playing = true;
    } else if (playing) {
      Tone.Transport.stop();
      playing = !playing;
=======
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
>>>>>>> c202b74... first commit
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
<<<<<<< HEAD
  //
  let octave = 4;
  let cOctave = 5;
  let down = document.getElementById("down");
  let up = document.getElementById("up");
  document.addEventListener("keydown", function(e) {
    if (e.key == "ArrowRight") {
      octave++;
      cOctave++;
      if(octave > 6 || cOctave > 6){
        octave = 6;
        cOctave = 6;
      }
    }
  });
  document.addEventListener("keydown", function(e) {
    if (e.key == "ArrowLeft") {
      octave--;
      cOctave--;
      if(octave < 1 || cOctave < 1){
        octave = 1;
        cOctave = 1;
      }
    }
  });

  up.addEventListener("click", function() {
    octave++;
    cOctave++;
    if(octave == 7 || cOctave == 7){
      octave = 6;
      cOctave = 6;
    }
  });

  down.addEventListener("click", function() {
    octave--;
    cOctave--;
    if(octave < 1 || cOctave < 1){
      octave = 1;
      cOctave = 1;
    }
  });

  let effect0 = document.getElementById("effect0");
  effect0.addEventListener("click", function(e) {
    synth = new Tone.Synth().toMaster();
  });
=======
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

>>>>>>> c202b74... first commit
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
<<<<<<< HEAD
    synth = new Tone.Synth({
      oscillator: {
        type: "sawtooth"
      },
      envelope: {
        attack: 0.005,
        decay: 0.2,
        sustain: 0.5,
        release: 2
      }
    }).toMaster();
=======
    synth = new Tone.Synth().toMaster();
>>>>>>> c202b74... first commit
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
<<<<<<< HEAD
    synth = new Tone.PolySynth(4, Tone.MonoSynth, {
      volume: -10,
=======
    synth = new Tone.PolySynth(4, Tone.Synth, {
      volume: -8,
>>>>>>> c202b74... first commit
      oscillator: {
        partials: [1, 2, 1]
      },
      portamento: 0.05
    }).toMaster();
  });
<<<<<<< HEAD
  let effect6 = document.getElementById("effect6");
  effect6.addEventListener("click", function(e) {
    synth = new Tone.DuoSynth({
      vibratoAmount: 0.5,
      vibratoRate: 5,
      harmonicity: 1.5,
      voice0: {
        volume: -10,
        portamento: 0,
        oscillator: {
          type: "sine"
        },
        filterEnvelope: {
          attack: 0.01,
          decay: 2,
          sustain: 1,
          release: 0.5
        },
        envelope: {
          attack: 0.01,
          decay: 0,
          sustain: 1,
          release: 0.5
        }
      },
      voice1: {
        volume: -10,
        portamento: 0,
        oscillator: {
          type: "sine"
        },
        filterEnvelope: {
          attack: 0.01,
          decay: 2,
          sustain: 1,
          release: 0.5
        },
        envelope: {
          attack: 0.01,
          decay: 2,
          sustain: 1,
          release: 0.5
        }
      }
    }).toMaster();
  });
=======

>>>>>>> c202b74... first commit
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
<<<<<<< HEAD

    //C
    if (e.key == "a") {
      for (let i = 0; i < keysArray.length; i++) {
        if (keysArray[i].innerHTML.endsWith(e.key + "</h2>")) {
          myKey = keysArray[i].innerHTML.slice(4, 5);
          keysArray[i].classList.add("white-active");
          keysArray[i].classList.remove("white");
          document.addEventListener("keyup", function(e) {
            keysArray[i].classList.remove("white-active");
            keysArray[i].classList.add("white");
          });
        }
      }
      function playSynth(synth) {
        synth.triggerAttackRelease("C" + octave, "8n");
      }
      document.addEventListener("keyup", function(e) {
        aCount = 0;
        console.log(Math.max(aCount));
      });
      if (e.repeat == false) {
        playSynth(synth);
      }
    }
    //C#
    if (e.key == "w") {
      for (let i = 0; i < keysArray.length; i++) {
        if (keysArray[i].innerHTML.endsWith(e.key + "</h2>")) {
          myKey = keysArray[i].innerHTML.slice(4, 5);
          keysArray[i].classList.add("black-active");
          keysArray[i].classList.remove("black");
          document.addEventListener("keyup", function(e) {
            keysArray[i].classList.add("black");
            keysArray[i].classList.remove("black-active");
          });
        }
      }
      function playSynth(synth) {
        synth.triggerAttackRelease("C#" + octave, "8n");
      }
      if (e.repeat == false) {
        playSynth(synth);
      }
    }
    //D
    if (e.key == "s") {
      for (let i = 0; i < keysArray.length; i++) {
        if (keysArray[i].innerHTML.endsWith(e.key + "</h2>")) {
          myKey = keysArray[i].innerHTML.slice(4, 5);
          keysArray[i].classList.add("white-active");
          keysArray[i].classList.remove("white");
          document.addEventListener("keyup", function(e) {
            keysArray[i].classList.add("white");
            keysArray[i].classList.remove("white-active");
          });
        }
      }
      function playSynth(synth) {
        synth.triggerAttackRelease("D" + octave, "8n");
      }
      if (e.repeat == false) {
        playSynth(synth);
      }
    }
    //D#
    if (e.key == "e") {
      for (let i = 0; i < keysArray.length; i++) {
        if (keysArray[i].innerHTML.endsWith(e.key + "</h2>")) {
          myKey = keysArray[i].innerHTML.slice(4, 5);
          keysArray[i].classList.add("black-active");
          keysArray[i].classList.remove("black");
          document.addEventListener("keyup", function(e) {
            keysArray[i].classList.add("black");
            keysArray[i].classList.remove("black-active");
          });
        }
      }
      function playSynth(synth) {
        synth.triggerAttackRelease("D#" + octave, "8n");
      }
      if (e.repeat == false) {
        playSynth(synth);
      }
    }
    //E
    if (e.key == "d") {
      for (let i = 0; i < keysArray.length; i++) {
        if (keysArray[i].innerHTML.endsWith(e.key + "</h2>")) {
          myKey = keysArray[i].innerHTML.slice(4, 5);
          keysArray[i].classList.add("white-active");
          keysArray[i].classList.remove("white");
          document.addEventListener("keyup", function(e) {
            keysArray[i].classList.add("white");
            keysArray[i].classList.remove("white-active");
          });
        }
      }
      function playSynth(synth) {
        synth.triggerAttackRelease("E" + octave, "8n");
      }
      if (e.repeat == false) {
        playSynth(synth);
      }
    }
    //F
    if (e.key == "f") {
      for (let i = 0; i < keysArray.length; i++) {
        if (keysArray[i].innerHTML.endsWith(e.key + "</h2>")) {
          myKey = keysArray[i].innerHTML.slice(4, 5);
          keysArray[i].classList.add("white-active");
          keysArray[i].classList.remove("white");
          document.addEventListener("keyup", function(e) {
            keysArray[i].classList.add("white");
            keysArray[i].classList.remove("white-active");
          });
        }
      }
      function playSynth(synth) {
        synth.triggerAttackRelease("F" + octave, "8n");
      }
      if (e.repeat == false) {
        playSynth(synth);
      }
    }
    //F#
    if (e.key == "t") {
      for (let i = 0; i < keysArray.length; i++) {
        if (keysArray[i].innerHTML.endsWith(e.key + "</h2>")) {
          myKey = keysArray[i].innerHTML.slice(4, 5);
          keysArray[i].classList.add("black-active");
          keysArray[i].classList.remove("black");
          document.addEventListener("keyup", function(e) {
            keysArray[i].classList.add("black");
            keysArray[i].classList.remove("black-active");
          });
        }
      }
      function playSynth(synth) {
        synth.triggerAttackRelease("F#" + octave, "8n");
      }
      if (e.repeat == false) {
        playSynth(synth);
      }
    }
    //G
    if (e.key == "g") {
      for (let i = 0; i < keysArray.length; i++) {
        if (keysArray[i].innerHTML.endsWith(e.key + "</h2>")) {
          myKey = keysArray[i].innerHTML.slice(4, 5);
          keysArray[i].classList.add("white-active");
          keysArray[i].classList.remove("white");
          document.addEventListener("keyup", function(e) {
            keysArray[i].classList.add("white");
            keysArray[i].classList.remove("white-active");
          });
        }
      }
      function playSynth(synth) {
        synth.triggerAttackRelease("G" + octave, "8n");
      }
      if (e.repeat == false) {
        playSynth(synth);
      }
    }
    //G#
    if (e.key == "z") {
      for (let i = 0; i < keysArray.length; i++) {
        if (keysArray[i].innerHTML.endsWith(e.key + "</h2>")) {
          myKey = keysArray[i].innerHTML.slice(4, 5);
          keysArray[i].classList.add("black-active");
          keysArray[i].classList.remove("black");
          document.addEventListener("keyup", function(e) {
            keysArray[i].classList.add("black");
            keysArray[i].classList.remove("black-active");
          });
        }
      }
      function playSynth(synth) {
        synth.triggerAttackRelease("G#" + octave, "8n");
      }
      if (e.repeat == false) {
        playSynth(synth);
      }
    }
    //A
    if (e.key == "h") {
      for (let i = 0; i < keysArray.length; i++) {
        if (keysArray[i].innerHTML.endsWith(e.key + "</h2>")) {
          myKey = keysArray[i].innerHTML.slice(4, 5);
          keysArray[i].classList.add("white-active");
          keysArray[i].classList.remove("white");
          document.addEventListener("keyup", function(e) {
            keysArray[i].classList.add("white");
            keysArray[i].classList.remove("white-active");
          });
        }
      }
      function playSynth(synth) {
        synth.triggerAttackRelease("A" + octave, "8n");
      }
      if (e.repeat == false) {
        playSynth(synth);
      }
    }
    //A#
    if (e.key == "u") {
      for (let i = 0; i < keysArray.length; i++) {
        if (keysArray[i].innerHTML.endsWith(e.key + "</h2>")) {
          myKey = keysArray[i].innerHTML.slice(4, 5);
          keysArray[i].classList.add("black-active");
          keysArray[i].classList.remove("black");
          document.addEventListener("keyup", function(e) {
            keysArray[i].classList.add("black");
            keysArray[i].classList.remove("black-active");
          });
        }
      }
      function playSynth(synth) {
        synth.triggerAttackRelease("A#" + octave, "8n");
      }
      if (e.repeat == false) {
        playSynth(synth);
      }
    }
    //B
    if (e.key == "j") {
      for (let i = 0; i < keysArray.length; i++) {
        if (keysArray[i].innerHTML.endsWith(e.key + "</h2>")) {
          myKey = keysArray[i].innerHTML.slice(4, 5);
          keysArray[i].classList.add("white-active");
          keysArray[i].classList.remove("white");
          document.addEventListener("keyup", function(e) {
            keysArray[i].classList.add("white");
            keysArray[i].classList.remove("white-active");
          });
        }
      }
      function playSynth(synth) {
        synth.triggerAttackRelease("B" + octave, "8n");
      }
      if (e.repeat == false) {
        playSynth(synth);
      }
    }
    //C again
    if (e.key == "k") {
      for (let i = 0; i < keysArray.length; i++) {
        if (keysArray[i].innerHTML.endsWith(e.key + "</h2>")) {
          myKey = keysArray[i].innerHTML.slice(4, 5);
          keysArray[i].classList.add("white-active");
          keysArray[i].classList.remove("white");
          document.addEventListener("keyup", function(e) {
            keysArray[i].classList.add("white");
            keysArray[i].classList.remove("white-active");
          });
        }
      }
      function playSynth(synth) {
        synth.triggerAttackRelease("C" + cOctave, "8n");
      }
      if (e.repeat == false) {
        playSynth(synth);
      }
    }
  }
  //RECORD AUDIO
  const audio = document.querySelector("audio");
  const actx = Tone.context;
  const dest = actx.createMediaStreamDestination();
  const recorder = new MediaRecorder(dest.stream);
  let recData = [];

  let spinner = document.getElementById("rec");
  let recording = false;
  document.addEventListener("keydown", function(e) {
    recorder.ondataavailable = eve => recData.push(eve.data);
    recorder.onstop = eve => {
      let blob = new Blob(recData, { type: "audio/ogg codecs=opus" });
      audio.src = URL.createObjectURL(blob);
    };
    synth.connect(dest);
    if (!recording && e.key == "o") {
      console.log(" recording: ", recording);
      recorder.start();
      spinner.classList.remove("spinner");
      recording = true;
      console.log("recording is now: ", recording);
    } else if (recording && e.key == "p") {
      recorder.stop();
      console.log("else if recording is now", recording);
      recording = false;
      spinner.classList.add("spinner");
    }
  });

  // new Recording
  let newRecording = document.getElementById("new-recording");
  newRecording.addEventListener("click", function(e) {
    recData = [];
  });
=======
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

>>>>>>> c202b74... first commit
  document.addEventListener("keydown", function(e) {
    test(e, synth);
  });
  return () => {
    document.removeEventListener("keydown", test);
  };
})();
<<<<<<< HEAD

// synth.connect(dest); // esto conecta el sonido con la grbadora
//
// recorder.start(); // esto comienza a grabar
// recorder.stop(); // esto finliza la grabacion
// recorder.ondataavailable = eve => recData.push(eve.data);
// recorder.onstop = eve => {
//   let block = new Block(recData, { type: "audio/ogg codecs=opus" });
//   audio.src = URL.createObjectURL(block);
// };
=======
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
>>>>>>> c202b74... first commit
