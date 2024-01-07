"use client";

import Btn from "@/app/components/btn";
import useQuery from "@/hooks/useQuery";

import Image from "next/image";
import { api_get_single_campaign } from "../server";

export default function ViewForm({
  data,
  hideModal,
}: {
  data: {
    name: string;
    image: string;
    updatedAt: Date;
    id: string | number;
  };
  hideModal: () => void;
}) {
  const { isLoading, data: capData } = useQuery({
    options: {
      queryFn: () => api_get_single_campaign(data.id),
      queryKey: ["get-single-campaign" + data.id],
    },
  });

  // @ts-ignore
  const campaignData: Array<{ [key: any]: any }> = capData?.data?.data?.data;

  return (
    <section>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <span className="loading loading-spinner loading-md"></span>
        </div>
      ) : (
        <>
          {campaignData && campaignData.length
            ? campaignData.map((item, index) =>
                Object.entries(item).map((inner: any) => (
                  <div key={inner[0] + index}>
                    {inner[0]}: {inner[1]}
                  </div>
                )),
              )
            : null}

          <Btn
            type="button"
            label="cancel"
            className="btn-neutral mt-xl"
            onClick={hideModal}
          />
        </>
      )}
    </section>
  );
}
