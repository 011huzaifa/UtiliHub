"use client";
import { QRCodeCanvas } from "qrcode.react";
import Input from "./ui/Input";
import { useRef, useState } from "react";
import Button from "./ui/Button";
import { DownloadOutlined } from "@ant-design/icons";

const QrCodeTool = () => {
  const [value, setValue] = useState("https://your-website.com");
  const qrRef = useRef<HTMLDivElement>(null);
  const handleDownload = () => {
    if (!qrRef.current) return;

    const canvas = document.querySelector("canvas");
    if (!canvas) return;

    const url = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = url;
    link.download = "qr-code.png";
    link.click();
  };
  return (
    <div className="container mx-auto flex justify-center flex-col items-center gap-8 min-h-[90vh] py-6 px-4">
      <div
        className="qr-code w-full mx-auto "
        ref={qrRef}
      >
        <div className="userinput flex flex-col items-center gap-5 text-center">
          <h4>Type below and your QR <br /> updates instantly</h4>
          <Input
            onChange={(val) => setValue(val)}
            type="text"
            placeholder="Type Something..."
            width="w-65"
          />
        </div>
        <div className="qr-code flex flex-col items-center gap-5 mt-10">
          <QRCodeCanvas value={value} size={250} bgColor="white" fgColor="black" />
          <Button width="w-64" onClick={handleDownload}>
            Download <DownloadOutlined className="text-xl" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QrCodeTool;
