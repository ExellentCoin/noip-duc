const axios = require('axios');
const cron = require('node-cron');
require('dotenv').config();

// Startup run
axios
  .get(
    `http://${process.env.NOIP_USERNAME}:${process.env.NOIP_PASSWORD}@dynupdate.no-ip.com/nic/update?hostname=${process.env.NOIP_HOSTNAME}`
  )
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.error(err);
  });

// Run as cron job
cron.schedule('*/30 * * * *', () => {
  axios
    .get(
      `http://${process.env.NOIP_USERNAME}:${process.env.NOIP_PASSWORD}@dynupdate.no-ip.com/nic/update?hostname=${process.env.NOIP_HOSTNAME}`
    )
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.error(err);
    });
});
