import { useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5wc from '@amcharts/amcharts5/wc';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

export default function Amcharts() {
  useLayoutEffect(() => {
    const root = am5.Root.new('chartdiv');

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      }),
    );

    chart.children.push(
      am5.Label.new(root, {
        text: 'Amcharts',
        fontSize: 20,
        x: am5.percent(50),
        centerX: am5.percent(50),
      }),
    );

    const series = chart.children.push(
      am5wc.WordCloud.new(root, {
        categoryField: 'tag',
        valueField: 'weight',
        calculateAggregates: true,
      }),
    );

    series.set('heatRules', [
      {
        target: series.labels.template,
        dataField: 'value',
        min: am5.color(16766146),
        max: am5.color(16736799),
        key: 'fill',
      },
    ]);

    series.labels.template.setAll({
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 5,
      paddingRight: 5,
      fontFamily: 'Courier New',
      cursorOverStyle: 'pointer',
    });

    series.data.setAll([
      { tag: 'JavaScript', weight: 64.96 },
      { tag: 'HTML/CSS', weight: 56.07 },
      { tag: 'Python', weight: 48.24 },
      { tag: 'SQL', weight: 47.08 },
      { tag: 'Java', weight: 35.35 },
      { tag: 'Node.js', weight: 33.91 },
      { tag: 'TypeScript', weight: 30.19 },
      { tag: 'C#', weight: 27.86 },
      { tag: 'Bash/Shell', weight: 27.13 },
      { tag: 'C++', weight: 24.31 },
      { tag: 'PHP', weight: 21.98 },
      { tag: 'C', weight: 21.01 },
      { tag: 'PowerShell', weight: 10.75 },
      { tag: 'Go', weight: 9.55 },
      { tag: 'Kotlin', weight: 8.32 },
      { tag: 'Rust', weight: 7.03 },
      { tag: 'Ruby', weight: 6.75 },
      { tag: 'Dart', weight: 6.02 },
      { tag: 'Assembly', weight: 5.61 },
      { tag: 'Swift', weight: 5.1 },
      { tag: 'R', weight: 5.07 },
      { tag: 'VBA', weight: 4.66 },
      { tag: 'Matlab', weight: 4.66 },
      { tag: 'Groovy', weight: 3.01 },
      { tag: 'Objective-C', weight: 2.8 },
      { tag: 'Scala', weight: 2.6 },
      { tag: 'Perl', weight: 2.46 },
      { tag: 'Haskell', weight: 2.12 },
      { tag: 'Delphi', weight: 2.1 },
      { tag: 'Clojure', weight: 1.88 },
      { tag: 'Elixir', weight: 1.74 },
      { tag: 'LISP', weight: 1.33 },
      { tag: 'Julia', weight: 1.29 },
      { tag: 'F#', weight: 0.97 },
      { tag: 'Erlang', weight: 0.79 },
      { tag: 'APL', weight: 0.65 },
      { tag: 'Crystal', weight: 0.56 },
      { tag: 'COBOL', weight: 0.53 },
    ]);

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: '500px', height: '500px' }}></div>;
}
