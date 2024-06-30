import { useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5hierarchy from '@amcharts/amcharts5/hierarchy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

export default function PackedCircles() {
  useLayoutEffect(() => {
    const root = am5.Root.new('packed-circles');

    root.setThemes([am5themes_Animated.new(root)]);

    const container = root.container.children.push(
      am5.ZoomableContainer.new(root, {
        width: am5.p100,
        height: am5.p100,
        layout: root.verticalLayout,
        wheelable: true,
        pinchZoom: true,
      }),
    );

    container.children.push(
      am5.ZoomTools.new(root, {
        target: container,
      }),
    );

    const series = container.contents.children.push(
      am5hierarchy.Pack.new(root, {
        topDepth: 1,
        valueField: 'value',
        categoryField: 'name',
        childDataField: 'children',
      }),
    );
    const data = [
      {
        name: 'packed-circles',
        children: [
          { name: 'JavaScript', value: 64.96 },
          { name: 'HTML/CSS', value: 56.07 },
          { name: 'Python', value: 48.24 },
          { name: 'SQL', value: 47.08 },
          { name: 'Java', value: 35.35 },
          { name: 'Node.js', value: 33.91 },
          { name: 'TypeScript', value: 30.19 },
          { name: 'C#', value: 27.86 },
          { name: 'Bash/Shell', value: 27.13 },
          { name: 'C++', value: 24.31 },
          { name: 'PHP', value: 21.98 },
          { name: 'C', value: 21.01 },
          { name: 'PowerShell', value: 10.75 },
          { name: 'Go', value: 9.55 },
          { name: 'Kotlin', value: 8.32 },
          { name: 'Rust', value: 7.03 },
          { name: 'Ruby', value: 6.75 },
          { name: 'Dart', value: 6.02 },
          { name: 'Assembly', value: 5.61 },
          { name: 'Swift', value: 5.1 },
          { name: 'R', value: 5.07 },
          { name: 'VBA', value: 4.66 },
          { name: 'Matlab', value: 4.66 },
          { name: 'Groovy', value: 3.01 },
          { name: 'Objective-C', value: 2.8 },
          { name: 'Scala', value: 2.6 },
          { name: 'Perl', value: 2.46 },
          { name: 'Haskell', value: 2.12 },
          { name: 'Delphi', value: 2.1 },
          { name: 'Clojure', value: 1.88 },
          { name: 'Elixir', value: 1.74 },
          { name: 'LISP', value: 1.33 },
          { name: 'Julia', value: 1.29 },
          { name: 'F#', value: 0.97 },
          { name: 'Erlang', value: 0.79 },
          { name: 'APL', value: 0.65 },
          { name: 'Crystal', value: 0.56 },
          { name: 'COBOL', value: 0.53 },
        ],
      },
    ];

    series.data.setAll(data);
    return () => {
      root.dispose();
    };
  });
  return <div id="packed-circles" style={{ width: '40rem', height: '40rem' }}></div>;
}
