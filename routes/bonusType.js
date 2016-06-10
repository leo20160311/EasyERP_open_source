var bonusTypeHandler = require('../handlers/bonusType');
var express = require('express');
var router = express.Router();
var authStackMiddleware = require('../helpers/checkAuth');
var MODULES = require('../constants/modules');

module.exports = function (models) {
    var handler = new bonusTypeHandler(models);
    var moduleId = MODULES.BONUSTYPE;
    var accessStackMiddleware = require('../helpers/access')(moduleId, models);

    router.use(authStackMiddleware);
    router.use(accessStackMiddleware);

    router.get('/', handler.getList);
    router.get('/getForDD', handler.getForDD);

    router.post('/', handler.create);
    router.patch('/', handler.patchM);

    router.delete('/:_id', handler.remove);
    router.delete('/', handler.bulkRemove);

    return router;
};
