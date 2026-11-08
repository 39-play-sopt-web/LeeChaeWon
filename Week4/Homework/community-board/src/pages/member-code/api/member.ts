import { http } from '@shared/api/http';
import { API_ENDPOINTS } from '@shared/api/endpoints';
import type { MemberPart } from '../types/member';

interface IssueAuthorizationCodeRequest {
  part: MemberPart;
}

interface IssueAuthorizationCodeData {
  authorizationCode: string;
}

export async function issueAuthorizationCode(part: MemberPart) {
  const response = await http.post<
    IssueAuthorizationCodeData,
    IssueAuthorizationCodeRequest
  >(API_ENDPOINTS.members.authorizationCode, { part });

  if (!response.isSuccess) {
    throw new Error(response.message || '회원 코드 발급에 실패했습니다.');
  }

  return response.data.authorizationCode;
}
