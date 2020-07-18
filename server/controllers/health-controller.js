// get health of application
exports.getHealth = (req, res) => {
  console.log('In controller - getHealth');
  res.json({
    status: 'UPPP',
  });
connection.query("select * FROM product WHERE prod = '"+ req.body.prod +"' AND product_name = '"+ req.body.product_name +"'",function(error, results){});
};
