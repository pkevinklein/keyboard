(function () {
  // SNARE
  var snare = new Tone.NoiseSynth({
    noise: {
      type: "white",
    },
    envelope: {
      attack: 0.005,
      decay: 0.1,
      sustain: 0.02,
    },
  });

  var reverb = new Tone.Freeverb({
    roomSize: 0.7,
    dampening: 8000,
  });
  var feedbackDelay = new Tone.FeedbackDelay({
    delayTime: "16n",
    feedback: 0.25,
  });
  // var gate = new Tone.Gate(-50);
  var compressor = new Tone.MidSideCompressor();
  var gain = new Tone.Gain();

  snare.chain(reverb, compressor, gain);
  snare.chain(compressor, gain);

  gain.chain(Tone.Master); // dry

  $("body").keydown(function (e) {
    if (e.keyCode == 77 && e.originalEvent.repeat == false) {
      snare.triggerAttackRelease("8n");
    }
  });

  //kick Loop party
  let kick = document.getElementById("kick");
  const kickLoop = new Tone.MembraneSynth().toMaster();
  const kickNotes = ["G2", null, "G2", null, "G2", null, "G2", "G2"];

  const synthPart1 = new Tone.Sequence(
    function (time, note) {
      kickLoop.triggerAttackRelease(note, "10hz", time);
    },
    kickNotes,
    "8n"
  );

  synthPart1.start();

  let playing = false;
  kick.addEventListener("click", function () {
    if (!playing) {
      Tone.Transport.start();
      playing = true;
    } else if (playing) {
      Tone.Transport.stop();
      playing = !playing;
    }
  });

  let octave = 3;
  let cOctave = 4;
  let down = document.getElementById("down");
  let up = document.getElementById("up");

  document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowRight") {
      octave++;
      cOctave++;
      if (octave > 6) {
        octave = 6;
        cOctave = 7;
      }
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowLeft") {
      octave--;
      cOctave--;
      if (octave < 1) {
        octave = 1;
        cOctave = 2;
      }
    }
  });

  up.addEventListener("click", function () {
    octave++;
    cOctave++;
    if (octave == 7 || cOctave == 7) {
      octave = 6;
      cOctave = 6;
    }
  });

  down.addEventListener("click", function () {
    octave--;
    cOctave--;
    if (octave < 1 || cOctave < 1) {
      octave = 1;
      cOctave = 1;
    }
  });

  let effect0 = document.getElementById("effect0");
  effect0.addEventListener("click", function (e) {
    synth = new Tone.Synth().toMaster();
  });
  let synth = new Tone.Synth().toMaster();
  let effect1 = document.getElementById("effect1");
  effect1.addEventListener("click", function (e) {
    synth = new Tone.MembraneSynth().toMaster();
  });

  let effect2 = document.getElementById("effect2");
  effect2.addEventListener("click", function (e) {
    synth = new Tone.AMSynth().toMaster();
  });
  let effect3 = document.getElementById("effect3");
  effect3.addEventListener("click", function (e) {
    synth = new Tone.Synth({
      oscillator: {
        type: "sawtooth",
      },
      envelope: {
        attack: 0.005,
        decay: 0.2,
        sustain: 0.5,
        release: 2,
      },
    }).toMaster();
  });
  let effect4 = document.getElementById("effect4");
  effect4.addEventListener("click", function (e) {
    synth = new Tone.MonoSynth({
      volume: -10,
      envelope: {
        attack: 0.1,
        decay: 0.3,
        release: 2,
      },
      filterEnvelope: {
        attack: 0.001,
        decay: 0.01,
        sustain: 0.5,
        baseFrequency: 500,
        octaves: 2.6,
      },
    }).toMaster();
  });
  let effect5 = document.getElementById("effect5");
  effect5.addEventListener("click", function (e) {
    synth = new Tone.PolySynth(4, Tone.MonoSynth, {
      volume: -10,
      oscillator: {
        partials: [1, 2, 1],
      },
      portamento: 0.05,
    }).toMaster();
  });
  let effect6 = document.getElementById("effect6");
  effect6.addEventListener("click", function (e) {
    synth = new Tone.DuoSynth({
      vibratoAmount: 0.5,
      vibratoRate: 5,
      harmonicity: 1.5,
      voice0: {
        volume: -10,
        portamento: 0,
        oscillator: {
          type: "sine",
        },
        filterEnvelope: {
          attack: 0.01,
          decay: 2,
          sustain: 1,
          release: 0.5,
        },
        envelope: {
          attack: 0.01,
          decay: 0,
          sustain: 1,
          release: 0.5,
        },
      },
      voice1: {
        volume: -10,
        portamento: 0,
        oscillator: {
          type: "sine",
        },
        filterEnvelope: {
          attack: 0.01,
          decay: 2,
          sustain: 1,
          release: 0.5,
        },
        envelope: {
          attack: 0.01,
          decay: 2,
          sustain: 1,
          release: 0.5,
        },
      },
    }).toMaster();
  });

  function playSounds(e, synth) {
    let keysArray = document.querySelectorAll(".set li");
    let myKey;
    const keyboard = {
      a: "C",
      w: "C#",
      s: "D",
      e: "D#",
      d: "E",
      f: "F",
      t: "F#",
      g: "G",
      z: "G#",
      h: "A",
      u: "A#",
      j: "B",
      k: "C",
    };
    //C
    for (let key in keyboard) {
      if (e.key === key) {
        for (let tag of keysArray) {
          if (tag.innerHTML.endsWith(key + "</h2>")) {
            myKey = tag.innerHTML.slice(4, 5);
            if (
              e.key === "w" ||
              e.key === "e" ||
              e.key === "t" ||
              e.key === "z" ||
              e.key === "u"
            ) {
              tag.classList.add("black-active");
              tag.classList.remove("black");
              document.addEventListener("keyup", function (e) {
                tag.classList.remove("black-active");
                tag.classList.add("black");
              });
            } else {
              tag.classList.add("white-active");
              tag.classList.remove("white");
              document.addEventListener("keyup", function (e) {
                tag.classList.remove("white-active");
                tag.classList.add("white");
              });
            }
          }
        }
        function playSynth(synth) {
          if (e.key === "k") {
            synth.triggerAttackRelease(keyboard[key] + cOctave, "8n");
          } else {
            synth.triggerAttackRelease(keyboard[key] + octave, "8n");
          }
        }
        if (e.repeat == false) {
          playSynth(synth);
        }
      }
    }

    //click and play
    const clickableKeyboard = {
      "#do": "C",
      "#doSos": "C#",
      "#re": "D",
      "#reSos": "D#",
      "#mi": "E",
      "#fa": "F",
      "#faSos": "F#",
      "#sol": "G",
      "#solSos": "G#",
      "#la": "A",
      "#laSos": "A#",
      "#si": "B",
      "#DO": "C",
    };
    for (let key in clickableKeyboard) {
      $(key).mousedown(function () {
        function playSynth(synth) {
          if (key === "#DO") {
            synth.triggerAttackRelease(clickableKeyboard[key] + cOctave, "8n");
          } else {
            synth.triggerAttackRelease(clickableKeyboard[key] + octave, "8n");
          }
        }
        playSynth(synth);
      });
    }
  }

  //RECORD AUDIO
  const audio = document.querySelector("audio");
  const actx = Tone.context;
  const dest = actx.createMediaStreamDestination();
  const recorder = new MediaRecorder(dest.stream);
  let recData = [];

  let recOnProgress = document.getElementById("recOn");
  let spinner = document.getElementById("rec");
  let recording = false;
  document.addEventListener("keydown", function (e) {
    recorder.ondataavailable = (eve) => recData.push(eve.data);
    recorder.onstop = (eve) => {
      let blob = new Blob(recData, { type: "audio/ogg codecs=opus" });
      audio.src = URL.createObjectURL(blob);
      console.log(audio.src);
    };
    synth.connect(dest);
    if (!recording && e.key == "o") {
      console.log(" recording: ", recording);
      recorder.start();
      spinner.classList.remove("spinner");
      recOnProgress.classList.remove("recOnProgress");
      recording = true;
      console.log("recording is now: ", recording);
    } else if (recording && e.key == "p") {
      recorder.stop();
      console.log("else if recording is now", recording);
      recording = false;
      spinner.classList.add("spinner");
      recOnProgress.classList.add("recOnProgress");
    }
  });

  // new Recording
  let newRecording = document.getElementById("new-recording");
  newRecording.addEventListener("click", function (e) {
    recData = [];
  });
  document.addEventListener("keydown", function (e) {
    playSounds(e, synth);
  });
  return () => {
    document.removeEventListener("keydown", playSounds);
  };
})();
