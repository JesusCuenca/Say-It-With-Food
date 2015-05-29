var abx = require ('com.alcoapps.actionbarextras');
var colors = Alloy.Globals.colors;

/**
 * Configure action bar styles with the Action Bar
 * Extras Plugin.
 */
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
	
	var catId = _event.source.model;
    
    var categoryView = Alloy.createController('category', catId).getView();
    categoryView.open();    
}

$.index.open();
