"use client"
import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

function Component() {
  const CloseAction = {
    label: <X className="min-w-4 size-4" />,
    onClick: () => toast.dismiss(),
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <h5 className="flex-none">Example</h5>
          <div className="w-full h-px bg-silver-300" />
        </div>

        <div className="flex flex-wrap gap-2">
          {/* DEFAULT */}
          <Button
            variant="outline"
            onClick={() =>
              toast("Event has been created", { action: CloseAction })
            }
          >
            Default
          </Button>

          {/* SUCCESS */}
          <Button
            variant="outline"
            onClick={() =>
              toast.success("The operation was completed successfully", {
                action: CloseAction,
              })
            }
          >
            Success
          </Button>

          {/* INFO */}
          <Button
            variant="outline"
            onClick={() =>
              toast.info("Be at the area 10 minutes before the event time", {
                action: CloseAction,
              })
            }
          >
            Info
          </Button>

          {/* WARNING */}
          <Button
            variant="outline"
            onClick={() =>
              toast.warning(
                "You do not have the necessary permissions to access this feature.",
                { action: CloseAction }
              )
            }
          >
            Warning
          </Button>

          {/* ERROR */}
          <Button
            variant="outline"
            onClick={() =>
              toast.error(
                "The action could not be completed. Please try again.",
                { action: CloseAction }
              )
            }
          >
            Error
          </Button>

          {/* LOADING / PROMISE */}
          <Button
            variant="outline"
            onClick={async () => {
              // 1) 로딩 토스트 먼저 띄우기
              const id = toast.loading("Loading...");

              try {
                // 2) 실제 작업
                const data = await new Promise<{ name: string }>((resolve) =>
                  setTimeout(() => resolve({ name: "Event" }), 2000)
                );

                // 3) 성공 → 같은 id에 덮어쓰기 + 닫기 버튼 추가
                toast.success(`${data.name} has been created`, {
                  id,
                  action: CloseAction,
                });
              } catch (err) {
                // 4) 실패 → 같은 id에 덮어쓰기 + 닫기 버튼 추가
                toast.error("Error", {
                  id,
                  action: CloseAction,
                });
              }
            }}
          >
            loading
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: CloseAction,
              })
            }
          >
            Show Toast
          </Button>
        </div>
      </div>


    </div>
  );
}


const code = `
 {/* DEFAULT */}
<Button
  variant="outline"
  onClick={() =>
    toast("Event has been created", { action: CloseAction })
  }
>
  Default
</Button>

{/* SUCCESS */}
<Button
  variant="outline"
  onClick={() =>
    toast.success("The operation was completed successfully", {
      action: CloseAction,
    })
  }
>
  Success
</Button>

{/* INFO */}
<Button
  variant="outline"
  onClick={() =>
    toast.info("Be at the area 10 minutes before the event time", {
      action: CloseAction,
    })
  }
>
  Info
</Button>

{/* WARNING */}
<Button
  variant="outline"
  onClick={() =>
    toast.warning(
      "You do not have the necessary permissions to access this feature.",
      { action: CloseAction }
    )
  }
>
  Warning
</Button>

{/* ERROR */}
<Button
  variant="outline"
  onClick={() =>
    toast.error(
      "The action could not be completed. Please try again.",
      { action: CloseAction }
    )
  }
>
  Error
</Button>

{/* LOADING / PROMISE */}
<Button
  variant="outline"
  onClick={() => {
    toast.promise<{ name: string }>(() =>
      new Promise<{ name: string }>((resolve) =>
        setTimeout(() => resolve({ name: "Event" }), 2000)
      ),
      {
        loading: "Loading...",
        success: (data) => \`\${data.name} has been created\`,
        error: "Error",
      }
    );
  }}
>
  loading
</Button>
`;

export const root: CodeData = {
  title: "ToastModal Examples",
  type: "single",
  code: [
    {
      fileName: "client",
      language: "tsx",
      code,
    },
  ],
  component: <Component />,
};
