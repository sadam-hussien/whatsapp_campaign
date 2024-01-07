import {
  AddBtn,
  PageSize,
  PageTitle,
  Pagination,
  Search,
} from "@/app/(dashboard)/components";

import Transition from "@/app/Transition";

import { pages_transition_default } from "@/constants";

import { api_get_campaigns } from "./server";

import { Type_Pagination, Type_Parmas_config } from "@/app/(dashboard)/types";

import { Type_Campaign_Model } from "./types";

import ModalWrapper from "./components/modalWrapper";

import PageProvider from "@/app/pageProvider";

import TableContainer from "@/app/components/table/tableContainer";

import TableThead from "@/app/components/table/tableThead";

import TableTbody from "@/app/components/table/tableTbody";

import TableTh from "@/app/components/table/tableTh";

import TableTd from "@/app/components/table/tableTd";

import Actions from "@/app/components/table/actions";

import TableTr from "@/app/components/table/tableTr";
import Image from "next/image";
import cls from "@/helpers/cls";
import ChangeStatus from "./components/changeStatus";
import moment from "moment";

export default async function Page({
  searchParams,
}: {
  searchParams: Type_Parmas_config;
}) {
  // await for fetching data on server
  const { data } = await api_get_campaigns(searchParams);

  // get the pagination
  const { last_page }: Type_Pagination = {
    current_page: data?.data.current_page,
    last_page: data?.data.last_page,
    per_page: data?.data.per_page,
    total: data?.data.total,
  };

  // roles data
  const campaignsData = data?.data?.data;

  console.log("campaignsData", campaignsData);

  return (
    <>
      <Transition options={pages_transition_default}>
        <PageProvider title="Campaigns" />

        <section>
          {/* title and add btn  */}
          <div className="flex justify-between flex-wrap items-center gap-base mb-md">
            {/* title  */}
            <PageTitle
              title="Campaigns"
              subTitle="manage and list of campaigns"
            />
            {/* ********** */}
            {/* add btn  */}
            <AddBtn title="create campaign" />
            {/* ********** */}
          </div>
          {/* ********** */}

          {/* search and page size  */}
          <div className="flex flex-wrap items-center gap-base">
            {/* search  */}
            {/* <Search /> */}
            {/* ********** */}

            {/* page size  */}
            {/* <PageSize /> */}
            {/* ********** */}
          </div>
          {/* ********** */}

          {/* table data  */}
          <TableContainer isEmpty={!campaignsData || !campaignsData.length}>
            <TableThead>
              <TableTr>
                <TableTh title="ID" />
                <TableTh title="title" />
                <TableTh title="message type" />
                <TableTh title="message" />
                <TableTh title="file" />
                <TableTh title="count" />
                <TableTh title="remaining" />
                <TableTh title="status" />
                <TableTh title="sending_at" />
                <TableTh title="updated at" />
                <TableTh title="actions" />
              </TableTr>
            </TableThead>
            <TableTbody>
              {campaignsData.map((campData: Type_Campaign_Model) => (
                <TableTr key={campData?.id}>
                  <TableTd title={campData?.id} />
                  <TableTd title={campData?.title.slice(0, 30)} />
                  <TableTd
                    title={campData?.message_type}
                    className="text-center"
                  />
                  <TableTd title={campData?.message.slice(0, 60)} />
                  <TableTd
                    title={
                      campData?.url ? (
                        <Image
                          src={campData?.url}
                          alt={campData?.title}
                          width={50}
                          height={50}
                        />
                      ) : (
                        ""
                      )
                    }
                  />
                  <TableTd title={campData?.count} className="text-center" />
                  <TableTd
                    className="text-center"
                    title={campData?.remaining}
                  />
                  <TableTd
                    title={
                      <ChangeStatus
                        checked={Boolean(campData?.is_active)}
                        id={campData?.id}
                      />
                    }
                  />
                  <TableTd
                    title={moment(campData?.sending_at).format(
                      "MMMM Do YYYY, h:mm:ss a",
                    )}
                  />
                  <TableTd
                    title={moment(campData.updated_at).format(
                      "MMMM Do YYYY, h:mm:ss a",
                    )}
                  />
                  <TableTd
                    className="text-center"
                    title={
                      <Actions
                        id={campData.id}
                        data={campData}
                        edit={false}
                        remove={false}
                      />
                    }
                  />
                </TableTr>
              ))}
            </TableTbody>
          </TableContainer>
          {/* ********** */}

          {/* pagination  */}
          <div className="flex justify-end mt-xl">
            <Pagination pages={Number(last_page)} />
          </div>
          {/* ********** */}
        </section>
      </Transition>

      <ModalWrapper />
    </>
  );
}
