var controller = require('./status.controller');
var router = express.Router();
var auth = require('../../auth');

router.get('/', controller.public);
router.get('/environment', auth.checkJwt, auth.checkScopes, controller.environment);

module.exports = router;
