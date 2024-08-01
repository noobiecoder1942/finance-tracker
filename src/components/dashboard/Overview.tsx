import { DatumId, ResponsiveSunburst } from '@nivo/sunburst';
import { useTheme as useNextThemes } from 'next-themes';

interface CustomToolTipProps {
  id: DatumId;
  value: number;
  color: string;
}

const MyResponsiveSunburst = () => {

  const { resolvedTheme } = useNextThemes();

  const textColor = resolvedTheme === 'dark' ? '#ffffff' : '#000000';

  const newdata = {
    "name": "Total",
    "value": "₹ 1.8 Cr",
    "color": "hsl(245.02793296089385, 70.19607843137256%, 50%)",
    "children": [
      {
        "name": "viz",
        "color": "hsl(95, 70%, 50%)",
        "children": [
          {
            "name": "stack",
            "color": "hsl(108, 70%, 50%)",
            "children": [
              {
                "name": "cchart",
                "color": "hsl(337, 70%, 50%)",
                "loc": 24450
              },
              {
                "name": "xAxis",
                "color": "hsl(27, 70%, 50%)",
                "loc": 155849
              },
              {
                "name": "yAxis",
                "color": "hsl(208, 70%, 50%)",
                "loc": 71403
              },
              {
                "name": "layers",
                "color": "hsl(8, 70%, 50%)",
                "loc": 31486
              }
            ]
          },
          {
            "name": "ppie",
            "color": "hsl(223, 70%, 50%)",
            "children": [
              {
                "name": "chart",
                "color": "hsl(297, 70%, 50%)",
                "children": [
                  {
                    "name": "pie",
                    "color": "hsl(297, 70%, 50%)",
                    "children": [
                      {
                        "name": "outline",
                        "color": "hsl(331, 70%, 50%)",
                        "loc": 155259
                      },
                      {
                        "name": "slices",
                        "color": "hsl(56, 70%, 50%)",
                        "loc": 123858
                      },
                      {
                        "name": "bbox",
                        "color": "hsl(276, 70%, 50%)",
                        "loc": 66915
                      }
                    ]
                  },
                  {
                    "name": "donut",
                    "color": "hsl(75, 70%, 50%)",
                    "loc": 3162
                  },
                  {
                    "name": "gauge",
                    "color": "hsl(222, 70%, 50%)",
                    "loc": 137836
                  }
                ]
              },
              {
                "name": "legends",
                "color": "hsl(251, 70%, 50%)",
                "loc": 132414
              }
            ]
          }
        ]
      },
      {
        "name": "colors",
        "color": "hsl(186, 70%, 50%)",
        "children": [
          {
            "name": "rgb",
            "color": "hsl(120, 70%, 50%)",
            "loc": 170385
          },
          {
            "name": "hsl",
            "color": "hsl(47, 70%, 50%)",
            "loc": 138943
          }
        ]
      },
      {
        "name": "utils",
        "color": "hsl(331, 70%, 50%)",
        "children": [
          {
            "name": "randomize",
            "color": "hsl(342, 70%, 50%)",
            "loc": 181424
          },
          {
            "name": "resetClock",
            "color": "hsl(176, 70%, 50%)",
            "loc": 190498
          },
          {
            "name": "noop",
            "color": "hsl(345, 70%, 50%)",
            "loc": 37299
          },
          {
            "name": "tick",
            "color": "hsl(75, 70%, 50%)",
            "loc": 198067
          },
          {
            "name": "forceGC",
            "color": "hsl(261, 70%, 50%)",
            "loc": 53512
          },
          {
            "name": "stackTrace",
            "color": "hsl(181, 70%, 50%)",
            "loc": 79989
          },
          {
            "name": "dbg",
            "color": "hsl(171, 70%, 50%)",
            "loc": 140426
          }
        ]
      },
      {
        "name": "generators",
        "color": "hsl(69, 70%, 50%)",
        "children": [
          {
            "name": "address",
            "color": "hsl(359, 70%, 50%)",
            "loc": 117298
          },
          {
            "name": "city",
            "color": "hsl(313, 70%, 50%)",
            "loc": 187695
          },
          {
            "name": "animal",
            "color": "hsl(343, 70%, 50%)",
            "loc": 14361
          },
          {
            "name": "movie",
            "color": "hsl(207, 70%, 50%)",
            "loc": 170728
          },
          {
            "name": "user",
            "color": "hsl(275, 70%, 50%)",
            "loc": 42535
          }
        ]
      },
      {
        "name": "set",
        "color": "hsl(262, 70%, 50%)",
        "children": [
          {
            "name": "clone",
            "color": "hsl(26, 70%, 50%)",
            "loc": 64260
          },
          {
            "name": "intersect",
            "color": "hsl(174, 70%, 50%)",
            "loc": 59802
          },
          {
            "name": "merge",
            "color": "hsl(31, 70%, 50%)",
            "loc": 165391
          },
          {
            "name": "reverse",
            "color": "hsl(285, 70%, 50%)",
            "loc": 127218
          },
          {
            "name": "toArray",
            "color": "hsl(246, 70%, 50%)",
            "loc": 15121
          },
          {
            "name": "toObject",
            "color": "hsl(209, 70%, 50%)",
            "loc": 91538
          },
          {
            "name": "fromCSV",
            "color": "hsl(201, 70%, 50%)",
            "loc": 110356
          },
          {
            "name": "slice",
            "color": "hsl(138, 70%, 50%)",
            "loc": 44172
          },
          {
            "name": "append",
            "color": "hsl(360, 70%, 50%)",
            "loc": 38362
          },
          {
            "name": "prepend",
            "color": "hsl(21, 70%, 50%)",
            "loc": 167668
          },
          {
            "name": "shuffle",
            "color": "hsl(110, 70%, 50%)",
            "loc": 47055
          },
          {
            "name": "pick",
            "color": "hsl(229, 70%, 50%)",
            "loc": 55436
          },
          {
            "name": "plouc",
            "color": "hsl(25, 70%, 50%)",
            "loc": 39218
          }
        ]
      },
      {
        "name": "text",
        "color": "hsl(81, 70%, 50%)",
        "children": [
          {
            "name": "trim",
            "color": "hsl(131, 70%, 50%)",
            "loc": 136683
          },
          {
            "name": "slugify",
            "color": "hsl(206, 70%, 50%)",
            "loc": 100844
          },
          {
            "name": "snakeCase",
            "color": "hsl(88, 70%, 50%)",
            "loc": 43511
          },
          {
            "name": "camelCase",
            "color": "hsl(135, 70%, 50%)",
            "loc": 18535
          },
          {
            "name": "repeat",
            "color": "hsl(166, 70%, 50%)",
            "loc": 77668
          },
          {
            "name": "padLeft",
            "color": "hsl(339, 70%, 50%)",
            "loc": 124595
          },
          {
            "name": "padRight",
            "color": "hsl(224, 70%, 50%)",
            "loc": 163980
          },
          {
            "name": "sanitize",
            "color": "hsl(87, 70%, 50%)",
            "loc": 154839
          },
          {
            "name": "ploucify",
            "color": "hsl(225, 70%, 50%)",
            "loc": 77626
          }
        ]
      },
      {
        "name": "misc",
        "color": "hsl(322, 70%, 50%)",
        "children": [
          {
            "name": "greetings",
            "color": "hsl(72, 70%, 50%)",
            "children": [
              {
                "name": "hey",
                "color": "hsl(196, 70%, 50%)",
                "loc": 22577
              },
              {
                "name": "HOWDY",
                "color": "hsl(285, 70%, 50%)",
                "loc": 179328
              },
              {
                "name": "aloha",
                "color": "hsl(335, 70%, 50%)",
                "loc": 7894
              },
              {
                "name": "AHOY",
                "color": "hsl(0, 70%, 50%)",
                "loc": 176325
              }
            ]
          },
          {
            "name": "other",
            "color": "hsl(178, 70%, 50%)",
            "loc": 81666
          },
          {
            "name": "path",
            "color": "hsl(234, 70%, 50%)",
            "children": [
              {
                "name": "pathA",
                "color": "hsl(215, 70%, 50%)",
                "loc": 90153
              },
              {
                "name": "pathB",
                "color": "hsl(259, 70%, 50%)",
                "children": [
                  {
                    "name": "pathB1",
                    "color": "hsl(230, 70%, 50%)",
                    "loc": 179002
                  },
                  {
                    "name": "pathB2",
                    "color": "hsl(265, 70%, 50%)",
                    "loc": 113212
                  },
                  {
                    "name": "pathB3",
                    "color": "hsl(37, 70%, 50%)",
                    "loc": 176522
                  },
                  {
                    "name": "pathB4",
                    "color": "hsl(282, 70%, 50%)",
                    "loc": 54688
                  }
                ]
              },
              {
                "name": "pathC",
                "color": "hsl(174, 70%, 50%)",
                "children": [
                  {
                    "name": "pathC1",
                    "color": "hsl(64, 70%, 50%)",
                    "loc": 184955
                  },
                  {
                    "name": "pathC2",
                    "color": "hsl(314, 70%, 50%)",
                    "loc": 137638
                  },
                  {
                    "name": "pathC3",
                    "color": "hsl(88, 70%, 50%)",
                    "loc": 100363
                  },
                  {
                    "name": "pathC4",
                    "color": "hsl(78, 70%, 50%)",
                    "loc": 43144
                  },
                  {
                    "name": "pathC5",
                    "color": "hsl(255, 70%, 50%)",
                    "loc": 131609
                  },
                  {
                    "name": "pathC6",
                    "color": "hsl(140, 70%, 50%)",
                    "loc": 109297
                  },
                  {
                    "name": "pathC7",
                    "color": "hsl(260, 70%, 50%)",
                    "loc": 177937
                  },
                  {
                    "name": "pathC8",
                    "color": "hsl(263, 70%, 50%)",
                    "loc": 159417
                  },
                  {
                    "name": "pathC9",
                    "color": "hsl(227, 70%, 50%)",
                    "loc": 1369
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }


  const CustomTooltip = ({ id, value, color }: CustomToolTipProps) => (
    <div
      style={{
        padding: '12px 16px',
        background: '#fff',
        color: '#333',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
      }}
    >
      <strong style={{ color }}>{id}</strong>
      <br />
      Value: {value}
    </div>
  );

    return <ResponsiveSunburst
        data={newdata}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        id="name"
        value="loc"
        cornerRadius={2}
        borderColor={{ theme: 'background' }}
        colors={{ scheme: 'nivo' }}
        childColor={{
            from: 'color',
            modifiers: [
                [
                    'brighter',
                    0.1
                ]
            ]
        }}
        enableArcLabels={true}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    12.8
                ]
            ]
        }}
        tooltip={({ id, value, color }) => (
          <CustomTooltip id={id} value={value} color={color} />
        )}
        layers={[
          'arcs',
          'arcLabels',
          ({ centerX, centerY }) => (
            <>
              <text
                x={centerX}
                y={centerY-15}
                textAnchor="middle"
                dominantBaseline="central"
                style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  fill: textColor,
                }}
              >
                {newdata.name}
              </text>
              <text
                x={centerX}
                y={centerY + 15}
                textAnchor="middle"
                dominantBaseline="central"
                style={{
                  fontSize: '18px',
                  fontWeight: '400',
                  fill: textColor,
                }}
              >
                {newdata.value}
              </text>
            </>
          ),
        ]}
    />
    }

export default function SunburstCard() {
    

      return <div className='h-[600px] w-[600px]'>
        <MyResponsiveSunburst />
      </div>
};