// 문장에 한번이라도 숫자가 들어갔을경우 체크 
export const checkNum = (data:string) => {
    const regexp = /[0-9]/;

    return regexp.test(data);
}

// 문자에 전부 숫자만 들어가있는지 체크
export const checkOnlyNum = (data:string) => {
    const regexp= /^[0-9]+$/;

    return regexp.test(data);
}