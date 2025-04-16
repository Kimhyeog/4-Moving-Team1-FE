"use client";
import CustomerCardInEstimate from "@/components/organisms/CustomerCardInEstimate";
import { mockEstimates } from "@/libs/mock/estimates/mockEstimates";
import { Estimate } from "@/types/entities/estimate.entity";

function Page() {
  return (
    <div className="flex flex-col gap-6">
      {mockEstimates.map((estimate: Estimate) => (
        <CustomerCardInEstimate
          key={estimate.id}
          serviceType={estimate.serviceType}
          status={estimate.status}
          customerName={estimate.customerName}
          movingDate={estimate.movingDate}
          departure={estimate.departure}
          destination={estimate.destination}
          isConfirmed={estimate.isConfirmed}
          requestDate={estimate.requestDate}
          price={estimate.price}
          onSendEstimate={() => console.log(`${estimate.id}: 견적 보내기`)}
          onReject={() => console.log(`${estimate.id}: 반려`)}
          onViewDetail={() => console.log(`${estimate.id}: 상세보기`)}
        />
      ))}
    </div>
  );
}

export default Page;
