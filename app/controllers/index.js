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

/**
 * When a category is clicked, open a new window with
 * the list of recipes of this category.
 */
function openCategory(_event) {
	
	var catId = _event.source.model;
    
    // Get the new view, and pass the clicked category id.
    var categoryView = Alloy.createController('category', catId).getView();
    categoryView.open();    
}

$.index.open();
