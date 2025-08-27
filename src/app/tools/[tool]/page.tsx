"use client";
import QrCodeTool from "@/components/QrCodeTool";
import { notFound } from "next/navigation";

const tools: Record<string, React.ComponentType> = {
    "qr-code-generator": QrCodeTool
}
export default function ({ params }: { params: { tool: string } }) {
    const {tool} = params; 
    const ToolComponents = tools[tool] 
    if(!ToolComponents) return notFound();
  return <div>
    <ToolComponents />
  </div>;
}
