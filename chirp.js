function chirp(number, string){
  var bird = string;

  if(number <= 1){
    return bird;
  }

  number--;
  bird += " " + chirp(number, bird);

  return bird;
}

module.exports = chirp;

