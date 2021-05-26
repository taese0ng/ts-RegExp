import {checkOnlyNum} from './checkNumber';

// 음절과 숫자로만 이루어져있으며, 숫자로만은 이루어지지 않는지 그리고 10글자 이하인지 체크
export const checkKorNum = (data: string) => {
    const regexp = /(^[가-힣|0-9]{1,10})+$/;

    if(checkOnlyNum(data)){
        return false
    }

    return regexp.test(data);
}
