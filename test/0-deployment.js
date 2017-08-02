const ADReview = artifacts.require("ADReview");
const bcConnector = require("../src/app/bcConnector.js")(ADReview);
const Promise = require("bluebird");

contract('ADReview', function(accounts) {
    before('init deployed objects', function(){
        return ADReview.deployed()
        .then(instance => instance.addRfAList(["0x000100250133"], "0x0144", 13));
    });

    it("should has RfAs deployed", function() {
        return bcConnector.promiseAcSeries(ADReview)
        .then( acSeries => {
            console.log('acSeries>', acSeries);
        });
    });

});
