function greet(name, callback) {
    const greetingMessage = `Hello, ${name}!`;
    callback(greetingMessage);
}
function printMessage(message) {
    console.log(message);
}
greet("Architha", printMessage);