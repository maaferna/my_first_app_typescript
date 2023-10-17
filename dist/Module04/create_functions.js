function displayAlert(message) {
    console.log('The message is ' + message);
}
displayAlert('Testing');
displayAlert(1);
displayAlert(false);
function displayAlert2(_a) {
    var text = _a.text, sender = _a.sender;
    console.log("Message from ".concat(sender, ": ").concat(text));
}
displayAlert2({ sender: 'Marco', text: 'hello, world' });
