import ChipEstimateStatus from "@/components/atoms/ChipEstimateStatus";
import ChipMovingType from "@/components/atoms/ChipMovingType";
import ChipText from "@/components/atoms/ChipText";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

type Props = {
  customerName: string;
  movingDate: Date;
  departure: string;
  destination: string;
  serviceType: string;
};

export default function EstimateCardInModal({
  customerName,
  movingDate,
  departure,
  destination,
  serviceType,
}: Props) {
  const formattedMovingDate = format(movingDate, "yyyy. MM. dd(eee)", {
    locale: ko,
  });

  return (
    <div
      className="
    /* 공통 */
    flex flex-col

    /* 모바일 전용 */
    gap-y-3

    /* 태블릿 이상 */
    md:gap-y-6
  "
    >
      <div
        className="
    /* 공통 */
    flex items-center font-[600]

    /* 모바일 전용 */
    text-[13px] gap-x-2
    
    /* 태블릿 이상 */
    md:text-[16px] md:gap-x-3
  "
      >
        <ChipMovingType type={serviceType} />
        <ChipEstimateStatus type="assigned" />
      </div>

      <div
        className="
    /* 공통 */
   flex flex-col w-full px-[10px] py-[10px] radius-[6px] gap-y-3 

    /* 모바일 전용 */
    font-[500] text-[14px]
    
    /* 태블릿 이상 */
    md:font-[600] md:text-[16px]
  "
      >
        <div
          className="
    /* 공통 */
    w-full flex 

    /* 모바일 전용 */
    gap-x-1  text-[14px]
    /* 태블릿 이상 */
    md:gap-x-2 md:text-6 md:text-[24px]
  "
        >
          <h2>{customerName}</h2>
          <h2>고객님</h2>
        </div>
        <div>
          <hr className="border-t border-gray-100" />
        </div>

        <div
          className="
    /* 공통 */
    w-full flex items-center

    /* 모바일 전용 */
    gap-x-2 text-[14px]
    
    /* 태블릿 이상 */
    md:gap-x-4 md:text-[18px]
  "
        >
          <ChipText>이사일</ChipText>
          <span>{formattedMovingDate}</span>
        </div>
        <div
          className="
    /* 공통 */
    w-full flex items-center

    /* 모바일 전용 */
    gap-x-[14px] text-[14px]
    
    /* 태블릿 이상 */
    md:gap-x-4 md:text-[18px]
  "
        >
          <div
            className="
    /* 공통 */
     flex items-center

    /* 모바일 전용 */
    gap-x-2 text-[14px]
    
    /* 태블릿 이상 */
    md:gap-x-3 md:text-[18px]
  "
          >
            <ChipText>출발</ChipText>
            <span>{departure}</span>
          </div>
          <span className="text-gray-200">|</span>
          <div
            className="
    /* 공통 */
     flex items-center

    /* 모바일 전용 */
    gap-x-2 text-[14px]
    
    /* 태블릿 이상 */
    md:gap-x-3 md:text-[18px]
  "
          >
            <ChipText>도착</ChipText>
            <span>{destination}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
