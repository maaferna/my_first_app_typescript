export function returnGreeting( greeting: string) {
	let greetingLength = getLenght(greeting);
	console.log(`The message from GreetingsLength_module is ${greeting}. It is ${greetingLength} characters long.`);
}

function getLenght(message: string): number {
	return message.length
}

