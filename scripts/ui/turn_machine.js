var tmDeck = pawns.map(function(pawn)
	//make a new card for each pawn with relevant stats
	{var tmCard = {
		name: pawn.name,
		maxHp: pawn.maxHp,
		currentHp: pawn.maxHp,
		agi: pawn.agi,
		move: pawn.move,
		team: pawn.team,
		//leave room for module that calcs secondary stats
	}
	return tmCard });

sortTurnOrder(tmDeck); //rearrange tmDeck by turn order before it's initialized


const UI_tm = (tmDeck) => { //load turn machine from deck
	var deck = tmDeck;

	/*----------  METHODS  ----------*/
	return {
		init: () => {console.log("%c turn machine started up..", 'background: green; color: white; display: block; line-height: 50px')},
		addCard: () => console.log("hello"),

		//drawing
		draw: () => toDOM(deck),
		setActive: ()=> {console.log("It's " + deck[0].name + "'s turn"); cardActivate(deck[0])},

		//api
		active: ()=> deck[0] // NOTE (1)
	}

	/*----------  HELPER Fx  ----------*/
	
	function toDOM(deck){ // adds tmCards to DOM with styles
		var $tmCardsDiv = $("#turn_machine #tm__cards"); //look up cards container

		for(var i = 0; i<deck.length;i++){
			if (deck[i].team == "enemy")$tmCardsDiv.append("<li class='tm__card enemy-card'>"+ deck[i].name +"</li>");
			else $tmCardsDiv.append("<li class='tm__card'>"+ deck[i].name +"</li>");	
		}
	}
}


const UI_turn_machine = UI_tm(tmDeck) //constructs tm with test objects

UI_turn_machine.init();
UI_turn_machine.draw();
UI_turn_machine.setActive();




/* sorts tmCards by agi (precursor to initiative)*/
function sortTurnOrder(deck){
	return deck.sort(compareAgi);

	function compareAgi(a,b){
	if(a.agi > b.agi) return -1;
	if(a.agi < b.agi) return 1;
	}
}

/* styles active card*/
function cardActivate(card){
	$("#turn_machine .tm__card").first().addClass("active-card");
}

/**

	LOG:
	- changed objects to UI_tm and UI_turn_machine for differentation

 */


/**

	NOTES:
	(1) - I wanted to separate the logic api from the UI api but it might be easier to just keep all UI concerned methods within the UI area of the code

 */
