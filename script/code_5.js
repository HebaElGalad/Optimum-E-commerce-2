var products = {
	"books": [
		{
			"id": "books1",
			"name": "Python",
			"category": "books",
			"picture_url": "images/python.jpg",
			"price": '540LE'
		},
		{
			"id": "books2",
			"name": "php",
			"category": "books",
			"picture_url": "images/php.jpg",
			"price": '850LE'
		},

		{
			"id": "books3",
			"name": "Javascript",
			"category": "books",
			"picture_url": "images/javascript.jpg",
			"price": '590LE'
		}
	],
	"albums": [
		{
			"id": "albums1",
			"name": "Metallica",
			"category": "albums",
			"picture_url": "images/metallica.jpg",
			"price": '400LE'
		},
		{
			"id": "albums2",
			"name": "Garage Inc",
			"category": "albums",
			"picture_url": "images/garage_inc.jpg",
			"price": '400LE'
		},
		{
			"id": "albums3",
			"name": "Hardwired",
			"category": "albums",
			"picture_url": "images/hardwired.jpg",
			"price": '400LE'
		}
	],
	"movies": [
		{
			"id": "movies1",
			"name": "Casper",
			"category": "movies",
			"picture_url": "images/casper.jpg",
			"price": '450LE'
		},
		{
			"id": "movies2",
			"name": "The Mask",
			"category": "movies",
			"picture_url": "images/the_mask.jpg",
			"price": '450LE'
		},
		{
			"id": "movies3",
			"name": "Home Alone",
			"category": "movies",
			"picture_url": "images/home_alone.jpg",
			"price": '450LE'
		}
	]
};

// This event listen on the dropdown of the categories
// and show and hide them depends on the user input
$('#user-select').on('change', function (event) {
	event.preventDefault();
	var userSelectOption = event.target.value;
	if (userSelectOption === "categ") {
		$(".books").show();
		$(".movies").show();
		$(".albums").show();
	}
	if (userSelectOption === "books") {
		$(".books").show();
		$(".movies").hide();
		$(".albums").hide();
	}
	if (userSelectOption === "movies") {
		$(".movies").show();
		$(".books").hide();
		$(".albums").hide();
	}
	if (userSelectOption === "albums") {
		$(".albums").show();
		$(".movies").hide();
		$(".books").hide();
	}
});

document.getElementById('search-bar').addEventListener('submit', function (e) {
	e.preventDefault();
	// var arr = Object.entries(products);
	var searchBar = document.forms["search-bar"].querySelector("input");
	var userInput = searchBar.value.toLowerCase();
	// below code return the value of the option user selected from the 
	// drop-down menu
	var optionSelect = document.getElementById('user-select');
	var userOption = optionSelect.value;
	var searchFoundReturn;
	if (userOption === "categ") {
		for (var i = 0; i <= Object.entries(products)[i].length; i++) {
			for (var j = 0; j < Object.entries(products)[i][1].length; j++) {
				if (userInput === Object.entries(products)[i][1][j].name) {
					$(".books").hide();
					$(".movies").hide();
					$(".albums").hide();
					searchFoundReturn = Object.entries(products)[i][1][j].id;
					$("#" + searchFoundReturn).show();
				}
			}
		}
	}
	else {
		for (var x = 0; x <= Object.keys(products).length; x++) {
			if (userOption == Object.keys(products)[x]) {
				for (var k = 0; k < Object.entries(products)[x][1].length; k++) {
					if (userInput === Object.entries(products)[x][1][k].name) {
						$(".books").hide();
						$(".movies").hide();
						$(".albums").hide();
						searchFoundReturn = Object.entries(products)[x][1][k].id;
						$("#" + searchFoundReturn).show();
					}
				}
			}
		}
	}
});

$(window).on('load', function () {
	addToPage();
});
function addToPage() {
	document.querySelector("#cart .price").innerHTML = localStorage.getItem("price");
	for (var keys in products) {
		var appendToDropDown = '<option class="capitalize" value="' + keys + '">' + keys + '</option>';
		$("#user-select").append(appendToDropDown);
	}
	var arr = Object.entries(products);
	for (var j = 0; j < Object.keys(products).length; j++) {
		for (var i = 0; i < Object.entries(products)[j][1].length; i++) {
			var id =  arr[j][1][i].category + [i + 1];
			var cardContent = '<div class="col-4">\
								<div id="'+ i + '" class="card p-4 border-0 text-center product" style="width: 18rem;">\
									<a href="details.html?id='+ id +'"><img class="card-img-top img"  alt="Card image cap"></a> \
								  	<div class="card-body"> \
									    <h5 class="card-title name"></h5> \
									    <p class="card-text category"></p> \
									    <a href="details.html?id='+ id +'" class="btn btn-primary price"></a> \
								  	</div>\
								</div>\
							 </div>'
			$('#products').append(cardContent);
			$('#' + i).attr("id", arr[j][1][i].category + [i + 1]);
			$('#' + arr[j][1][i].category + [i + 1]).addClass(arr[j][1][i].category);
			$('#' + arr[j][1][i].category + [i + 1] + ' .name').text(arr[j][1][i].name);
			$('#' + arr[j][1][i].category + [i + 1] + ' .category').text(arr[j][1][i].category);
			$('#' + arr[j][1][i].category + [i + 1] + ' .price').text(arr[j][1][i].price);
			$('#' + arr[j][1][i].category + [i + 1] + ' .img').attr('src', arr[j][1][i].picture_url);
		}
	}
}

function addToDetails() {
	var querystring = window.location.search.substring(1);
	var equalIndex = querystring.indexOf('=');
	var idValue = querystring.slice(equalIndex+1);
	var arr = Object.entries(products);
	for (var j = 0; j < Object.keys(products).length; j++){
		for (var i = 0; i < Object.entries(products)[j][1].length; i++){
			if (idValue === arr[j][1][i].id) {
				$('#details .product-name').text(arr[j][1][i].name);
				$('#details .category').text(arr[j][1][i].category);
				$('#details .price').text(arr[j][1][i].price);
				$('#details .picture_url').attr('src', arr[j][1][i].picture_url);
			}
		}
	}
	
}

$("#addtocart").on('click', function (event) {
	event.preventDefault();
	var itemPrice = document.querySelector('#details .price').innerHTML;
	var itemName = document.querySelector('#details .product-name').innerHTML;
	localStorage.setItem('price', itemPrice);
	localStorage.setItem('name', itemName);
	document.querySelector("#cart .price").innerHTML = localStorage.getItem("price");
});


function checkout() {
	document.querySelector('#checkout .details').innerHTML = localStorage.getItem("name");
	document.querySelector('#checkout .price').innerHTML = localStorage.getItem("price");
	document.querySelector('#checkout .total').innerHTML = localStorage.getItem("price");
	document.querySelector('#sum .sub-total').innerHTML = localStorage.getItem("price");
	document.querySelector('#sum .total').innerHTML = localStorage.getItem("price");
}
