import * as S from './RunningMateDeleteModal.styles';
import {Modal} from 'react-native';
import Toast from 'react-native-toast-message';

type DeleteModalProps = {
  toggleDeleteModal: () => void;
  modalVisible: boolean;
  currentIndex: number | null;
};

function AlarmDeleteModal({
  toggleDeleteModal,
  modalVisible,
  currentIndex,
}: DeleteModalProps) {
  const handleAlarmListChange = () => {
    toggleDeleteModal();

    Toast.show({
      type: 'success',
      position: 'top',
      text1: '삭제되었습니다 !',
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 10,
    });
  };

  return (
    <Modal transparent={true} visible={modalVisible}>
      <S.ModalContainer>
        <S.ModalContent>
          <S.ModalHeader>
            <S.HeaderDeleteText>삭제하시겠습니까?</S.HeaderDeleteText>
          </S.ModalHeader>

          <S.ModalFooter>
            <S.ModalButton onPress={handleAlarmListChange}>
              <S.ModalButtonText>확인</S.ModalButtonText>
            </S.ModalButton>
            <S.ModalCancelButton onPress={toggleDeleteModal}>
              <S.ModalButtonText>취소</S.ModalButtonText>
            </S.ModalCancelButton>
          </S.ModalFooter>
        </S.ModalContent>
      </S.ModalContainer>
    </Modal>
  );
}

export default AlarmDeleteModal;
