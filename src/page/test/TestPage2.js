import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

function Donutchart() {
  // const [contryname, setCountryname] = useState([]);
  // const [medal, setMedal] = useState([]);

  // useEffect(() => {
  //   const getdata = async () => {
  //     const countryname = [];
  //     const getmedal = [];

  //     const reqData = await fetch("http://localhost/reactgraphtutorial/medals");
  //     const resData = await reqData.json();
  //     for (let i = 0; i < resData.length; i++) {
  //       countryname.push(resData[i].country);
  //       getmedal.push(parseInt(resData[i].medals));
  //     }
  //     setCountryname(countryname);
  //     setMedal(getmedal);
  //   };
  //   getdata();
  // }, []);

  return (
    <React.Fragment>
      <div className="container-fluid mt-3 mb-3">
        <h2 className="text-left">Student Count by Class</h2>
        <Chart
          type="donut"
          width={400}
          height={400}
          series={[45, 54, 34, 78, 43]}
          options={{
            labels: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"],
            title: {
              text: "Student chart",
              // align:"center",
            },

            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      show: true,
                      // showAlways: true,
                      //formatter: () => '343',
                      fontSize: 25,
                      color: "#f90000",
                    },
                  },
                },
              },
            },

            dataLabels: {
              enabled: true,
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}
export default Donutchart;
