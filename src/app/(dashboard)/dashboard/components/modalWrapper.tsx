"use client";

import AddForm from "./addForm";

import ViewForm from "./viewForm";

import Modal from "@/app/components/modal";

export default function ModalWrapper() {
  return <Modal add={AddForm} view={ViewForm} />;
}
