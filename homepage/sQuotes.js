var quotes =
	'['+
		'{"quote":"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.","quoter":"Albert Einstein"},'+
		'{"quote":"It is strange that only extraordinary men make the discoveries, which later appear so easy and simple.","quoter":"Georg C. Lichtenberg"},'+
		'{"quote":"There is no law except the law that there is no law.","quoter":"John Archibald Wheeler"},'+
		'{"quote":"Falsity in intellectual action is intellectual immorality.","quoter":"Thomas Chrowder Chamberlin"},'+
		'{"quote":"The saddest aspect of life right now is that gathers knowledge faster than society gathers wisdom.","quoter":"Isaac Asimov"},'+
		'{"quote":"The good thing about science is that it\'s true whether or not you believe in it.","quoter":"Neil deGrasse Tyson"},'+
		'{"quote":"Shall I refuse my dinner because I do not fully understand the process of digestion?","quoter":"Oliver Heaviside"},'+
		'{"quote":"Equipped with his five senses, man explores the universe around him and calls the adventure Science.","quoter":"Edwin Powell Hubble"},'+
		'{"quote":"Although Nature needs thousands or millions of years to create a new species, man needs only a few dozen years to destroy one.","quoter":"Victor Scheffer"},'+
		'{"quote":"I believe there are 15 747 724 136 275 002 577 605 653 961 181 555 468 044 717 914 527 116 709 366 231 425 076 185 631 031 296 protons in the universe and the same number of electrons.","quoter":"Sir Arthur Eddington"}'+
	']';

function randomNumb()
{
	var i = Math.floor(Math.random() * 11);
	if (i==10) return 9;
	else return i;
}

var quoteLoader = function()
				{
					var rand = randomNumb();
					var quote_quoter = JSON.parse(quotes);
					var blkquote = quote_quoter[rand].quote;
					var blkquoter = quote_quoter[rand].quoter;
					return[blkquote, blkquoter];
				};

var quoteGen = quoteLoader();