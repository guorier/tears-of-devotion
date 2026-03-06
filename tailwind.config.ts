import type { Config } from 'tailwindcss';

const sizeClasses = (type: string) => Array.from({ length: 1000 }, (_, i) => `${type}-[${i + 1}px]`);
const percentClasses = (type: string) => Array.from({ length: 100 }, (_, i) => `${type}-[${i + 1}%]`);

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/lib/**/*.js',
    './public/**/*.html'
  ],
  safelist: [
    ...sizeClasses('h'),  // 최소 너비 클래스
    ...sizeClasses('min-h'),  // 최대 너비 클래스
    ...sizeClasses('max-h'),
    ...sizeClasses('w'),
    ...sizeClasses('min-w'),
    ...sizeClasses('max-w'),
    ...percentClasses('w')
  ],
  theme: {
    spacing: {
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '13': '3.25rem',
      '14': '3.5rem',
      '15': '3.75rem',
      '16': '4rem',
      '17': '4.25rem',
      '18': '4.5rem',
      '19': '4.75rem',
      '20': '5rem',
      '21': '5.25rem',
      '22': '5.5rem',
      '23': '5.75rem',
      '24': '6rem',
      '25': '6.125rem',
      '26': '6.25rem',
      '28': '7rem',
      '29': '7.5rem',
      '32': '8rem',
      '34': '8.125rem',
      '35': '8.5rem',
      '36': '9rem',
      '39': '9.5rem',
      '40': '10rem',
      '41': '10.25rem',
      '42': '10.5rem',
      '44': '11rem',
      '48': '12rem',
      '50': '12.5rem',
      '52': '13rem',
      '54': '13.75rem',
      '56': '14rem',
      '60': '15rem',
      '62': '15.25rem',
      '63': '15.625rem',
      '64': '16rem',
      '66': '16.25rem',
      '72': '18rem',
      '79': '18.75rem',
      '80': '20rem',
      '96': '24rem',
      '100': '25rem',
      '104': '25.5rem',
      '112': '27.75rem',
      auto: 'auto',
      px: '1px',
      '0.5': '0.125rem',
      '1.25': '0.313rem',
      '1.5': '0.375rem',
      '2.25': '0.563rem',
      '2.5': '0.625rem',
      '3.5': '0.875rem',
      '4.5': '1.125rem',
      '5.5': '1.375rem',
      '6.5': '1.625rem',
      '7.5': '1.875rem',
      '8.5': '2.125rem',
      '9.5': '2.375rem',
      '10.5': '2.625rem',
      '11.5': '2.875rem',
      '12.5': '3.125rem',
      '13.5': '3.25rem',
      '14.5': '3.625rem',
      '15.5': '3.875rem',
      '16.5': '4.125rem',
      '17.5': '4.375rem',
      '18.5': '4.625rem',
      '19.5': '4.875rem',
      '20.5': '5.125rem',
      '21.5': '5.375rem',
      '22.5': '5.625',
      '23.5': '5.875rem',
      '40.5': '10.125rem',
      '41.5': '10.375rem',
      '100.5': '25.313rem',
      '112.5': '30.875rem'
    },
    extend: {
      fontFamily: {
        pretendard: [
          'Pretendard GOV Variable',
          'Pretendard GOV',
          'Pretendard',
          'sans-serif'
        ],
        nanumGothic: [
          'Nanum Gothic',
          'sans-serif'
        ]
      },
      fontSize: {
      "xs": ['0.75rem',{lineHeight: '1rem',letterSpacing: '-0.025em'}],
      "sm": ['0.875rem',{lineHeight: '1.25rem',letterSpacing: '-0.025em'}],
      "base": ['1rem',{lineHeight: '1.5rem',letterSpacing: '-0.025em'}],
      "lg": ['1.125rem',{lineHeight: '1.625rem',letterSpacing: '-0.025em'}],
      "xl": ['1.25rem',{lineHeight: '1.75rem',letterSpacing: '-0.025em'}],
      "2xl": ['1.5rem',{lineHeight: '2rem',letterSpacing: '-0.025em'}],
      "3xl": ['1.75rem',{lineHeight: '2.375rem',letterSpacing: '-0.025em'}],
      "4xl": ['2rem',{lineHeight: '2.625rem',letterSpacing: '-0.025em'}],
      "5xl": ['2.5rem',{lineHeight: '3.25rem',letterSpacing: '-0.025em'}],
      "6xl": ['3rem',{lineHeight: '3.875rem',letterSpacing: '-0.025em'}],
      "7xl": ['3.5rem',{lineHeight: '4.5rem',letterSpacing: '-0.025em'}],
      "8xl": ['4rem',{lineHeight: '5rem',letterSpacing: '-0.025em'}],
      "9xl": ['4.5rem',{lineHeight: '5.625rem',letterSpacing: '-0.025em'}],
      "10xl": ['5rem',{lineHeight: '6.25rem',letterSpacing: '-0.025em'}],
      "11xl": ['5.5rem',{lineHeight: '7.125rem',letterSpacing: '-0.025em'}],
      "12xl": ['6rem',{lineHeight: '7.5rem',letterSpacing: '-0.025em'}],
      "13xl": ['8rem',{lineHeight: '1',letterSpacing: '-0.025em'}]
      },
      colors: {
        natural: {
          '50': '#ececec',
          '100': '#e1e1e1',
          '200': '#bbbbbb',
          '300': '#999999',
          '400': '#888888',
          '500': '#767676',
          '600': '#666666',
          '700': '#505050',
          '800': '#333333',
          '900': '#111111'
        },
        slate: {
          '50': '#f8fafc',
          '100': '#f1f5f9',
          '200': '#e2e8f0',
          '300': '#cbd5e1',
          '400': '#94a3b8',
          '500': '#64748b',
          '600': '#475569',
          '700': '#334155',
          '800': '#1e293b',
          '900': '#0f172a',
          '950': '#020617'
        },
        silver: {
          '50': '#f9fafb',
          '100': '#f3f4f6',
          '200': '#e5e7eb',
          '300': '#d1d5db',
          '400': '#9ca3af',
          '500': '#6b7280',
          '600': '#4b5563',
          '700': '#374151',
          '800': '#1f2937',
          '900': '#111827',
          '950': '#030712'
        },
        primary: {
          '50': '#edeff1',
          '100': '#d1d8dc',
          '200': '#b3bec4',
          '300': '#94a4ad',
          '400': '#7d8f9b',
          '500': '#667c89',
          '600': '#596d79',
          '700': '#495a63',
          '800': '#3a474e',
          '900': '#283237',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          '50': '#ece7f5',
          '100': '#cfc5e6',
          '200': '#af9fd7',
          '300': '#9078c7',
          '400': '#785bbc',
          '500': '#6040b0',
          '600': '#583bab',
          '700': '#4c33a2',
          '800': '#402d9a',
          '900': '#2d218c',
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        blue: {
          '50': '#ecf2fe',
          '100': '#d8e5fd',
          '200': '#b1cefb',
          '300': '#86aff9',
          '400': '#4c87f6',
          '500': '#256ef4',
          '600': '#0b50d0',
          '700': '#083891',
          '800': '#052561',
          '900': '#03163a',
          '950': '#020f27'
        },
        lightblue: {
          '50': '#eef2f7',
          '100': '#d6e0eb',
          '200': '#bacbde',
          '300': '#90b0d5',
          '400': '#6b96c7',
          '500': '#346fb2',
          '600': '#1c589c',
          '700': '#063a74',
          '800': '#052b57',
          '900': '#031f3f',
          '950': '#02162c'
        },
        point: {
          '50': '#fce4ec',
          '100': '#efbecf',
          '200': '#e694b0',
          '300': '#df6c92',
          '400': '#da4f7a',
          '500': '#d63964',
          '600': '#c63461',
          '700': '#b22e5b',
          '800': '#9f2857',
          '900': '#7d1e4e'
        },
        red: {
          '50': '#fcecee',
          '100': '#f7cfd3',
          '200': '#e39e9c',
          '300': '#d77976',
          '400': '#de5e56',
          '500': '#e15241',
          '600': '#d3483e',
          '700': '#c23e38',
          '800': '#b63731',
          '900': '#b71c1c'
        },
        orange: {
          '50': '#fdf3e2',
          '100': '#fae1b8',
          '200': '#f7cd8b',
          '300': '#f4b961',
          '400': '#f3aa47',
          '500': '#f19c38',
          '600': '#ec9135',
          '700': '#e68231',
          '800': '#df732c',
          '900': '#d55b26'
        },
        yellow: {
          '50': '#fffde9',
          '100': '#fef9ca',
          '200': '#fdf4a8',
          '300': '#fdf088',
          '400': '#fced72',
          '500': '#fcea60',
          '600': '#f7d859',
          '700': '#f2c14f',
          '800': '#edaa46',
          '900': '#e68437'
        },
        green: {
          '50': '#eaf4ea',
          '100': '#cee5cb',
          '200': '#afd4ab',
          '300': '#91c48a',
          '400': '#7bb872',
          '500': '#4aa63c',
          '600': '#39982a',
          '700': '#258716',
          '800': '#107700',
          '900': '#0c5b00'
        },
        teal: {
          '50': '#e4f6f9',
          '100': '#beeaf1',
          '200': '#96dce8',
          '300': '#73cede',
          '400': '#5fc4d7',
          '500': '#54bad1',
          '600': '#4caabe',
          '700': '#4295a5',
          '800': '#38818d',
          '900': '#275f63'
        },
        purple: {
          '50': '#f1e6f4',
          '100': '#dbc0e4',
          '200': '#c597d4',
          '300': '#af6ec3',
          '400': '#9f50b6',
          '500': '#8f36aa',
          '600': '#8331a4',
          '700': '#712c9c',
          '800': '#612694',
          '900': '#441d87'
        },
        brown: {
          '50': '#eeebe9',
          '100': '#d5ccc9',
          '200': '#b9aba5',
          '300': '#9d8980',
          '400': '#886f65',
          '500': '#74564a',
          '600': '#684d43',
          '700': '#594139',
          '800': '#4a352f',
          '900': '#3b2824'
        },
        warning: {
          '100': '#ffaa00'
        },
        valid: {
          '100': '#04b014'
        },
        error: {
          '100': '#eb003b',
          '200': '#d50136'
        },
        line: {
          '50': '#F7F7FB',
          '100': '#F1F1F5',
          '200': '#E5E5EC',
          '300': '#111111'
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      maxWidth: {
        '8xl': '90rem'
      },
      lineHeight: {
        inherit: 'inherit'
      },

      backgroundSize: {
        '80': '80%',
        '1rem': '1rem'
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
        '4.5': '4.5px',
        '5.5': '5.5px'
      },
      dropShadow: {
        line: '0px 0px 1px #333'
      },
      backgroundImage: {
        "pw-on": "url(/images/eye_on.svg)",
        "pw-off": "url(/images/eye_off.svg)",
        "date": "url(/images/icon_date.svg)",
        "search": "url(/images/icon_close2.svg)",
        "down": "url(/images/icon_accodian.svg)",
        "disabled-down": "url(/images/icon_accodian_g.svg)",
        "checkbox": "url(/images/icon_chk.svg)",
        "disabled-chk": "url(/images/icon_disabled_chk.svg)",
        "previous": "url(/images/icon_page_left.svg)",
        "next": "url(/images/icon_page_right.svg)",
        "page-before": "url(/images/icon_p_left.svg)",
        "page-next": "url(/images/icon_p_right.svg)",
        "d-before": "url(/images/icon_dp_left.svg)",
        "d-next": "url(/images/icon_dp_right.svg)"
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('flowbite/plugin'), require("tailwindcss-animate")],
};
export default config;
