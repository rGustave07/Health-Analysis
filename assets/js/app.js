// D3 Scatterplot Assignment

// Students:
// =========
// Follow your written instructions and create a scatter plot with D3.js.

let makeResponsive = () => {

  let svgArea = d3.select("body").select("svg");

  let svgWidth = window.innerWidth;
  let svgHeight = window.innerHeight;

  margin = {
      top: 50,
      bottom: 50,
      right: 50,
      left: 50
  };

  let graphHeight = svgHeight - margin.top - margin.bottom;
  let graphWidth = svgWidth - margin.left - margin.right;

  svg = d3.select('.chartDiv')
          .append('svg')
          .attr('height', svgHeight)
          .attr('width', svgWidth)


  let chartGroup = svg.append("g")
                      .attr('transform', `translate(${margin.left}, ${margin.top})`)


  //Chart Set, read in Data
  d3.csv('Data/marriage_income_data.csv', (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
  })








}

makeResponsive();
d3.select(window).on('resize', makeResponsive);
