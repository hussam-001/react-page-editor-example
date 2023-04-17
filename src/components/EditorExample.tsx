"use client";
import PageLayout from "@/components/PageLayout";
import { Button } from "@mui/material";
import type { Value } from "@hussam-001/editor";
// import Editor from '@hussam-001/editor';
import Editor from "@hussam-001/editor";
import React, { useState } from "react";
import { demo } from "./demo";
import { cellPlugins } from "@/plugins/cellPlugins";

const LANGUAGES = [
  {
    lang: "en",
    label: "English",
  },
  {
    lang: "de",
    label: "Deutsch",
  },
];

export default function EditorExample() {
  const [value, setValue] = useState<Value>(demo);
  const reset = () => setValue(demo);

  return (
    <PageLayout>
      <Editor
        cellPlugins={cellPlugins as any}
        value={value}
        lang={LANGUAGES[0].lang}
        onChange={setValue}
        languages={LANGUAGES}
      />
      <Button onClick={reset}>Reset</Button>
    </PageLayout>
  );
}
