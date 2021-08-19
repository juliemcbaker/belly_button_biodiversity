d3.json("samples.json").then((data)=> {
    dropdown=d3.select("#selDataset")
    console.log(data);
});