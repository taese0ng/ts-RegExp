// 휴대폰 번호 형식 체크
export const checkPhoneNum = (data: string) => {
    const regexp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

    return regexp.test(data);
}