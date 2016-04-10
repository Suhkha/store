//-- SETUP EXPRESS
var express 	= require('express');
var app 		= express();
var bodyParser	= require('body-parser');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//-- DEFINE THE PORT FOR OUR APP
var port = process.env.PORT || 8000;

//-- SETUP DATABASE IN MONGODB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/store');

//-- SETUP MODEL
var Store = require('./app/models/store');

//-- ROUTES FOR OUR API
var router = express.Router();
app.use('/api', router);
app.listen(port);


//-- MIDDLEWARE TO USE FOR ALL REQUESTS
router.use(function(req, res, next){
	console.log('At this point...everything is okay...');
	next();
});

router.get('/', function(req, res){
	res.json({message: 'Welcome to our store API!'});
});

//--CRUD
router.route('/store')

	.post(function(req, res){
		var product = new Store();

		product.name 		= req.body.name;
		product.price 		= req.body.price;
		product.category 	= req.body.category;
		product.description = req.body.description;
		product.active 		= req.body.description;

		product.save(function(err){
			if(err)
				res.send(err);
			res.json({ message: 'Product created!' });
		});
	})

	.get(function(req, res){
		Store.find(function(err, products){
			if(err)
				res.send(err);

			res.json(products);
		});
	});

//--GET DATA ABOUT A SPECIFIC ID
router.route('/store/:product_id')
	
	.get(function(req, res){
		Store.findById(req.params.product_id, function(err, product){
			if(err)
				res.send(err);

			res.json(product);
		});
	})

	.put(function(req, res){
		Store.findById(req.params.product_id, function(err, product){
			if(err)
				res.send(err);

			product.name 		= req.body.name;
			product.price 		= req.body.price;
			product.category 	= req.body.category;
			product.description = req.body.description;
			product.active 		= req.body.description;

			product.save(function(err){
				if(err)
					res.send(err);

				res.json({ message: 'Product updated!' });
			});
		});
	})

	.delete(function(req, res){
		Store.remove({
			_id: req.params.product_id
		}, function(err, product){
			if(err)
				res.send(err);

			res.json({ message: 'Product deleted!' });
		});
	});