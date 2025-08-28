import { CloudDownloadOutlined, DownloadOutlined } from "@ant-design/icons";
import imageCompression from "browser-image-compression";
import { useState } from "react";
import Button from "./ui/Button";

const ImageCompressor = () => {
  const [originalImage, setOriginalImage] = useState("");
  const [compressedImage, setCompressedImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0];
    if (!file) {
      console.log("didn't find any file");
      return;
    }
    setOriginalImage(URL.createObjectURL(file));
    console.log(file.name, file instanceof Blob);
    console.log(`file ${file.name} size is ${file.size / 1024} KB`);

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(file, options);
      setIsLoading(true);
      console.log(
        `Size of compressed ${compressedFile.name} is ${
          compressedFile.size / 1024
        } KB`
      );
      var compressedImages = await imageCompression.getDataUrlFromFile(
        compressedFile
      );
      setCompressedImage(compressedImages);
      setIsLoading(false);
    } catch (error) {
      console.error(error, "Compressing image");
    }
  };
  return (
    <div className="container mx-auto flex justify-center flex-col items-center gap-8 min-h-[90vh] py-6 px-4">
      <h3 className="text-center">Image Compressor</h3>
      <div className="image-compressor w-full">
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-96 py-5 border-2 border-black border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-blue-50 transition"
          >
            <div className="flex flex-col items-center justify-center pb-6">
              <CloudDownloadOutlined className="text-4xl" />
              <p className="text-lg font-medium">Drop Your Files Here</p>
              <p className="text-sm text-gray-400">or click to select</p>
            </div>
            <div className="selector pl-26">
              <input
                onChange={handleFileUpload}
                id="dropzone-file"
                type="file"
                accept="image/*"
                className=""
              />
            </div>
          </label>
        </div>
        <h2 className="text-center">{isLoading ? "Compressing" : ""}</h2>
        {compressedImage && (
          <div className="compressed-image w-full flex items-start justify-center gap-x-20 mt-5">
            <div className="original-image">
              <h4>Original File</h4>
              <img className="w-120" src={originalImage} alt={originalImage} />
            </div>
            <div className="compressed-image ">
              <h4 className="text-right">Compressed File</h4>
              <img
                className="w-120 mb-2"
                src={compressedImage}
                alt={compressedImage}
              />
              <Button>
                Download <DownloadOutlined className="text-xl" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ImageCompressor;
