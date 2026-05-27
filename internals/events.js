const EventsEmitter = require('events');
const celebrity = new EventsEmitter();

// Subscribe to celebrity from Observer 1
celebrity.on('race win', function() {
    console.log('Congratulations! You are the best')
});

// Subscribe to celebrity from Observer 2
celebrity.on('race win', function() {
    console.log('Boo! I could have done better than that!')
});

celebrity.emit('race win');
celebrity.emit('race lost');
celebrity.emit('race win');