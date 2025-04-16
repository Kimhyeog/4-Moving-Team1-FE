// api/estimate-request/estimateRequest.api.ts

import axios from "axios";

interface CreateEstimateRequestDto {
  serviceType: string; // smallMove, bigMove 등
  movingDate: string; // ISO 형식 문자열
  departureAddress: string;
  destination: string;
  departureArea: string;
}

export const createEstimateRequest = async (data: CreateEstimateRequestDto) => {
  try {
    const response = await axios.post("/api/estimate-request", data);
    return response.data;
  } catch (error) {
    console.error("견적 요청 생성 실패:", error);
    throw new Error("견적 요청 생성에 실패했습니다.");
  }
};
