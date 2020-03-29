
export class Stats {
  start; 
  errors;
  success;
  finish;
  end;

  getStart() { return this.start }
  getErrors() { return this.errors }
  getSuccess() { return this.success }
  getEnd() { return this.end }

  constructor() {
    this.start = new Date();
    this.errors = [];
    this.success = [];
  }

  showStats() {
    var datestring = this.start.getDate()  + "-" + (this.start.getMonth()+1) + "-" + this.start.getFullYear() + " " +

this.start.getHours() + ":" + this.start.getMinutes();
    return datestring + "</br>Errors: " + this.errors.length + "<br/>Success: " + this.success.length
  }

  reportStop() {
    this.end = new Date().getTime();
  }

  reportFinish() {
    this.finish = new Date().getTime();
  }

  reportError() {
    this.errors.push(new Date().getTime());
  }

  reportSuccess() {
    this.success.push(new Date().getTime());
  }
}


