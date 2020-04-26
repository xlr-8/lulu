export class Image {
  constructor(name, srcPath, hidden, alt, soundFile, phoneme) {
    var that = this;

    that.name = name;
    that.src = srcPath;
    that.hidden = hidden;
    that.alt = alt;
    that.sound = new Audio(soundFile);
    that.sound.type = 'audio/mp3';
    that.phoneme = phoneme;

    // The method need to be declared here
    // because otherwise, it is not accessible as:
    // "this" isn't the same after creation, and saving
    // it doesn't seem to work
    that.playSound = function() {
      that.sound.play();
    }
  }

  containsPhoneme(p) {
    return p === that.phoneme;
  }
}

export class Images {

  constructor() {
    var m = new Map();
    const soundPath = "statics/audio/"
    const imagePath = "statics/images/numbers/"

    m.set("1",  Image.New(imagePath + "one.png", false, "image-one.png", soundPath + "good-notif.mp3", "e"));
    m.set("2",  Image.New(imagePath + "two.png", false, "image-two.png", soundPath + "negativ-notif.mp3", "t"));
  }

}
