function countAllPaarl(regNo) {
  var parameter = regNo.split(",");
  var array = [];
  var counter = 0
  // console.log(parameter);

  for (var i = 0; i < parameter.length; i++) {
    var checkRegNo = parameter[i].trim();
    // console.log(checkRegNo);

    if (checkRegNo.startsWith("CJ")) {
      array.push(checkRegNo);
      counter++;

    }
  }
  return counter;
}
export default countAllPaarl;
