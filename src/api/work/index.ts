var express = require('express');
var controller = require('./work.controller');
var router = express.Router();
var auth = require('../../auth');

router.get('/', auth.checkJwt, auth.checkScopes, controller.GetWorkAtRootForMember);
router.get('/:id', auth.checkJwt, auth.checkScopes, controller.GetWorkDetails);
router.get('/org', auth.checkJwt, auth.checkScopes, controller.GetWorkAtRootForOrg);
router.put('/', auth.checkJwt, auth.checkScopes, controller.Update);
router.post('/', auth.checkJwt, auth.checkScopes, controller.Insert);
router.delete('/:id', auth.checkJwt, auth.checkScopes, controller.Delete);

module.exports = router;
