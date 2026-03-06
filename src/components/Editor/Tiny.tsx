'use client'

import React, { Dispatch, SetStateAction, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import type { Editor as TinyMCEEditor } from 'tinymce';

type TinyInit = NonNullable<React.ComponentProps<typeof Editor>['init']>;



export default function TinyEditor({
  height = 500,
  setContent,
}: {
  height?: number;
  setContent: Dispatch<SetStateAction<string>>;
}) {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const TINY_EDITOR_API_KEY = process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY;



  return (
    <div>
      <Editor
      />
    </div>
  );
}
