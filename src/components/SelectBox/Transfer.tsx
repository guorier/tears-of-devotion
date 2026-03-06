import React, { useState, FC, forwardRef, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Icons from '@/components/Icons';
import { Label } from "@/components/ui/label"


interface TransferProps extends Omit<ComponentProps<"div">, "onChange"> {
  initialItems: { value: string; label: string }[];
}

export const Transfer = forwardRef<HTMLDivElement, TransferProps>(
  ({
    initialItems
  },ref) => {

    const [aItems, setAItems] = useState(initialItems);
    const [bItems, setBItems] = useState<{ value: string; label: string }[]>([]);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    // 항목 선택 처리
    const handleSelectItem = (item: string) => {
      setSelectedItems((prevSelected) =>
        prevSelected.includes(item) ? prevSelected.filter((i) => i !== item) : [...prevSelected, item]
      );
    };

    // 전체 선택 / 해제
    const handleSelectAll = (fromA: boolean) => {
      const items = fromA ? aItems : bItems;
      const areAllSelected = items.every((item) => selectedItems.includes(item.value));
      setSelectedItems(areAllSelected ? selectedItems.filter((item) => !items.some((i) => i.value === item)) : [...selectedItems, ...items.map((i) => i.value)]);
    };

    // 항목 이동
    const moveRight = () => {
      const itemsToMove = selectedItems.filter((item) => aItems.some((i) => i.value === item));
      setBItems((prevBItems) => [
        ...prevBItems,
        ...aItems.filter((item) => itemsToMove.includes(item.value)),
      ]);
      setAItems((prevAItems) =>
        prevAItems.filter((item) => !itemsToMove.includes(item.value))
      );
      setSelectedItems((prevSelected) =>
        prevSelected.filter((item) => !itemsToMove.includes(item))
      );
    };

    const moveLeft = () => {
      const itemsToMove = selectedItems.filter((item) => bItems.some((i) => i.value === item));
      setAItems((prevAItems) => [
        ...prevAItems,
        ...bItems.filter((item) => itemsToMove.includes(item.value)),
      ]);
      setBItems((prevBItems) =>
        prevBItems.filter((item) => !itemsToMove.includes(item.value))
      );
      setSelectedItems((prevSelected) =>
        prevSelected.filter((item) => !itemsToMove.includes(item))
      );
    };

    // 전체 선택 체크 여부와 버튼 활성화 상태
    const isASelectAllChecked =
      aItems.length > 0 && aItems.every((item) => selectedItems.includes(item.value));
    const isBSelectAllChecked =
      bItems.length > 0 && bItems.every((item) => selectedItems.includes(item.value));
    const isMoveRightDisabled =
      selectedItems.every((item) => bItems.some((i) => i.value === item)) || selectedItems.length === 0;
    const isMoveLeftDisabled =
      selectedItems.every((item) => aItems.some((i) => i.value === item)) || selectedItems.length === 0;

    return (
      <div className="flex gap-3">
        <div className="flex flex-col gap-2 p-3 border border-silver-300 rounded-md ">
          <div className="flex items-center gap-4 pb-2 border-b border-silver-300">
            <div className="flex items-center gap-2 text-sm">
              <Checkbox
                id="source-all"
                checked={isASelectAllChecked}
                onCheckedChange={() => handleSelectAll(true)}
                disabled={aItems.length === 0}
              />
              <span className="font-semibold">Source</span>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-5 text-center">
                {aItems.filter((item) => selectedItems.includes(item.value)).length}
              </div>
              / <div className="w-5 text-center">{aItems.length}</div> item
            </div>
          </div>

          {aItems.length ?
            <ul className="flex flex-col gap-2 items-start max-h-40 overflow-auto">
              {aItems.map((item) => (
                <li key={item.value}>
                  <Label htmlFor={`A-${item.value}`}
                    className="flex gap-2 items-center text-primary-600 text-sm cursor-pointer"
                  >
                    <Checkbox
                      id={`A-${item.value}`}
                      onCheckedChange={() => handleSelectItem(item.value)}
                      checked={selectedItems.includes(item.value)}
                    />
                    {item.label}
                  </Label>
                </li>
              ))}
            </ul>
            :
            <div className="flex flex-col justify-center items-center my-auto">
              No data
            </div>
          }
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <Button onClick={moveRight} disabled={isMoveRightDisabled} className="size-8">
            <Icons iName="iconPageRight" className="size-5 min-w-5 bg-white" />
          </Button>
          <Button onClick={moveLeft} disabled={isMoveLeftDisabled} className="size-8">
            <Icons iName="iconPageLeft" className="size-5 min-w-5 bg-white" />
          </Button>
        </div>

        <div className="flex flex-col gap-2 p-3 border border-silver-300 rounded-md ">
          <div className="flex items-center gap-4 pb-2 border-b border-silver-300">
            <div className="flex items-center gap-2 text-sm">
              <Checkbox
                id="target-all"
                checked={isBSelectAllChecked}
                onCheckedChange={() => handleSelectAll(false)}
              />
              <span className="font-semibold">Target</span>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-5 text-center">{bItems.filter((item) => selectedItems.includes(item.value)).length}</div>
              / <div className="w-5 text-center">{bItems.length}</div> item
            </div>
          </div>

          {bItems.length ?
            <ul className="flex flex-col gap-2 items-start max-h-40 overflow-auto">
              {bItems.map((item) => (
                <li key={item.value} >
                  <Label htmlFor={`B-${item.value}`}
                    className="flex gap-2 items-center text-lightblue-400 text-sm cursor-pointer"
                  >
                    <Checkbox
                      id={`B-${item.value}`}
                      onCheckedChange={() => handleSelectItem(item.value)}
                      checked={selectedItems.includes(item.value)}
                    />
                    {item.label}
                  </Label>
                </li>
              ))}
            </ul>
            :
            <div className="flex flex-col justify-center items-center my-auto">
              No data
            </div>
          }
        </div>
      </div>
    );
  }
);

Transfer.displayName = "Transfer";