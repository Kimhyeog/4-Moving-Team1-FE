// api/estimate/workerOnly/estimate.api.ts

import { client, errorHandler } from "@/api/client";

interface SendEstimatePriceParams {
  estimateId: string;
  price: number;
  comment?: string;
}

/**
 * 견적 금액을 서버에 전송합니다. (assigned 상태에서만 가능)
 * 한번 전송하면 수정할 수 없습니다.
 */
export async function sendEstimatePrice({
  estimateId,
  price,
  comment,
}: SendEstimatePriceParams): Promise<void> {
  try {
    await client.put(`/estimate/price/${estimateId}`, {
      price,
      ...(comment && { comment }),
    });
  } catch (error) {
    errorHandler(error);
  }
}
