import Modal from '@/shared/components/modal';
import Button from '@/shared/components/button';

const GameCompleteModal = ({
  isOpen,
  finalTime,
  onConfirm,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onConfirm}
    >
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-heading-01 text-text-primary">게임 완료!</h2>

        <p className="text-body-01 text-text-secondary">
          플레이 시간: {(finalTime/1000).toFixed(2)}초
        </p>

        <Button
          onClick={onConfirm}
        >
          확인
        </Button>
      </div>

    </Modal>
  );
};

export default GameCompleteModal;