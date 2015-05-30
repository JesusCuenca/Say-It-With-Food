var categoryId = arguments[0] || {};
var abx = require ('com.alcoapps.actionbarextras');
var colors = Alloy.Globals.colors;

var categories 	= $.categoryCollection,
	recipes		= $.recipeCollection;

	categories.fetch();

var category 	= categories.get(categoryId);


/**
 * Configure action bar styles with the Action Bar
 * Extras Plugin.
 */
function configureABX (_event) {
	
	abx.title = {
		text: category.get('name'),
		font: "LobsterTwo",
		color: colors.White
	};
	
	abx.backgroundColor = colors[category.get('slug')];
	
	$.parallax.backgroundColor = colors[category.get('slug')];
}
$.categoryWindow.addListener('open', configureABX);


function doParallaxEffect (_event) {
	
	$.parallax.top = -( _event.y * 0.25 ); 
}
$.recipeScrollView.addListener('scroll', doParallaxEffect);


function filterRecipes () {
	
}

