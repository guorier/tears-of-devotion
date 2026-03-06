"use client";

import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import type { Editor as TinyMCEEditor } from "tinymce";

const TinyEditor = () => {
  const editorRef = useRef<TinyMCEEditor | null>(null);

  return (
    // <Editor
    //   apiKey={undefined}
    //   tinymceScriptSrc="/tinymce/tinymce.min.js"

    //   onInit={(_: unknown, editor: TinyMCEEditor | null) => {
    //     editorRef.current = editor;
    //   }}

    //   init={{
    //     license_key: "gpl",
    //     promotion: false,
    //     external_plugins: {},

    //     base_url: "/tinymce",
    //     suffix: ".min",
    //     skin: "oxide",
    //     skin_url: "/tinymce/skins/ui/oxide",
    //     content_css: "/tinymce/skins/content/default/content.css",

    //     height: 500,
    //     menubar: true,
    //     plugins: [
    //       "advlist", "autolink", "lists", "link", "image",
    //       "charmap", "preview", "anchor", "searchreplace",
    //       "visualblocks", "code", "fullscreen",
    //       "insertdatetime", "media", "table", "paste",
    //       "help", "wordcount"
    //     ],

    //     toolbar:
    //       "undo redo | formatselect | bold italic underline | " +
    //       "alignleft aligncenter alignright alignjustify | " +
    //       "bullist numlist outdent indent | link image table | code",


    //     file_picker_types: "image",
    //     file_picker_callback: (
    //       callback: (url: string, meta?: Record<string, any>) => void,
    //       value: string,
    //       meta: { filetype: string }
    //     ) => {
    //       if (meta.filetype === "image") {
    //         const input = document.createElement("input");
    //         input.type = "file";
    //         input.accept = "image/*";

    //         input.onchange = (e: Event) => {
    //           const target = e.target as HTMLInputElement;
    //           const file = target.files?.[0];
    //           if (!file) return;

    //           const blobUrl = URL.createObjectURL(file);
    //           callback(blobUrl, { alt: file.name });
    //         };

    //         input.click();
    //       }
    //     },
    //   }}
    // />
    <Editor/>
  );
};

export default TinyEditor;
