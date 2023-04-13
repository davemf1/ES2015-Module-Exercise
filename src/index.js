import fruits from './foods';
import { choice, remove } from './helpers';

let fruit = choice(fruits);

while (fruits.length > 0) {
	console.log(`I'd like one ${fruit}, please.`);
	console.log(`Here you go: ${fruit}`);
	console.log('Delicious! May I have another?');
	remove(fruits, fruit);

	if (fruits.includes(fruit)) {
		console.log(`Here you go: ${fruit}`);
	} else {
		console.log(`I'm sorry, we are all out. We have ${fruits.length} fruits left.`);
		fruit = choice(fruits);
	}
}

console.log('I cannot believe you ate all of my fruits.');