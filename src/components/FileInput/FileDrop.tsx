"use client";

import { useState, useCallback } from "react";
import { twMerge } from "tailwind-merge";
import { Upload, Trash2 } from "lucide-react";
import Icons from "@/components/Icons";
import { SpinnerBar } from "@/components/Spinner/SpinnerBar";

interface FileInfo {
  file: File;
  status: "uploading" | "done" | "error";
  message?: string;
}

interface FileDropProps {
  onFiles?: (files: File[]) => void;
}

// 랜덤 상태
const getRandomStatus = (): FileInfo["status"] => {
  const r = Math.random();
  if (r < 0.33) return "uploading";
  if (r < 0.66) return "done";
  return "error";
};

export default function FileDrop({ onFiles }: FileDropProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<FileInfo[]>([]);

  const handleFiles = (newFiles: File[]) => {
    const mapped: FileInfo[] = newFiles.map((file) => ({
      file,
      // status: "done",
      status: getRandomStatus(),
    }));

    setFiles((prev) => [...prev, ...mapped]);
    onFiles?.(newFiles);
  };

const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
  setIsDragging(false);

  const dropped = Array.from(e.dataTransfer.files);
  handleFiles(dropped);
};



  

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const removeAll = () => {
    setFiles([]);
  };

  return (
    <div className="krds-file-upload line w-full flex flex-col gap-4">

      <div className="file-head">
        <h3 className="tit text-lg font-bold">파일 타이틀영역</h3>
        <p className="text-sm text-gray-600">파일 컨텐츠 영역</p>
      </div>

      <div
        className={twMerge(
          "file-upload border border-dashed rounded-lg p-6 text-center transition",
          isDragging
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 bg-white"
        )}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <p className="txt mb-4 text-gray-600">
          첨부할 파일을 여기에 끌어다 놓거나, 파일 선택 버튼을 눌러 파일을 직접 선택해주세요.
        </p>

        <div className="file-upload-btn-wrap">
          <input
            type="file"
            id="krds-file-upload"
            className="hidden"
            multiple
            onChange={(e) => {
              const selected = Array.from(e.target.files || []);
              handleFiles(selected);
            }}
          />
          <label
            htmlFor="krds-file-upload"
            className="krds-btn medium bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer inline-flex items-center"
          >
            <Upload className="inline-block w-4 h-4 mr-1" />
            파일선택
          </label>
        </div>
      </div>

      {files.length > 0 ?
        <div className="p-4 flex flex-col gap-3 rounded-md bg-gray-50 border">
          <div className="flex justify-between items-center">
            <div className="font-semibold text-base text-gray-700">
              <span className=" text-blue-500">{files.length}개</span> / 10개
            </div>
            <button
              type="button"
              onClick={removeAll}
              className="text-base text-gray-700 hover:underline flex items-center gap-1"
            >
              <Trash2 className="min-w-4 size-4" />
              전체 파일 삭제
            </button>
          </div>

          <ul className="flex flex-col gap-2">
            {files.map((info, index) => (
              <li
                key={index}
                className={twMerge(
                  "p-3 border rounded-md bg-white",
                  info.status === "error" && "border-error-100 bg-red-50"
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="file-name text-sm text-gray-800">
                    {info.file.name} [{Math.round(info.file.size / 1024)}KB]
                  </div>

                  <div className="btn-wrap flex items-center gap-2">
                    {info.status === "uploading" &&
                      <SpinnerBar className="size-5 text-blue-500" />
                    }
                    {info.status === "done" &&
                      <Icons iName="IconCheckSpeech" className="size-5 min-w-5" original />
                    }

                    {info.status !== "uploading" && (
                      <Icons
                        original
                        iName="IconCloseCircle"
                        className="size-5 min-w-5 cursor-pointer"
                        onClick={() => removeFile(index)}
                      />
                    )}
                  </div>
                </div>

                {info.status === "error" && (
                  <p className="flex items-center gap-2 text-error-200 mt-1 text-sm">
                    <Icons iName="IconErr" className="size-5 min-w-5" original />
                    {info.message ||
                      "등록 가능한 파일 용량을 초과하였습니다. 20MB 미만만 등록 가능합니다."}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
        : ""
      }
    </div>
  );
}
