import { CodeData } from "@/components/helpers/examples/code-demo";
import { colorsArray } from "@styles/theme/color.theme";

const code = ``;

const excludedColors = ['warning', 'valid', 'error', 'line'];

const getFilteredColors = colorsArray.filter(
  ({ colorName }) => !excludedColors.includes(colorName)
);

const Gridcolor = () => (
  <div className="flex flex-col gap-4">
    {getFilteredColors.map(({ colorName }, idx) => (
      <div key={idx} className="flex items-center gap-2 h-18.5">
        <span className="flex-none">{colorName}</span>
        <div className="w-full h-px bg-silver-300" />
      </div>
    ))}
  </div>
);
const ColorSwatches = () => (
  <div className="flex flex-col gap-4">
    {getFilteredColors.map(({ colorName, shades }, idx) => (
      <div key={idx} data-color={colorName} className="grid grid-cols-11 gap-y-3 gap-x-2">
        {Object.entries(shades).map(([shade, hex], shadeIdx) => (
          <div className="flex flex-col gap-1" key={shadeIdx}>
            <div className="h-10 rounded" style={{ background: hex }} />
            <div className="text-sm leading-none text-silver-700">
              {shade}
              <div className="text-xs text-silver-500">{hex}</div>
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
);

function Component() {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-[100px_1fr] items-center gap-4">
        <Gridcolor />
        <ColorSwatches />
      </div>
      <div className="grid grid-cols-[100px_1fr] items-center gap-4">
        <div className="flex items-center gap-1 text-sm">State<div className="w-full h-px bg-silver-900" /></div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col gap-1 w-full">
            <div className="h-10 rounded bg-error-100" />
            <div className="text-sm leading-none text-silver-700">
              금지, 실패, 위험, 정지 등
              <div className="text-xs text-silver-500">#DC0000 / *-error-100</div>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <div className="h-10 rounded bg-valid-100" />
            <div className="text-sm leading-none text-silver-700">
              성공, 진행 등
              <div className="text-xs text-silver-500">#04B014 / *-valid-100</div>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <div className="h-10 rounded bg-warning-100" />
            <div className="text-sm leading-none text-silver-700">
              주의, 경고, 실수 등
              <div className="text-xs text-silver-500">#FFAA00 / *-warning-100</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[100px_1fr] items-center gap-4">
        <div className="flex items-center gap-1 text-sm">Line<div className="w-full h-px bg-silver-900" /></div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col gap-1 w-full">
            <div className="h-10 rounded bg-line-100" />
            <div className="text-sm leading-none text-silver-700">
              연한 Line컬러<div className="text-xs text-silver-500">#F1F1F5</div>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <div className="h-10 rounded bg-line-200" />
            <div className="text-sm leading-none text-silver-700">
              중간 Line컬러<div className="text-xs text-silver-500">#E5E5EC</div>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <div className="h-10 rounded bg-line-300" />
            <div className="text-sm leading-none text-silver-700">
              진한 Line컬러<div className="text-xs text-silver-500">#111111</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[100px_1fr] items-center gap-4">
        <div className="flex items-center gap-1">
          <div className="flex-none text-sm">BG컬러</div>
          <div className="w-full h-px bg-silver-900" />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex flex-col gap-1 w-full">
            <div className="h-10 rounded bg-line-50" />
            <div className="text-sm leading-none text-silver-700">
              연한 BG컬러<div className="text-xs text-silver-500">#F7F7FB</div>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <div className="h-10 rounded bg-line-100" />
            <div className="text-sm leading-none text-silver-700">
              진한 BG컬러<div className="text-xs text-silver-500">#F1F1F5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export const icon: CodeData = {
  title: "Color Examples",
  type: "single",
  code: [{ fileName: "client", language: "tsx", code }],
  component: <Component />,
};
