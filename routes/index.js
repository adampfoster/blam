
/*
 * GET home page.
 */

// exports.index = function(req, res){
//   res.render('index', { title: 'Express' });
// };
// 
var vidget = 'Collective';
var records =
	[
		{
			firstName: 'Rose',
			lastName: 'Bud',
			sex: 'female'
		},{
			firstName: 'Dodo',
			lastName: 'Barnes',
			sex: 'male'
		},{
			firstName: 'Nigel',
			lastName: 'Worthington',
			sex: 'male'
		},{
			firstName: 'Janine',
			lastName: 'Butler',
			sex: 'female'
		},{
			firstName: 'Candice',
			lastName: 'Rose',
			sex: 'female'
		}
	];
var services =
	[
		{
			name: 'Basic',
			level: '1',
			price: '$10 / m'
		},{
			name: 'Pro',
			level: '2',
			price: '$15 / m'
		},{
			name: 'Startup',
			level: '3',
			price: '$20 / m'
		},{
			name: 'Business',
			level: '4',
			price: '$50 / m'
		},{
			name: 'Enterprise',
			level: '5',
			price: '$100 / m'
		}
	];

app = require('../app');

app.get('/', function(req, res) {
	res.render('index.ejs', {
	    services: services,
	    title: "Blam"
	});
});

app.get('/users', function(req, res) {
	res.render('users.ejs', {
	    clients: records,
	    title: "Blam"
	});
});

app.get('/users/:userID', function(req, res) {
	res.send('Username: '+req.params.userID);
});