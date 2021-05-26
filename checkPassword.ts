// 비밀번호가 영문 + 숫자 + 특수문자 합해서 6~12자리 인지 체크
export const checkPassword = (data:string) => {
    const regexp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,12}$/;

    return regexp.test(data);
} 

