"use client"
import React, { ReactNode, useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/Alert/Alert";
import { DialogModal } from "@/components/Modal/Dialog";

const labels = ["Default"];
const Gridline = () => (
  <div className="flex flex-col gap-4">
    <div className="w-full h-7 flex items-center"><div className="w-full h-px bg-silver-300" /></div>
    {labels.map((label) => (
      <div key={label} className="flex items-center gap-2 h-10.5">
        {label}
        <div className="w-full h-px bg-silver-300" />
      </div>
    ))}
  </div>
);
const Gridtitle = ({ children }: { children: ReactNode }) => (
  <div className="flex justify-center items-center gap-4 w-full">
    <div className="w-full h-px bg-silver-300" />
    <h6 className="flex-none">{children}</h6>
    <div className="w-full h-px bg-silver-300" />
  </div>
);

function Component() {
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertOpen2, setAlertOpen2] = useState(false);

  return (
    <div className="flex flex-col gap-10 min-h-56">
      <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
        <Gridline />
        <div className="grid grid-cols-5 gap-4">
          <div className="flex flex-col gap-4">
            <Gridtitle>Modal</Gridtitle>
            <DialogModal />
          </div>
          <div className="flex flex-col gap-4">
            <Gridtitle>Confirm</Gridtitle>
            <Button onClick={() => setAlertOpen2(true)}>Confirm</Button>
          </div>
          <div className="flex flex-col gap-4">
            <Gridtitle>Alert</Gridtitle>
            <Button onClick={() => setAlertOpen(true)}>Alert</Button>
          </div>
        </div>
      </div>





      <div className='flex gap-10'>
        <div className="flex flex-col gap-4 w-[416px]">
          <Gridtitle>Modal</Gridtitle>
          <div role="dialog" className="grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg duration-200 rounded-lg relative" >
            <div className="flex flex-col space-y-1.5 text-center">
              <h2 className="text-lg font-semibold leading-none tracking-tight">Modal</h2>
              <p className="text-sm text-muted-foreground">Make changes to your profile here. Click save when you're done.</p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >Name</label>
                <input className="relative flex items-center px-4 py-0 w-full text-body1 placeholder:text-guide rounded-lg bg-white disabled:bg-black200 disabled:placeholder:text-body2 disabled:border-strokeDefault disabled:text-body1 !focus:outline-none focus:ring-0 focus:ring-transparent focus:border-2 focus:border-point border border-black400 h-14 bodyL" />
              </div>
              <div className="grid gap-3">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >Username</label>
                <input className="relative flex items-center px-4 py-0 w-full text-body1 placeholder:text-guide rounded-lg bg-white disabled:bg-black200 disabled:placeholder:text-body2 disabled:border-strokeDefault disabled:text-body1 !focus:outline-none focus:ring-0 focus:ring-transparent focus:border-2 focus:border-point border border-black400 h-14 bodyL" />
              </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2" type="button">Cancel</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" type="submit">Save</button>
            </div>
            <button type="button" className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity">
              <i className="size-4 min-w-4 bg-silver-900" style={{ maskImage: "url(/images/icon_delete.svg)", maskRepeat: "no-repeat", maskSize: "contain", maskPosition: "center center" }}              >
              </i>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[416px]">
          <Gridtitle>Confirm</Gridtitle>
          <div className="grid w-full max-w-lg border bg-background p-6 shadow-lg duration-200 rounded-lg gap-8 relative">
            <div className="flex flex-col space-y-1.5 gap-8 text-center">
              <div className="flex gap-2 items-center">
                <i className="size-5 min-w-5"
                  style={{
                    backgroundImage: 'url("/images/icon_fail.svg")',
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                </i>
                <div className="tableT text-red-900">팝업타이틀</div>
              </div>
              <div className="flex flex-col gap-2 !m-0">
                <h2 className="text-lg font-semibold tracking-tight text-center leading-[150%]">내용을 입력하세요</h2>
                <div className="text-center leading-[150%] text-subtle break-keep">서브메세지를 입력하세요</div>
              </div>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors border border-input bg-background h-11 rounded-md px-8 flex-1">취소</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors bg-primary text-primary-foreground h-11 rounded-md px-8 flex-1">확인</button>
            </div>
            <button type="button" className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity">
              <i className="size-4 min-w-4 bg-silver-900" style={{ maskImage: "url(/images/icon_delete.svg)", maskRepeat: "no-repeat", maskSize: "contain", maskPosition: "center center" }}              >
              </i>
            </button>
          </div>
        </div>


        <div className="flex flex-col gap-4 w-[416px]">
          <Gridtitle>Alert</Gridtitle>

          <div className="grid w-full max-w-lg border bg-background p-6 shadow-lg duration-200 gap-8 rounded-lg relative">
            <div className="flex flex-col space-y-1.5 gap-8 text-center sm:text-left">
              <div className="flex gap-2 items-center">
                <i className="size-5 min-w-5" style={{ backgroundImage: 'url("/images/icon_fail.svg")', backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", }}>
                </i>
                <div className="tableT text-green500">팝업타이틀</div>
              </div>
              <div className="flex flex-col gap-2 !m-0">
                <h2 id="radix-:R8tbrqunikqH1:" className="text-lg font-semibold tracking-tight text-center leading-[150%]">내용을 입력하세요</h2>
                <div className="text-center leading-[150%] text-subtle break-keep">서브메세지를 입력하세요</div>
              </div>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors border border-input bg-background h-11 rounded-md px-8 flex-1">확인</button>
            </div>
            <button type="button" className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity">
              <i className="size-4 min-w-4 bg-silver-900" style={{ maskImage: "url(/images/icon_delete.svg)", maskRepeat: "no-repeat", maskSize: "contain", maskPosition: "center center" }}>
              </i>
            </button>
          </div>

        </div>
      </div>

      <Alert open={alertOpen2}
        onOpenChange={setAlertOpen2}
        icon="iconFail"
        poptitle="팝업타이틀"
        title="내용을 입력하세요"
        subtitle="서브메세지를 입력하세요"
        actions={[
          <Button key="ok" variant="outline" size="lg" className="flex-1" onClick={() => setAlertOpen2(false)}>취소</Button>,
          <Button key="ok" size="lg" className="flex-1" onClick={() => setAlertOpen2(false)}>확인</Button>
        ]}
      />
      <Alert open={alertOpen}
        onOpenChange={setAlertOpen}
        icon="iconCompleted"
        poptitle="팝업타이틀"
        title="내용을 입력하세요"
        subtitle="서브메세지를 입력하세요"
        actions={[
          <Button key="ok" variant="outline" size="lg" className="flex-1" onClick={() => setAlertOpen(false)}>확인</Button>
        ]}
      />
    </div>
  );
}

const code = `
<DialogModal />

<Button onClick={() => setAlertOpen(true)}>Alert</Button>
<Alert open={alertOpen}
  onOpenChange={setAlertOpen}
  icon="iconCompleted"
  poptitle="팝업타이틀"
  title="내용을 입력하세요"
  subtitle="서브메세지를 입력하세요"
  actions={[
    <Button key="ok" variant="outline" size="lg" className="flex-1" onClick={() => setAlertOpen(false)}>확인</Button>
  ]}
/>

<Button onClick={() => setAlertOpen2(true)}>Confirm</Button>
<Alert open={alertOpen2}
  onOpenChange={setAlertOpen2}
  icon="iconFail"
  poptitle="팝업타이틀"
  title="내용을 입력하세요"
  subtitle="서브메세지를 입력하세요"
  actions={[
    <Button key="ok" variant="outline" size="lg" className="flex-1" onClick={() => setAlertOpen2(false)}>취소</Button>,
    <Button key="ok" size="lg" className="flex-1" onClick={() => setAlertOpen2(false)}>확인</Button>
  ]}
/>
`;
export const root: CodeData = {
  type: "single",
  code: {
    fileName: "client",
    language: "tsx",
    code,
  },
  component: <Component />,
};
