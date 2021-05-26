// 문장에 한글이 하나라도 들어갔을 경우 체크
export const checkKor = (data: string) => {
    const regexp = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    return regexp.test(data)
}

// 문장에 자음 또는 모음이 단독으로 한번이라도 들어갔는지 체크
export const checkKorUnit = (data:string) => {
    const regexp = /[ㄱ-ㅎ|ㅏ-ㅣ]/;

    return regexp.test(data)
}

// 문장이 전부 음절로 이루어졌을 경우를 체크
export const checkOnlyKor = (data:string) => {
    const regexp = /^[가-힣]+$/;

    return regexp.test(data)
}