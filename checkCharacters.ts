// 문장에 한번이라도 특수문자가 들어갔을 경우 체크
export const checkChar = (data: string) => {
    const regexp = /[~!@#$%^&*()_+|<>?:{}]/;

    return regexp.test(data);
}

// 문장이 특수문자로만 이루어졌을경우
export const checkOnlyChar = (data: string) => {
    const regexp = /^[~!@#$%^&*()_+|<>?:{}]+$/;

    return regexp.test(data);
}