
WRZUC NA SWOJEGO GITHUBA i wyslij na maila prowadzacego

(function (global) {
	var mapArray;

	if (!global.UAM) {
		global.UAM = {};
	}
    
    global.UAM.library = []; 

    // BELOW SAMPLES SHOW STRUCTURE OF CATEGORY OBJECT AND STUCTURE OF BOOKS OBJECT INSIDE CATEGORY 
    //   
    // global.UAM.library.push({
    //     categoryName: 'Kryminał',
    //     books: []
    // });
    
    // global.UAM.library[0].books.push({
    //     title: 'Pan Tadeusz',
    //     count: 3
    // });
    
    //////////////////////////////////////////////////////////////////////////////////////

    // newCategoryName: String
    global.UAM.addCategory = function (newCategoryName) {
        // function should return new category object
		global.UAM.library.push({
			categoryName: newCategoryName,
			books: []
		});
    };

    // categoryObject: Object
    global.UAM.removeCategory = function (categoryObject) {
        for( var i=0; i<global.UAM.library.length; i++)
		{
			if(global.UAM.library[i].categoryName==categoryObject.categoryName)
			{
				global.UAM.library.splice(i,1);
			}
		}
    };

    // categoryObject: Object
    // title: String
    // count: Number 
    global.UAM.addBookToCategory = function(categoryObject, title, count) {
        global.UAM.library[global.UAM.library.indexOf(categoryObject)].books.push({
			title: title,
			count: count
		});
        // function should return new book object
    };

    // categoryObject: Object
    // bookObject: Object
    global.UAM.removeBookFromCategory = function(categoryObject, bookObject) {
		var index = global.UAM.library.indexOf(categoryObject);
        for (var i=0; i<global.UAM.library[index].books.length; i++)
		{
			if(global.UAM.library[index].books[i].title==bookObject.title)
			{
				global.UAM.library[index].books.splice(i,1);
			}
		}
    };

    // categoryName: String
    global.UAM.getCategoryByName = function(categoryName) {
        for (var i=0; i<global.UAM.library.length; i++)
		{
			if(global.UAM.library[i].categoryName==categoryName)
			{
				return global.UAM.library[i].categoryName==categoryName;
			}
		}
        // function should return category object
    };

    // title: String
    global.UAM.getBookByTitle = function(title) {
        for (var i=0; i<global.UAM.library.length; i++)
		{
			for(var j=0; i<global.UAM.library[i].books[j])
			{
				if(global.UAM.library[i].books[j].title==title)
				{
					return global.UAM.library[i].books[j];
				}
					
			}
		}
        // function should return book object
    };

    // bookObject: Object
    global.UAM.returnBook = function(bookObject) {
        for (var i=0; i<global.UAM.library.length; i++)
		{
			for(var j=0; i<global.UAM.library[i].books[j])
			{
				if(global.UAM.library[i].books[j].title==bookObject.title)
				{
					global.UAM.library[i].books[j].count++;
				}
					
			}
		}
    };
    
    global.UAM.getBorrowedBooks = function() {
		let array = [];
        for (var i=0; i<global.UAM.library.length; i++)
		{
			for(var j=0; i<global.UAM.library[i].books[j])
			{
				if(global.UAM.library[i].books[j].count == 0)
				{
					array.push(global.UAM.library[i].books[j]);
				}
					
			}
		}
        // return array of book objects
    };

}(window));

/*

Przykład użycia:

var newAircraft1 = addAircraft('SP-XY1');
var newAircraft2 = addAircraft('SP-XY2');

addWorkToAircraft(newAircraft1, 'serviceXY1a', 110);
addWorkToAircraft(newAircraft1, 'serviceXY1b', 130);
reduceTimeToExecute(newAircraft1, 20);

var sxy2a = addWorkToAircraft(newAircraft2, 'serviceXY2a', 130);
var sxy2b = addWorkToAircraft(newAircraft2, 'serviceXY2b', 160);
reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft1 ]

removeAircraft(newAircraft1);

getAircraftsForRepairs(100); // []

reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft2 ]

*/
