// 문자에 하나라도 영문이 들어갔는지 체크
export const checkEng = (data:string) => {
    const regexp = /[a-zA-Z]/;

    return regexp.test(data)
}

// 문장이 전부 영어로 이루어져있는지 체크
export const checkOnlyEng = (data:string) => {
    const regexp = /^[a-zA-Z]+$/;

    return regexp.test(data)
}

// 문장에 한번이라도 대문자가 들어있는지 체크
export const checkUpperEng = (data:string) => {
    const regexp = /[A-Z]/;

    return regexp.test(data);
}

// 문장에 한번이라도 소문자가 들어있는지 체크
export const checkLowerEng = (data:string) => {
    const regexp = /[a-z]/;

    return regexp.test(data)
}

// 문장이 전부 대문자로 이루어져있는지 체크
export const checkOnlyUpperEng = (data:string) => {
    const regexp = /^[A-Z]+$/;

    return regexp.test(data)
}

// 문장이 전부 소문자로 이루어져있는지 체크
export const checkOnlyLowerEng = (data:string) => {
    const regexp = /^[a-z]+$/;

    return regexp.test(data);
}