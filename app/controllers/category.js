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

/**
 * Adding a parallax effect to the view.
 * When the recipe list scrolls, move the parallax
 * view as well, but with less velocity. 
 */
function doParallaxEffect (_event) {
	
	$.parallax.top = -( _event.y * 0.2 ); 
}
$.recipeScrollView.addListener('scroll', doParallaxEffect);

/**
 * Filter the recipe list so only the recipes of the
 * category clicked are shown.
 */
function filterRecipes () {
	
}

/**
 * When a recipe is clicked, open the recipe details view. 
 */
function openRecipe (_event) {
	alert(_event.source.model);
}

