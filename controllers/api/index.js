const router = require('express').Router();

const userRoutes = require('./user-routes');
const gameRoutes = require('./game-routes');
const characterRoutes = require('./character-routes');
const leaderboardRoutes = require('./leaderboard-routes');


router.use('/users', userRoutes);
router.use('/game', gameRoutes);
router.use('/characters', characterRoutes);
router.use('/leaderboard', leaderboardRoutes);

module.exports = router;