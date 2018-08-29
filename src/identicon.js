class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  constructor(text){
    this.text = text;
    this.array = md5.array(text)
  }
}
