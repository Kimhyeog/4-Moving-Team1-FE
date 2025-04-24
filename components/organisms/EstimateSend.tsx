"use client";

import { DriverWithMeta } from "@/types/move.type";
import ButtonSolid from "../atoms/ButtonSolid";
import { useState } from "react";
import EstimateCardInModal from "./EstimateCardInModal";

interface Props {
  onClose: () => void;
  driver: DriverWithMeta | null; // 리뷰를 남길 드라이버 정보
}

function EstimateSend(props: Props) {
  const { onClose, driver } = props;
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);
  if (!driver) return <div>해당 기사가 없습니다.</div>;

  return (
    <div
      className="
    /* 공통 */
    bg-[#FFFFFF] flex flex-col

    /* 모바일 전용 */
    gap-y-[26px] rounded-tl-[32px] rounded-tr-[32px] px-[24px] py-[32px] w-full

    /* 태블릿 이상 */
    md:gap-x-10 md:rounded-[32px] md:px-6 md:py-8
    md:w-[650px]
  "
    >
      <div
        className="
    /* 공통 */
    flex items-center justify-between text-[#1F1F1F] 

    /* 모바일 전용 */
    text-[18px] font-[700]

    /* 태블릿 이상 */
    md:text-[24px] md:font-[600]
  "
      >
        <h2>견적 보내기</h2>
        <button onClick={onClose}>X</button>
      </div>
      <EstimateCardInModal
        customerName={"김형준"}
        movingDate={new Date()}
        departure={"우리집"}
        destination={"낙원 스낵"}
        serviceType={"smallMove"}
      />
      <div
        className="
    /* 공통 */
    flex flex-col gap-y-4 font-[600]

    /* 모바일 전용 */
    text-[16px] 
    h
    /* 태블릿 이상 */
    md:text-[20px]
    "
      >
        <h4>견적가를 입력해 주세요.</h4>
        <input
          placeholder="견적가 입력"
          className="
    /* 공통 */
    bg-[#F7F7F7] p-[14px] outline-0

    /* 모바일 전용 */
    
    /* 태블릿 이상 */
    "
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div>
        <hr className="border-t border-gray-100" />
      </div>
      <div
        className="
    /* 공통 */
    flex flex-col gap-y-4 font-[600] rounded-4

    /* 모바일 전용 */
    text-[16px] 
    
    /* 태블릿 이상 */
    md:text-[20px]
    "
      >
        <h4>코멘트를 입력해 주세요.</h4>
        <textarea
          name="detailReview"
          onChange={(e) => setComment(e.target.value)}
          placeholder="최소 10자 이상 입력해주세요."
          className="
    /* 공통 */
    bg-[#F7F7F7] outline-0 py-[14px] h-40 rounded-4 align-top resize-none

    /* 모바일 전용 */
    px-4 

    /* 태블릿 이상 */
    md:px-6
  "
        />
      </div>
      <div
        className="
      /* 공통 */
      
  
      /* 모바일 전용 */
      text-4 
      
      /* 태블릿 이상 */
      md:text-5
      "
      >
        <ButtonSolid
          onClick={() => {}}
          disabled={comment.trim() === "" || loading}
        >
          {loading ? "보내는는 중..." : "견적 보내기"}
        </ButtonSolid>
      </div>
    </div>
  );
}

export default EstimateSend;
