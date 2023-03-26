import dynamic from "next/dynamic";

const EditorExample = dynamic(() => import("@/components/EditorExample"), {
  ssr: false,
});

export default function Home() {
  return <EditorExample />;
}
