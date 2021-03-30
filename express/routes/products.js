var express = require('express');
var router = express.Router();
const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'TekinDar1331',
  server: '152.64.0.4', // You can use 'localhost\\instance' to connect to named instance
  database: 'TekinDarSentezLive',
};
const dbConnect = async () => {
  // 'mssql://sa:TekinDar1331@152.64.0.4/TekinDarSentezLive',
  try {
    // make sure that any items are correctly URL encoded in the connection string
    const connected = await sql.connect(config);
    console.log('TekindarSentezLiveDataBase Connection Successful');
  } catch (err) {
    console.log('err occured', err);
  }
};
dbConnect();

/* GET users listing. */
router.get('/', function (req, res, next) {
  sql
    .connect(config)
    .then(() => {
      return sql.query`select * from dbo.Erp_Inventory`;
    })
    .then(result => {
      res.json(result?.recordsets);
    })
    .catch(err => {
      // ... error checks
    });

  sql.on('error', err => {
    // ... error handler
  });
});

module.exports = router;
