'use strict';
const express = require('express');
const router = express.Router();
const tourControllers = require('../controllers/tourController');

// router.param('id', tourControllers.checkId);
router
  .route('/top-5-cheap')
  .get(tourControllers.aliasTopTour, tourControllers.getAllTours);

router
  .route('/')
  .get(tourControllers.getAllTours)
  .post(tourControllers.createTour);

router
  .route('/:id')
  .get(tourControllers.getTour)
  .patch(tourControllers.updateTour)
  .delete(tourControllers.deleteTour);

module.exports = router;
