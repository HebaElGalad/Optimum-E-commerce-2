// Deliverable #2 --> MAIN PAGE
// Define Main object to create products
var MakeProduct = function (id, name, category, picture_url, picture_alt, price, my_classes) {
	this.id				= id,
	this.name			= name,
	this.category		= category,
	this.picture_url	= picture_url,
	this.picture_alt	= picture_alt,
	this.price			= price + ".00 EGP",
	this.my_classes		= my_classes
};

var book1 = new MakeProduct ("book_1","Eloquent JS", "Computer & Technology", "images/card-books-1.png", "A bird", 120, "book product");

var book2 = new MakeProduct ("book_2","Davinci Code", "Science Fiction & Fantasy", "images/card-books-2.jpg", "The Monalisa face", 300, "book product");

var book3 = new MakeProduct ("book_3","Harry Potter", "Science Fiction & Fantasy", "images/card-books-3.jpg", "A child riding horse", 250, "book product");

var movie1 = new MakeProduct ("movie_1","The Hobbit", "Drama", "images/card-movies-3.jpg", "A man & a bear standing on a rock", 95, "movie product");

var movie2 = new MakeProduct ("movie_2","Iron Man 3", "Action", "images/card-movies-2.jpg","iron man", 100, "movie product");

var movie3 = new MakeProduct ("movie_3","Captain America", "Action", "images/card-movies-1.jpg","A man wears costume", 115, "movie product");

// Main object contain arrays of book, albums and movies objects
var products = {
	books: [book1, book2, book3],
	movies: [movie1, movie2, movie3]
};
// GET all add-content divs
var contentCard = $('.add-content');

// array of best sellers products
var bestSellers = [book1, movie2, book2];

// GET all best-seller divs
var get_best_seller = $('.best-seller');

$('document').ready(get_products);

function get_products() {
	add_to_page();
	// add best sellers in page
	add_best_seller();
}


function add_to_page(arrgument){
	var counter = 0;
	for (var key in products) {
		var arr = products[key];

		for (var i = 0; i < arr.length; i++) {
			arrgument = arr[i];
		// add item id & classes
		$($(contentCard)[i + counter]).addClass(arrgument.my_classes).attr("id", arrgument.id);
		// add picture_url & alt
		$($(contentCard)[i + counter]).find('a:first').append($('<img>').addClass('card-img-top').attr({src: arrgument.picture_url, alt: arrgument.picture_alt}));
		// add item name
		$($(contentCard)[i + counter]).last().find('h2').append($('<a href=#>').addClass("text-dark text-uppercase name").text(arrgument.name));
		// add item category
		$($(contentCard)[i + counter]).last().find('h3').append($('<a href=#>').addClass("text-info category").text(arrgument.category));
		// add item price
		$($(contentCard)[i + counter]).last().find('p:nth-last-of-type(1)').addClass("price").html(arrgument.price);
		}
	counter = counter + arr.length;
	}
}

function add_best_seller(arrgument){
	var counter = 0;
	for (var j = 0; j < bestSellers.length; j++) {
		arrgument = bestSellers[j];

		$($(get_best_seller)[j+ counter]).addClass(arrgument.my_classes).attr("id", arrgument.id);

		$($(get_best_seller)[j + counter]).find('a:first').append($('<img>').addClass('card-img-top').attr({src: arrgument.picture_url, alt: arrgument.picture_alt}));

		$($(get_best_seller)[j + counter]).last().find('h2').append($('<a href=#>').addClass("text-dark text-uppercase name").text(arrgument.name));

		$($(get_best_seller)[j + counter]).last().find('h3').append($('<a href=#>').addClass("text-info category").text(arrgument.category));

		$($(get_best_seller)[j + counter]).last().find('p:nth-last-of-type(1)').addClass("price").append(arrgument.price);
	}
	counter = counter + get_best_seller.length;
}


// Button Search gp
$('.filter-btn').on('click', filter_products);

function filter_products(event) {
	var userSelectedButton = $(event.target).val();
	if (userSelectedButton === 'product') {
		$('.book').show();
		$('.movie').show();
		$('.album').show();
	} 
	if (userSelectedButton === 'book') {
		$('.book').show();
		$('.movie').hide();
		$('.album').hide();
		// $('.filter-btn').val('product').removeClass('btn-danger-modified').addClass('btn-light bg-white');
		// $('.filter-btn').val('book').addClass('btn-danger-modified').removeClass('btn-light bg-white');
	} 
	if (userSelectedButton === 'movie') {
		$('.book').hide();
		$('.movie').show();
		$('.album').hide();
	} 
	if (userSelectedButton === 'album') {
		$('.book').hide();
		$('.movie').hide();
		$('.album').show();
	}
}

// ADD TO CART

$('.cart').on('click', add_to_cart);
function add_to_cart(event) {
	var addItems = $(event.target).parents('.product').attr('id');
	console.log(addItems);

	localStorage.setItem(addItems, JSON.stringify(posts[0].attributes));
	JSON.parse(localStorage.getItem(addItems));
	console.log("I'm clicked");
}