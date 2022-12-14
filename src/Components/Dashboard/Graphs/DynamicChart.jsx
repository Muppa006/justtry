import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import ChartDataLabels from 'chartjs-plugin-datalabels'


const VerticalBar = () => {
  const defectTypesAndCount = useSelector((state) => state.dataset.typeC);
  console.log(defectTypesAndCount)
  const lables = [];
  const dataset= [
    {
      label: 'Good Bottle',
      backgroundColor: "rgb(93, 106, 29)",
      borderColor: "rgb(93, 106, 29)",
      borderWidth:0.8,
     
      data: [0,0,0,0],
     
      // stack: "Stack 1",
    },
    {
      label: 'Foreign Particles',
      backgroundColor: "rgba(153, 102, 255, 1)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth:0.8,
      // height:"20%",
      data: [0,0,0,0],
     
      // stack: "Stack 1",
    },
    {
    label: `Discoloration`,
    data: [0,0,0,0],
    backgroundColor: "rgba(255, 99, 130, 1)",
    borderColor: "rgba(255, 99, 132, 1)",
    borderWidth:0.8,
    
    // stack: "Stack 1",
  },
  {
    label: 'Bottle Cap',
    backgroundColor: "rgb(183, 106, 99)",
    borderColor: "rgb(183, 106, 99)",
    borderWidth:0.8,
    data: [0,0,0,0],
    
    // stack: "Stack 1",
  },
  {
    label: 'Dent',
    backgroundColor: "rgb(184, 140, 87)",
    borderColor: "rgb(184, 140, 87)",
    borderWidth:0.8,
    data: [0,0,0,0],
    
    // stack: "Stack 1",
  },
  {
    label: 'Scratches', 
    data: [0,0,0,0],
    backgroundColor: "rgba(54, 162, 235, 1)",
    borderColor: "rgba(54, 162, 235, 1)",
    borderWidth:0.8,
    // height:"1000%",
    // stack: "Stack 1",
  },
  {
    label: 'Others',
    backgroundColor: "rgba(95,158,160, 1)",
    borderColor: "rgba(95,158,160, 1)",
    borderWidth:0.8,
    data: [0,0,0,0],
    // height:"30%",
    // stack: "Stack 1",
  }
 
 
]
  
  try {
    defectTypesAndCount.forEach(ele=>{ 
     
          dataset.forEach((item,index)=>
              {
              if(item.label===ele.Defect_Type){ 
                  if(lables.includes(ele.Bottle_Type)){
                    let indi = lables.indexOf(ele.Bottle_Type)
                    item.data.splice(indi,1,ele.count)
  
                  }else{ 
                   lables.push(ele.Bottle_Type)
                   let indi = lables.indexOf(ele.Bottle_Type)
                   item.data.splice(indi,1,ele.count)
                  }
                  }
              
          }
          )
  })
  } catch (err) {
    console.log(err);
  }
  console.log(lables);
 
  const data = {
    labels: lables,
    responsive: true,
    datasets: dataset,
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      // x: {
      //   display: true,
      //   offset: true
      // },
    },
    plugins: {

  datalabels: {
    
    backgroundColor: function(context) {

      return context.dataset.backgroundColor;

    },
    display: function(context) {
      return context.dataset.data[context.dataIndex] < 0;
    },

    borderRadius: 2,

    color: 'white',
    
    font: {
      
      weight: 'bold',
      
    },
    
    formatter: Math.round,
    
    padding: 2,
  }

},

  };
  return (
    <>
      <Bar 
      data={data}
      options={options}  
       plugins={[ChartDataLabels]}
      />
    </>
  );
};

export default VerticalBar;
