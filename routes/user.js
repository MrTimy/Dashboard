const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/user', (req, res, next) => {
     res.sendFile(path.join(__dirname, '..', 'views', 'users','user.html'));
    // res.render('user', {pageTitle: 'Fenix-Wallet',path: '/user/userDash', userCSS : true})
})

router.get('/viewProfile.html', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'users','viewProfile.html'));
   // res.render('user', {pageTitle: 'View Profile', hasActivities: activity.length > 0})
})

router.get('/deposit.html', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'users','deposit.html'));
   // res.render('user', {pageTitle: 'Deposit', hasActivities: activity.length > 0})
})

router.get('/withdraw.html', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'users','withdraw.html'));
   // res.render('user', {pageTitle: 'Withdraw', hasActivities: activity.length > 0})
})

router.get('/transfer.html', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'users','transfer.html'));
   // res.render('user', {pageTitle: 'Transfer', hasActivities: activity.length > 0})
})

module.exports = router