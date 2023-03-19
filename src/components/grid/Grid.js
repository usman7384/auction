import * as React from 'react';
import Grid from '@mui/joy/Grid';
// import BasicCard from '../card/Card';
import BasicStoreCard from '../card/CardStore';


const data = [{
  "id": 1,
  "timeReamining": "1 day left",

  "title": "Sauce Bbq Smokey",
  "price": 2762
}, {
  "id": 2,
  "timeReamining": "1 daycleft",

  "title": "Water - Spring 1.5lit",
  "price": 2037
}, {
  "id": 3,
  "timeReamining": "1 day left",

  "title": "Swiss Chard - Red",
  "price": 1179
}, {
  "id": 4,
  "timeReamining": "1 day left",

  "title": "Buffalo - Tenderloin",
  "price": 556
}, {
  "id": 5,
  "timeReamining": "1 day left",

  "title": "Ecolab - Hobart Upr Prewash Arm",
  "price": 599
}, {
  "id": 6,
  "timeReamining": "1 day left",

  "title": "Liners - Banana, Paper",
  "price": 1788
}, {
  "id": 7,
  "timeReamining": "1 day left",

  "title": "Grapefruit - White",
  "price": 757
}, {
  "id": 8,
  "title": "Cumin - Whole",
  "price": 2770
}, {
  "id": 9,

  "timeReamining": "1 day left",
  "title": "Tart - Pecan Butter Squares",
  "price": 2261
}, {
  "id": 10,
  "timeReamining": "1 day left",
  "title": "Egg - Salad Premix",
  "price": 2898
}]


export default function ResponsiveGrid() {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ flexGrow: 1 }}
    >
      {/* {Array.from(Array(10)).map((_, index) => (
        <Grid xs={2} sm={4} md={4} key={index}>
          <BasicCard/>
          <BasicStoreCard title={data[index]}/>
        </Grid>
      ))} */}

      {data.map((item, index) => (
        <Grid xs={2} sm={4} md={4} key={index}>
          <BasicStoreCard title={item.title} time={item.timeReamining}  price={item.price}/>
          </Grid>
      ))}
    </Grid>
  );
}