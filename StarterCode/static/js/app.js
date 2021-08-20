// get json file & console log it
d3.json("samples.json").then((data)=> {
    // dropdown=d3.select("#selDataset")
    console.log(data);
// data.names.forEach(element=> ())
});

// basic horizontal bar chart
// var data = [{
//     type: 'bar',
//     x: [sample_values],
//     y: [otu_ids],
//     orientation: 'h',
//     text: [otu_labels]
//   }];

  // hover labels, but this only comes listed with line & scatterplots
// var layout = {title: 'Hover over the points to see the text'};
// Plotly.newPlot('myDiv', data, layout);  
// Plotly.newPlot('myDiv', data);


// marker size, color, and symbol as an array
// var trace1 = {
//     x: [otu_ids],
//     y: [sample_values],
//     mode: 'markers',
//     marker: {
//       color: [otu_ids],
//       size: [sample_values],
//       opacity: [0.6, 0.7, 0.8, 0.9]
//     },
//     type: 'scatter',
//     text: [otu_labels]
//   };
  
//   var trace2 = {
//     x: [1, 2, 3, 4],
//     y: [11, 12, 13, 14],
//     mode: 'markers',
//     marker: {
//       color: 'rgb(31, 119, 180)',
//       size: 18,
//       symbol: ['circle', 'square', 'diamond', 'cross']
//     },
//     type: 'scatter'
//   };
  
//   var trace3 = {
//     x: [1, 2, 3, 4],
//     y: [12, 13, 14, 15],
//     mode: 'markers',
//     marker: {
//       size: 18,
//       line: {
//         color: ['rgb(120,120,120)', 'rgb(120,120,120)', 'red', 'rgb(120,120,120)'],
//         width: [2, 2, 6, 2]
//       }
//     },
//     type: 'scatter'
//   };
  
  // var data = [trace1, trace2, trace3];
  
  // var layout = {showlegend: false};
  
  // Plotly.newPlot('myDiv', data, layout);