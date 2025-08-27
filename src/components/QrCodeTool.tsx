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

    const url = canvas.toDataURL("image/svg");

    const link = document.createElement("a");
    link.href = url;
    link.download = "qr-code.svg";
    link.click();
  };
  return (
    <div className="container mx-auto flex justify-center flex-col items-center gap-8 min-h-[90vh] py-6 px-4">
      <div
        className="qr-code w-full mx-auto "
        ref={qrRef}
      >
        <div className="userinput flex flex-col items-center gap-5 mb-16">
          <Input
            onChange={(val) => setValue(val)}
            type="text"
            placeholder="type..."
          />
          <p>Type above and your QR updates instantly</p>
        </div>
        <div className="qr-code flex flex-col items-center gap-5 mt-5">
          <QRCodeCanvas value={value} size={250} />
          <Button width="w-[250px]" onClick={handleDownload}>
            Download <DownloadOutlined className="text-xl" />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QrCodeTool;
