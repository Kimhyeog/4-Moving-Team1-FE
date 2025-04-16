// app/pending-estimates/PendingEstimatesPage.tsx

"use client";

import React, { useEffect, useState } from "react";
import type { Estimate } from "@/types/entities/estimate.entity";
import { getPendingEstimates } from "@/api/estimates/estimate";
import CustomerCardInEstimate from "@/components/organisms/CustomerCardInEstimate";

const PendingEstimatesPage = () => {
  const [estimates, setEstimates] = useState<Estimate[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEstimates = async () => {
      setLoading(true);
      const data = await getPendingEstimates({ page: 1, pageSize: 10 });
      if (data) {
        setEstimates(data.list);
        setTotalCount(data.totalCount);
      }
      setLoading(false);
    };

    fetchEstimates();
  }, []);

  if (loading) return <p>로딩 중...</p>;

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-2xl font-bold">대기중인 견적 목록</h1>
      <p>총 {totalCount}건</p>
      <ul className="flex flex-col gap-6">
        {estimates.map((estimate: Estimate) => (
          <li key={estimate.id}>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingEstimatesPage;
