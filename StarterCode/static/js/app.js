// get json file & console log it; populate dropdown list
d3.json("samples.json").then((data)=> {
    dropdown=d3.select("#selDataset")
        console.log(data);
    data.names.forEach(element=> {
        dropdown.append("option").text(element).property("value",element)
    });        
});

// function to create charts
function create_charts(choose_data){
    d3.json("samples.json").then((data)=> {
      user_choice = data.samples.filter(sample=> sample.id == choose_data)
      user_choice = user_choice[0]
      meta_choice = data.metadata.filter(meta_sample=> meta_sample.id == choose_data)    
      meta_choice = meta_choice[0]
      console.log(user_choice)
      console.log(meta_choice)
    
    // basic horizontal bar chart; reverse makes largest value appear at top of graph
    var hbar_data = [
      {
        type: 'bar',
        x: user_choice.sample_values.slice(0,10).reverse(), 
        y: user_choice.otu_ids.map(el => "OTU " + el).slice(0,10).reverse(),
        orientation: 'h',
        text: user_choice.otu_labels.slice(0,10).reverse()
      }
    ];    
    var barlayout={
        title: (`Top Ten OTUs for ID ${user_choice.id}`)
      };
    Plotly.newPlot('bar', hbar_data, barlayout);
    
    //bubble chart
    var bubble_data = [
      {
        x: user_choice.otu_ids,
        y: user_choice.sample_values,
        text: user_choice.otu_labels,
        mode: "markers",
        marker: {
            color: user_choice.otu_ids,
            size: user_choice.sample_values,
            text: user_choice.otu_labels
        }
      }
    ];
    var bubble_layout={
        title: (`All OTUs for ID ${user_choice.id}`)
    };
    Plotly.newPlot("bubble", bubble_data, bubble_layout)

    // demographics table 
    var values = [
      ['id', 'ethnicity', 'gender', 'age', 'location', 'bbtype', 'washfreq'],
      [meta_choice.id, meta_choice.ethnicity, meta_choice.gender, meta_choice.age, 
        meta_choice.location, meta_choice.bbtype, meta_choice.wfreq]
    ]
    console.log(values)
    var demog_data = [
      {
        type: "table",
        header: {
            values: ["Key", "Value"],
            align: "center",
            line: {width: 1, color: 'black'},
            fill: {color: "lightblue"},
            font: {family: "Ariel", size: 120, color: "black"}
          },
        cells: {
          values: values,
          align: "center",
          line: {color: "black", width: 1},
          font: {family: "Arial", size: 110, color: ["black"]}
          }
        
      }
    ];
    console.log(demog_data)

    Plotly.newPlot("sample-metadata", demog_data)


    // washing gauge
    var gauge_data = [
      {
        domain: { x: [0,1], y: [0,1]},
        value: meta_choice.wfreq,
        title: { text: "Belly Button Weekly Washing Frequency"},
        type: "indicator",
        mode: "guage+number",
        gauge: { 
          axis: { range: [null, 9]},
          steps: [
            {range: [null, 3], color: "red" },
            {range: [3, 6], color: "yellow"},
            {range: [6,9], color: "green"}
          ]
                 
        }

      }
    ];
    var gauge_layout = { width: 600, height: 500, margin: {t: 0, b: 0} };
    Plotly.newPlot("gauge", gauge_data, gauge_layout);



  })

}




// updates things when something is chosen

function optionChanged(choose_data){
  console.log(choose_data)
  create_charts(choose_data)
}