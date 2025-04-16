// api/estimate.ts

import { client, errorHandler } from "../client";

interface PendingEstimateParams {
  page: number;
  pageSize: number;
}

// 고객의 대기중인 견적들 갖고오기

export const getPendingEstimates = async ({
  page,
  pageSize,
}: PendingEstimateParams) => {
  try {
    const response = await client.get("/estimate/pending", {
      params: { page, pageSize },
    });
    return response.data; // list, totalCount 포함
  } catch (error) {
    errorHandler(error);
  }
};
