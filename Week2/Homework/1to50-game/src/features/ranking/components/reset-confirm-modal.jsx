import Modal from "@/shared/components/modal";
import Button from "@/shared/components/button";

const ResetConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} titleId="reset-modal-title">
      <div className="flex flex-col items-center gap-2">
        <h2 id="reset-modal-title" className="text-heading-01 text-text-primary">
          기록 초기화
        </h2>

        <p className="text-body-01">
          모든 게임 기록이 삭제돼요. 되돌릴 수 없어요.
        </p>

        <div className="flex justify-end gap-2">
          <Button
            variant='secondary'
            onClick={onClose}
          >
            취소
          </Button>

          <Button
            variant='danger'
            onClick={onConfirm}
          >
            초기화
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ResetConfirmModal;