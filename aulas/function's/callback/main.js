function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(function () {
    console.log("f1");
    if (callback) callback();
  }, rand());
}
function f2(callback) {
  setTimeout(function () {
    console.log("f2");
    if (callback) callback();
  }, rand());
}
function f3(callback) {
  setTimeout(function () {
    console.log("f3");
    if (callback) callback();
  }, rand());
}

/* f1(function () {
  f2(function () {
    f3(function () {
      console.log("Olá mundo!");
    });
  });
});
 */

f1(f1Calback)

function f1Calback(){
  f2(f2Calback)
}

function f2Calback(){
  f3(f3Calback)
}

function f3Calback(){
  console.log('Olá mundo!')
}