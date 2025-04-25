"use client";

import EstimateSend from "@/components/organisms/EstimateSend";
import ResponsiveModal from "@/components/templates/ResponsiveModal";
// import { DriverWithMeta } from "@/types/move.type";
import { useState } from "react";

// const mockDriver: DriverWithMeta = {
//   id: "driver1",
//   profileImage: "",
//   nickname: "김철수",
//   experience: 5,
//   summary: "짧은 요약",
//   description: "상세 설명",
//   services: ["smallMove", "homeMove"],
//   serviceAreas: { seoul: "서울", gyeonggi: "경기" },
//   countCompleteMoving: 15,
//   isLiked: true,
//   countLike: 50,
//   isDirectEstimate: true,
//   estimatePrice: 50000,
// };

function ReceivedPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10">
      <h1 className="text-2xl font-bold mb-6">GeneralModal 사용 예시</h1>

      <button
        onClick={openModal}
        className="px-6 py-3 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition"
      >
        모달 열기
      </button>

      <ResponsiveModal
        // Desktop일 시, w-608px , h-904px
        // Mobile 일 시, w-full , h-auto

        width="w-[690px]"
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <EstimateSend onClose={closeModal} estimateId={null} />
      </ResponsiveModal>
    </div>
  );
}

export default ReceivedPage;
