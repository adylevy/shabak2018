db.getCollection('logs').aggregate([ { $match: {} }, { $group: {_id: {
            uid: '$uid',
            uip: '$uip',
            day :  { $substr : ["$date", 0, 2 ] },
            month : { $substr : ["$date", 3, 2 ] },
            year :   { $substr : ["$date", 6, 4 ] },
        }, sum: { $sum: 1}  } }, { $match: { sum : { $gt: 100 } } },
    { $project: {
            _id: 0,
            uid: '$_id.uid',
            uip: '$_id.uip'
        }
    },
    { $match: { uid: { $nin: [2449,
                    6796,
                    9237,
                    4024,
                    3538,
                    3608,
                    7239,
                    435,
                    5206,
                    2211] } } }
],{allowDiskUse:true})