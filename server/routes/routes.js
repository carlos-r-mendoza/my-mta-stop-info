const Mta = require('mta-gtfs');
const mta = new Mta({
  key: process.env.MTA_API_KEY, // only needed for mta.schedule() method
  feed_id: 21 // optional, default = 1
});

const routes = {
  method: 'GET',
  path:'/mta-stops', 
  handler(request, reply) {

    mta.stop().then((result) => {
      console.log(result);
      return reply(result);
    }).catch((err) => {
      console.log(err);
    });

    // mta.schedule(['D08']).then((result) => {
    //   console.log(result);
    // })
    //   .catch((err) => {
    //   console.log('Error', err)
    // })

    // mta.status('subway').then(function (result) {
    //   console.log(result);
    // });

    // Mta.prototype.scheduleToISO = function (id) {
    //   // return this.schedule(id).then(result => new Date(result * 1000));
// };

  }
};

module.exports = routes;
