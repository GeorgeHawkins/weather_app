import React, { useState, useEffect } from 'react';
import DownArrow from "./../icons/down-arrow.png";
import getRampAlgorithms from "./../api.js";
import { Doughnut } from "react-chartjs-2";

function Ramps() {

  const [RampDist, setRampDist] = useState([]);

  // Receives the data from the api.js file, loops through each ramp to find which algorithm that ramp was generated, counting how many times each algorithm occurred in each set of 50 ramps. Each value is converted to a percentage of the total and saved to a state variable (RampDist) for use in a chartjs doughnut chart
  useEffect(() => {
    getRampAlgorithms((ramps) => {
      const count = 50;
      let Alg1, Alg2, Alg3, Alg4, Alg5;
      Alg1 = Alg2 = Alg3 = Alg4 = Alg5 = 0;

      for (let i = 0; i < count; i++) {

        switch (ramps[i].algorithm) {
          case "Algorithm 1":
            Alg1++;
            break;
          case "Algorithm 2":
            Alg2++;
            break;
          case "Algorithm 3":
            Alg3++;
            break;
          case "Algorithm 4":
            Alg4++;
            break;
          case "Algorithm 5":
            Alg5++;
            break;
          default:
            break;
        }
      }

      const algorithmDistribution = [Alg1, Alg2, Alg3, Alg4, Alg5];
      const algorithmDistributionP = algorithmDistribution.map(x => Math.round((x/50)*100));

      setRampDist(algorithmDistributionP);

    });
  }, []);

  return (
    <div className="RampChartSection">
      <div className="RoutesRow" style={{ padding: "10px" }}>
        <div className="RoutesHeaderText">RAMP CHART</div>
        <img src={DownArrow}
          alt="Minimize"
          className="Minimize" />
      </div>


      <div className="RampChart">
        <Doughnut
          data={{
            datasets: [{
              data: RampDist,
              backgroundColor: [
                '#24b4aa',
                '#6fd8d1',
                '#92e2dd',
                '#f1f8fe',
                '#b1e3e0'
              ],
              borderWidth: 0,
              cutout: 70
            }]

          }}
          options= {{
            layout: {
                padding: 30
            },
            animation: false,
            plugins: {
              legend: {
                display: false
              }
            }
        }}
        />

        <div className="RampsText LightText">Ramp algorithm blablabla</div>

        </div>
    </div>
  );
}

export default Ramps;
