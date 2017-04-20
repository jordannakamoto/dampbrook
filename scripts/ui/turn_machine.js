const tm = (deck) => { //takes in array of objects to use as cards
	var deck = deck;
	return {
		init: () => {console.log("initialized");console.log(deck[1])},
		addCard: () => console.log("hello")
	}



}

//need more helpers to package the input
var test_objArray = [{"name":"1"},{"name":"2"},{"name":"3"}] // builds object array to pass in
const turn_machine = tm(test_objArray) // constructs tm with test objects

turn_machine.init();