"use client";

import { FormEvent, useState } from "react";

import * as XLSX from "xlsx";

type Props = {
  setValue: (fieldName: string, value: string) => void;
};

export default function UploadExcelSheetWithPhones({ setValue }: Props) {
  const [error, setError] = useState<null | string>(null);

  function handleUploadSpreedsheet(e: FormEvent<HTMLInputElement>) {
    setError(null);
    const files = e.currentTarget.files;
    if (files?.length) {
      const file = files[0];
      // type of file
      const type = file.type.includes("spreadsheet");

      if (!type) {
        setError("invalid file type, Excel files only allowed");
        return false;
      }

      // read data
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target?.result;
        if (data) {
          const workbook = XLSX.read(data, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
          // setExcelData(jsonData);

          const realData = jsonData
            .slice(1)
            .flatMap((item) => "+20" + item)
            .join(",");

          setValue("phones", realData);
        }
      };

      reader.readAsBinaryString(file);
    }
  }

  return (
    <>
      {error && (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
      <label className="mt-[35px] text-sm flex  items-center justify-center capitalize h-full bg-slate-300 py-xs px-sm rounded cursor-pointer">
        <input
          type="file"
          className="hidden"
          onChange={handleUploadSpreedsheet}
          accept=".xls, .xlsx, .csv"
        />

        <span>upload excel file</span>
      </label>
    </>
  );
}
