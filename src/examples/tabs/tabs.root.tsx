"use client";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


export function TabsDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="flex flex-col gap-2 p-4 border border-slate-300">
            <div>
              <div className="font-semibold text-base">Account</div>
              <div>
                Make changes to your account here. Click save when you&apos;re
                done.
              </div>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Name</Label>
                <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Username</Label>
                <Input id="tabs-demo-username" defaultValue="@peduarte" />
              </div>
            </div>
            <div>
              <Button>Save changes</Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="flex flex-col gap-2 p-4 border border-slate-300">
            <div>
              <div className="font-semibold text-base">Password</div>
              <div>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </div>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Current password</Label>
                <Input id="tabs-demo-current" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">New password</Label>
                <Input id="tabs-demo-new" type="password" />
              </div>
            </div>
            <div>
              <Button>Save password</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const code = `
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>

      <TabsContent value="account">
        <div className="flex flex-col gap-3">
          <Label>Name</Label>
          <Input defaultValue="Pedro Duarte" />
          <Label>Username</Label>
          <Input defaultValue="@peduarte" />
          <Button>Save changes</Button>
        </div>
      </TabsContent>

      <TabsContent value="password">
        <div className="flex flex-col gap-3">
          <Label>Current password</Label>
          <Input type="password" />
          <Label>New password</Label>
          <Input type="password" />
          <Button>Save password</Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}
`;

export const root: CodeData = {
  title: "Tab Examples",
  type: "single",
  code: {
    fileName: "client",
    language: "tsx",
    code,
  },
  component: <TabsDemo />,
};
