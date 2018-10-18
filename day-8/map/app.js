const trips = [
    { miles: 5, hours: 1},
    { miles: 6, hours: 0.5},
    { miles: 4, hours: 2 }
    ];
const speeds = trips.map(trip => trip.miles / trip.hours); 

// Output the speeds
console.log(speeds);