import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@app/router/path';
import { issueAuthorizationCode, type MemberPart } from '../api/member';

export const useIssueAuthorizationCode = () => {
  const navigate = useNavigate();
  const [selectedPart, setSelectedPart] = useState<MemberPart | ''>('');

  const issueCodeMutation = useMutation({
    mutationFn: issueAuthorizationCode,
    onSuccess: (authorizationCode) => {
      localStorage.setItem('authorizationCode', authorizationCode);
      if (selectedPart) {
        localStorage.setItem('selectedPart', selectedPart);
      }
      navigate(PATH.postList);
    },
  });

  const handleIssueCode = () => {
    if (!selectedPart) return;
    issueCodeMutation.mutate(selectedPart);
  };

  const handleGoToBoard = () => {
    if (!localStorage.getItem('authorizationCode')) {
      window.alert('먼저 파트를 선택하고 회원 코드를 발급해 주세요.');
      return;
    }

    navigate(PATH.postList);
  };

  return {
    selectedPart,
    setSelectedPart,
    issueCodeMutation,
    handleIssueCode,
    handleGoToBoard,
  };
};
