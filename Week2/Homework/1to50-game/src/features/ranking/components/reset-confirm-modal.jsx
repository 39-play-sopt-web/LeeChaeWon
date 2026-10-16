import Modal from "@/shared/components/modal";

const ResetConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-heading-01 text-text-primary">
          기록 초기화
        </h2>

        <p className="text-body-01">
          모든 게임 기록이 삭제돼요. 되돌릴 수 없어요.
        </p>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-border px-6 py-3 text-text-primary"
          >
            취소
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="rounded-lg bg-primary px-6 py-3 text-text-primary"
          >
            초기화
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ResetConfirmModal;