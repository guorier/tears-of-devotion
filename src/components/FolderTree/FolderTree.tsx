"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { FcFolder, FcOpenedFolder, FcSurvey } from "react-icons/fc";


interface Folder {
  id: string;
  name: string;
  children?: Folder[];
}

interface FolderTreeProps {
  folders: Folder[];
  checked: Record<string, boolean>;
  setChecked: Dispatch<SetStateAction<Record<string, boolean>>>;
}

export const FolderTree = ({ folders, checked, setChecked }: FolderTreeProps) => {
  const initExpand = (list: Folder[], acc: Record<string, boolean> = {}) => {
    list.forEach((f) => {
      acc[f.id] = true;
      if (f.children) initExpand(f.children, acc);
    });
    return acc;
  };

  const [expanded, setExpanded] = useState<Record<string, boolean>>(
    initExpand(folders)
  );

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const updateCheckState = (id: string, isChecked: boolean, folder?: Folder) => {
    setChecked((prev) => {
      const next = { ...prev };

      const markChildren = (node?: Folder) => {
        if (!node?.children) return;
        node.children.forEach((child) => {
          next[child.id] = isChecked;
          next[`half-${child.id}`] = false;
          markChildren(child);
        });
      };

      const updateParent = (nodeId: string, list: Folder[]) => {
        for (const n of list) {
          if (n.children?.some((c) => c.id === nodeId)) {
            const allChecked = n.children.every((c) => next[c.id]);
            const someChecked = n.children.some((c) => next[c.id]);

            next[n.id] = allChecked;
            next[`half-${n.id}`] = !allChecked && someChecked;
            updateParent(n.id, folders);
          } else if (n.children) updateParent(nodeId, n.children);
        }
      };

      next[id] = isChecked;
      next[`half-${id}`] = false;

      markChildren(folder);
      updateParent(id, folders);

      return next;
    });
  };

  const BASE_INDENT = 23;
  const INDENT = 28;

  const renderFolders = (
    nodes: Folder[],
    depth = 0,
    ancestors: boolean[] = []
  ) =>
    nodes.map((folder, index) => {
      const hasChildren = !!folder.children?.length;
      const isExpanded = expanded[folder.id];
      const isHalf = checked[`half-${folder.id}`];
      const isLast = index === nodes.length - 1;

      const left = BASE_INDENT + depth * INDENT;
      const lineLeft = (BASE_INDENT + (depth - 1) * INDENT);
      const padding = depth === 0 ? 16 : left - 7;

      return (
        <li key={folder.id} className="relative">

          {ancestors.map(
            (hasMore, level) =>
              hasMore && (
                <span key={level}
                  className="absolute border-l border-silver-500 !!!!"
                  style={{
                    left: (BASE_INDENT + level * INDENT) + 2,
                    top: 0,
                    bottom: isLast ? "50%" : 0,
                  }}
                />
              )
          )}

          {depth > 0 && (
            <span
              className="absolute border-l border-silver-500"
              style={{
                left: lineLeft + 2,
                top: 0,
                bottom: isLast && !hasChildren ? "50%" : 0,
              }}
            />
          )}
          {depth > 0 && (
            <span
              className="absolute border-t border-silver-500"
              style={{
                left: lineLeft + 2,
                top: "14px",
                width: INDENT - 16,
              }}
            />
          )}

          <div
            className="flex items-center gap-[10px] px-2 h-7 cursor-pointer hover:bg-[#d8e5fd]"
            style={{ paddingLeft: padding }}
          >
            {hasChildren ? (
              <span onClick={() => toggleExpand(folder.id)} className="flex items-center justify-center size-5">
                {isExpanded ?
                  <FcOpenedFolder className="size-[18px]" />
                  : <FcFolder className="size-[18px]" />
                }
              </span>
            ) : (
              <span className="flex items-center justify-center size-5">
                <FcSurvey className="size-[18px]" />
              </span>
            )}

            <span
              className="text-lg text-primary-800"
              onClick={() => hasChildren && toggleExpand(folder.id)}
            >
              {folder.name}
            </span>

            <Checkbox
              checked={isHalf ? "indeterminate" : checked[folder.id] || false}
              onCheckedChange={(val) =>
                updateCheckState(folder.id, val === true, folder)
              }
            />
          </div>

          {hasChildren && isExpanded && (
            <ul className="pl-0 flex flex-col">
              {renderFolders(folder.children!, depth + 1, [
                ...ancestors,
                !isLast,
              ])}
            </ul>
          )}
        </li>
      );
    });

  return <ul className="select-none p-2">{renderFolders(folders)}</ul>;
};
