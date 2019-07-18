const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000
// require('dotenv').config();
// // const { Pool } = require("pg")
// const connectionString = process.env.DATABASE_URL ||  process.env.DATABASE_URL1;
// const pool = new Pool({connectionString: connectionString});
// const homepageController = require("./model/homepageModel.js");

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  // .get('/getSwitches', homepageController.getSwitches)
  // .get('/getCaps', homepageController.getCaps)
  // .post('/addKeyboard', homepageController.addKeyboard)
  // .post('/addSwitches', homepageController.addSwitches)
