import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import * as S from './SocialHeader.styles';
import FriendManageModal from './socialModal/FriendManageModal';
import QuestionIcon from '@/assets/icons/QuestionIcon.png';
import AwesomeAlert from 'react-native-awesome-alerts';

type SocialHeaderProps = {
    month: number | null;
    week: number | null;
};

function SocialHeader({ month, week }: SocialHeaderProps) {

    const [showAlert, setShowAlert] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <S.Container>
            <S.Header>
                <S.HeaderLeft>
                    <S.DateText>{month}월 {week}주차 랭킹</S.DateText>
                </S.HeaderLeft>
                <S.HeaderRight>
                    <S.ManageButton onPress={() => setModalVisible(true)}>
                        <S.ManageText>친구관리</S.ManageText>
                    </S.ManageButton>
                </S.HeaderRight>

            </S.Header>
            <S.Body>
                <S.BodySideBox></S.BodySideBox>
                <S.BodyBox>
                    <S.RankText>RANKING</S.RankText>
                </S.BodyBox>
                <S.BodySideBox>
                    <TouchableOpacity onPress={() => setShowAlert(true)}>
                        <S.QuestionImage source={QuestionIcon} />
                    </TouchableOpacity>
                </S.BodySideBox>
            </S.Body>

            <FriendManageModal 
                isVisible={modalVisible}
                onClose={() => setModalVisible(false)}
            />

            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="안내사항"
                message={"상위 20명의 거리 기준 랭킹입니다."}
                closeOnTouchOutside={true}
                onDismiss={() => {
                    setShowAlert(false);
                }}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="확인"
                confirmButtonColor="blue"
                onConfirmPressed={() => {
                    setShowAlert(false);
                }}
            />

        </S.Container>
    );
};

export default SocialHeader;
