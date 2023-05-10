import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactEcharts from "echarts-for-react";

const Home = () => {
  const [data, setData] = useState("");
  const [loaded, setLoaded] = useState(false);

  const option = {
    title: {
      text: "Customized Pie",
      left: "center",
      top: 20,
      textStyle: {
        color: "black",
      },
    },
    tooltip: {
      trigger: "item",
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1],
      },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "55%",
        center: ["50%", "50%"],
        data: [
          { value: 335, name: "Direct" },
          { value: 310, name: "Email" },
          { value: 274, name: "Union Ads" },
          { value: 235, name: "Video Ads" },
          { value: 400, name: "Search Engine" },
        ].sort(function (a, b) {
          return a.value - b.value;
        }),
        roseType: "radius",
        label: {
          color: "black",
        },
        labelLine: {
          lineStyle: {
            color: "black",
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        itemStyle: {
          color: "pink",
        },
        animationType: "scale",
        animationEasing: "elasticOut",
        animationDelay: function (idx) {
          return Math.random() * 200;
        },
      },
    ],
  };

  useEffect(() => {
    (async () => {
      try {
        if (!loaded) {
          console.log("loaded");

          const res = await axios.get(
            `https://www.anapioficeandfire.com/api/characters?culture=Valemen`
          );
          console.log({ RES: res.data });
          if (res.data) {
            setLoaded(false);
          }
        }
      } catch (err) {
        return console.log(err);
      }
    })();
  }, [loaded]);
  
  return (
    <div>
      {data.name}
      <ReactEcharts option={option} />
    </div>
  );
};

export default Home;
