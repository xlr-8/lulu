export class Image {
  name;
  src;
  hidden;
  hover; // not set
  alt;
  sound;
  phoneme;

  constructor(name, srcPath, hidden, alt, soundFile, phoneme) {
    this.name = name;
    this.src = srcPath;
    this.hidden = hidden;
    this.alt = alt;
    this.sound = new Audio(soundFile);
    this.sound.type = 'audio/mp3';
    this.phoneme = phoneme;
  }

  getName() {return this.name}
  getSrc() {return this.src}
  getHidden() {return this.hidden}
  getHover() {return this.hover}
  getAlt() {return this.alt}
  getSound() {return this.sound}
  getPhoneme() {return this.phoneme}

  setName(name) {this.name = name}
  setSrc(src) {this.src = src}
  setHidden(hidden) {this.hidden = hidden}
  setHover(hover) {this.hover = hover}
  setAlt(alt) {this.alt = alt}
  setSound(sound) {this.sound = sound}
  setPhoneme(phoneme) {this.phoneme = phoneme}

  play() {
    this.sound.play()
  }

  containsPhoneme(p) {
    return p === this.phoneme
  }
}

export class Images {

  constructor() {
    var m = new Map();
    const soundPath = "/statics/audio/"
    const imagePath = "/statics/images/numbers/"

    m.set("1",  Image.New(imagePath + "one.png", false, "image-one.png", soundPath + "good-notif.mp3", "e"));
    m.set("2",  Image.New(imagePath + "two.png", false, "image-two.png", soundPath + "negativ-notif.mp3", "t"));
  }

}
