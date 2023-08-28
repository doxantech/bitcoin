const chart =document.querySelector('#chart').getContext('2d');

// create a new chart instance //
new chart(chart, {
    type:'line'
    Data: {
        labels: ['jan', 'feb', 'mar',]
        datasets: [ 
            {
             label:'GOLD',  

            }
        ]

    }
})