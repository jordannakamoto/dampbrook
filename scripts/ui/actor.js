var tmCard = UI_turn_machine.active(); //tmCard is the card we're looking at from the top of turn machine deck

const UI_act = (tmCard) => { //tmCard becomes actor for our UI
	var actor = tmCard;

	/*----------  METHODS  ----------*/
	return {
		init: () => {console.log(actor + "'s actor display has been painted")},
		//use html + css to draw cards on screen
		draw: () => {toDOM("stats"); toDOM("portrait")},

	}

	/*----------  HELPER Fx  ----------*/
	
	function toDOM(element){ // adds actor's UI elements to actor area
	 	/* jquery DOM searches*/
		var $actorStatsDiv = $("#actor #stats");
		var $actorPortraitDiv = $("#actor #portrait");

		/* switches for each element we want to draw to DOM*/
		var target; //waiting for div to target
		var package; //waiting for prepared data to append
		if (element=="stats") {packager("stats"); target = $actorStatsDiv}
		else if (element=="portrait") {packager("portrait"); target = $actorPortraitDiv};

		/* packaging functions : prepares elements to be added above*/
		function packager(e){
			if (e=="stats") {
				pString = JSON.stringify(actor);
				pString = pString.replace(/,/g, "<br>"); //is this efficient?
				pString = pString.replace(/"/g, "");
				pString = pString.replace("{", "");
				pString = pString.replace("}", "");
				pString = pString.replace(/:/g, " : ");
				package = pString;
			}
		}

		/* here we'll append the output of package*/
		target.append(package)
	}
}


UI_actor = UI_act(tmCard); //this will soon be.. the active card

UI_actor.draw();