const trips = [{
        mph: 10,
        hours: 3
    },
    {
        mph: 30,
        hours: 2
    },
    {
        mph: 25,
        hours: 4
    }
];

trips.forEach((trip) => {
    console.log(trip.mph * trip.hours);
});