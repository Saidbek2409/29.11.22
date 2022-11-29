let arr = [
    {
        id: 1,
        name: "SAHXZOD_SKUSHAY_UROK",
        budget: 250000,
        tax: 13,
        expensesPerYear: [
            {
                for: 'apparatura',
                total: 25000
            },
            {
                for: 'salary',
                total: 100000
            },
            {
                for: 'target',
                total: 1000
            },
        ]
    },
    {
        id: 2,
        name: "VALNTINAS_DAY",
        budget: 300000,
        tax: 13,
        expensesPerYear: [
            {
                for: 'flowers',
                total: 40000
            },
            {
                for: 'salary',
                total: 10000
            },
            {
                for: 'target',
                total: 30000
            },
        ]
    },
    {
        id: 3,
        name: "XIJIKS_VINE",
        budget: 450000,
        tax: 13,
        expensesPerYear: [
            {
                for: 'camera',
                total: 120000
            },
            {
                for: 'salary',
                total: 50000
            },
            {
                for: 'give away',
                total: 50000
            },
        ]
    },
    {
        id: 4,
        name: "SAIDBEK_CARS",
        budget: 700000,
        tax: 23,
        expensesPerYear: [
            {
                for: 'cars',
                total: 400000
            },
            {
                for: 'salary',
                total: 10000
            },
            {
                for: 'place',
                total: 50000
            },
        ]
    },
    {
        id: 5,
        name: "ANIME_SHOP",
        budget: 270000,
        tax: 13,
        expensesPerYear: [
            {
                for: 'toys-comics',
                total: 60000
            },
            {
                for: 'salary',
                total: 7000
            },
            {
                for: 'target',
                total: 17000
            },
        ]
    },
]

let success = []

let unsuccess = []

for (let item of arr) {
    item.expensesPerMonth = 0
    let budgetPerMonth = item.budget / 12



    for (let itemTwo of item.expensesPerYear) {
        item.expensesPerMonth += itemTwo.total / 12
    }
    item.percent = item.expensesPerMonth * 100 / budgetPerMonth

    if (item.percent >= 50) {
        console.log('самый затратный чел ' + item.name);
    } else {
        console.log('самый не затратный чел ' + item.name);
    }
}






