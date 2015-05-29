var abx = require ('com.alcoapps.actionbarextras');
var colors = Alloy.Globals.colors;

function configureABX (_event) {
	
	abx.title = {
		text: "What do you want to say?",
		font: "LobsterTwo",
		color: colors.Text
	};
	
	abx.backgroundColor = colors.LightGray;
}
$.index.addListener('open', configureABX);





function openCategory(_event) {
    alert(_event.source.model);
}

$.index.open();
