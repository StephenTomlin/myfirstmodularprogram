module.exports = {
  name: "say hello",
  sayHello: function () {
    console.log(helloWorld());
  }
}

function helloWorld() {
  return "Hello, World!";
}
