"use client";

import { Upload } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Icon } from "./Icon";

interface AvatarDropzoneProps {
  label: string;
  onFileUploaded: (file: File) => void;
}

export function AvatarDropzone({ label, onFileUploaded }: AvatarDropzoneProps) {
  const [selectedFileUrlPoster, setSelectedFileUrlPoster] = useState("");
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrlPoster(fileUrl);
    onFileUploaded(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div
      className="
        w-40
        h-40
        rounded-3xl 
        bg-gray-border 
        dark:bg-gray-borderDark 
        border-2 
        border-dashed 
        border-gray-borderDark
        dark:border-gray-border
        overflow-hidden
        flex
        flex-col
        items-center
        justify-center
        cursor-pointer
      "
      {...getRootProps()}
    >
      <input {...getInputProps()} accept="image/*" />
      {selectedFileUrlPoster ? (
        <img
          className="object-cover w-full flex-1"
          src={selectedFileUrlPoster}
          alt="avatar"
        />
      ) : (
        <>
          <Icon isMain icon={<Upload />} />
          <p className="text-sm mt-2">{label}</p>
        </>
      )}
    </div>
  );
}
