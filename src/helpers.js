function choice(items) {
	let idx = Math.floor(Math.random() * items.length);
	let item = items[idx];
	return item;
}

function remove(items, item) {
	let idx = items.findIndex((i) => i === item);
	let removedItem = items.splice(idx, 1);
	return removedItem;
}

export { choice, remove };