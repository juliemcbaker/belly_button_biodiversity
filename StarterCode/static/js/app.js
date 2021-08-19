d3.json("samples.json").then((data)=> {
    dropdown=d3.select("#selDataset")
    console.log(data);
});

// basic horizontal bar chart
var data = [{
    type: 'bar',
    x: [sample_values],
    y: [otu_ids],
    orientation: 'h'
    text: [otu_labels]
  }];

  // hover labels, but this only comes listed with line & scatterplots
var layout = {title: 'Hover over the points to see the text'};
Plotly.newPlot('myDiv', data, layout);  
Plotly.newPlot('myDiv', data);

