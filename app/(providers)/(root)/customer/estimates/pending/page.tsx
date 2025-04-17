// app/pending-estimates/PendingEstimatesPage.tsx

"use client";

import React, { useEffect, useState } from "react";
import type { Estimate } from "@/types/entities/estimate.entity";
// import { getPendingEstimates } from "@/api/estimates/estimate";
import CustomerCardInEstimate from "@/components/organisms/CustomerCardInEstimate";
import { mockEstimates } from "@/libs/mock/estimates/mockEstimates";
const PendingEstimatesPage = () => {
  // const [estimates, setEstimates] = useState<Estimate[]>(mockEstimates);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const fetchEstimates = async () => {
    //   setLoading(true);
    //   const data = await getPendingEstimates({ page: 1, pageSize: 10 });
    //   if (data) {
    //     setEstimates(data.list);
    //   }
    //   setLoading(false);
    // };
    // fetchEstimates();
  }, []);

  // if (loading) return <p>로딩 중...</p>;

  return (
    <div
      className="
      pt-8
      w-[327px] md:w-[600px] lg:w-[1400px]
      mx-auto
      grid
      grid-cols-1 lg:grid-cols-2
      gap-4 lg:gap-6

      "
      // 모바일 기본 => 테블릿 => 데스크탑
    >
      {mockEstimates.map((estimate: Estimate) => (
        // eslint-disable-next-line react/jsx-key
        <div className="w-full" key={estimate.id}>
          <CustomerCardInEstimate
            serviceType={estimate.serviceType}
            status={estimate.status}
            customerName={"고객님"} // or 실제 데이터에서 추출
            movingDate={new Date(estimate.movingDate)}
            departure={estimate.departureAddress}
            destination={estimate.destination}
            isConfirmed={estimate.isConfirmed}
            requestDate={new Date()} // 임시값, 실제 생성일이 있으면 교체
            price={estimate.price}
            onSendEstimate={() => {
              console.log("견적 보내기 클릭:", estimate.id);
            }}
            onReject={() => {
              console.log("반려 클릭:", estimate.id);
            }}
            onViewDetail={() => {
              console.log("상세보기 클릭:", estimate.id);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default PendingEstimatesPage;
