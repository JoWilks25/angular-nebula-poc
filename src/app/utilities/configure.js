import { embed } from '@nebula.js/stardust';

import barchart from '@nebula.js/sn-bar-chart';
import linechart from '@nebula.js/sn-line-chart';
import pie from '@nebula.js/sn-pie-chart';
import kpi from '@nebula.js/sn-kpi';

export const nebulaDark = embed.createConfiguration({
  context: {
    theme: 'dark',
    language: 'en-UK',
  },
  types: [
    {
      name: 'barchart',
      load: () => Promise.resolve(barchart),
    },
    {
      name: 'linechart',
      load: () => Promise.resolve(linechart),
    },
    {
      name: 'piechart',
      load: () => Promise.resolve(pie),
    },
    {
      name: 'kpi',
      load: () => Promise.resolve(kpi),
    },
  ],
});

export const nebulaLight = embed.createConfiguration({
  context: {
    theme: 'light',
    language: 'en-UK',
  },
  types: [
    {
      name: 'barchart',
      load: () => Promise.resolve(barchart),
    },
    {
      name: 'linechart',
      load: () => Promise.resolve(linechart),
    },
    {
      name: 'piechart',
      load: () => Promise.resolve(pie),
    },
    {
      name: 'kpi',
      load: () => Promise.resolve(kpi),
    },
  ],
});


const nebula = embed.createConfiguration({
  context: {
    theme: 'light',
    language: 'en-UK',
  },
  themes: [
    {
      id: 'light',
      load: () => Promise.resolve(nebulaLight),
    },
    {
      id: 'dark',
      load: () => Promise.resolve(nebulaDark),
    },
  ],
  types: [
    {
      name: 'barchart',
      load: () => Promise.resolve(barchart),
    },
    {
      name: 'linechart',
      load: () => Promise.resolve(linechart),
    },
    {
      name: 'piechart',
      load: () => Promise.resolve(pie),
    },
    {
      name: 'kpi',
      load: () => Promise.resolve(kpi),
    },
  ],
});


export default nebula;
