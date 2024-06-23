import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export type BubbleData = {
  name: string;
  x: number;
  y: number;
  size: number;

  // add more data if required
};

export default function D3chart() {
  const ref = useRef(null);
  const data: BubbleData[] = [
    { name: 'Bubble1', x: 10, y: 50, size: 10 },
    { name: 'Bubble2', x: 20, y: 60, size: 20 },
    { name: 'Bubble3', x: 15, y: 45, size: 15 },
    { name: 'Bubble4', x: 25, y: 70, size: 25 },
    // add more data if required
  ];
  useEffect(() => {
    if (ref.current) {
      const svg = d3.select(ref.current);

      // set svg height and width
      const width = 1000;
      const height = 500;
      svg.attr('width', width).attr('height', height);

      // create scales to map all x, y points to the svg viewport
      const xScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.x)!])
        .range([0, width]);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.y)!])
        .range([height, 0]);

      svg
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', (d) => xScale(d.x))
        .attr('cy', (d) => yScale(d.y))
        .attr('r', (d) => d.size)
        .attr('fill', 'blue')
        .attr('stroke', 'black')
        .attr('stroke-width', 2);
    }
  }, [data]);

  return <svg ref={ref}>D3</svg>;
}
