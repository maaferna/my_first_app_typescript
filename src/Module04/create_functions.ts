function displayAlert(message: string | number | boolean) {
	console.log('The message is ' + message);
}

displayAlert('Testing');
displayAlert(1);
displayAlert(false);

interface Message {
	text:string;
	sender:string;
}

function displayAlert2({text, sender}: Message) {
	console.log(`Message from ${sender}: ${text}`);
}

displayAlert2({sender: 'Marco', text: 'hello, world'});