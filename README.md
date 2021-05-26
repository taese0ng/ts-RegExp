# ts-RegExp
Typescript로 된 정규표현식 모음

## checkCharacters.ts
- checkChar - 문장에 한번이라도 특수문자가 들어갔을 경우 체크
- checkOnlyChar - 문장이 특수문자로만 이루어져있는지 체크

## checkEmail.ts
- checkEmail - Email 형식 체크

## checkEnglish.ts
- checkUppereng - 문장에 한번이라도 대문자가 들어갔을 경우 체크
- checkLowerEng - 문장에 한번이라도 소문자가 들어갔을 경우 체크
- checkOnlyUpperEng - 문장이 전부 대문자로 이루어져있는지 체크
- checkOnlyLowerEng - 문장이 전부 소문자로 이루어져있는지 체크

## checkKorean.ts
- checkKor - 문장에 한번이라도 한글이 들어갔을 경우 체크
- checkKorUnit - 문장에 한번이라도 자음 또는 모음이 단독으로 들어갔는지 체크
- checkOnlyKor - 문장이 전부 음절로 이루어져있는지 체크

## checkNumber.ts
- checkNum - 문장에 한번이라도 숫자가 들어갔을 경우 체크
- checkOnlyNum - 문장이 전부 숫자로 이루어져있는지 체크

## checkPassword.ts
- checkPassword - 비밀번호가 영문 + 숫자 + 특수문자 합해서 6~12자리 인지 체크

## checkPhoneNum.ts
- checkPhoneNum - 휴대폰 번호 형식 체크

## customCheck.ts
- checkNickName - 문장이 음절과 숫자로만 이루어져있으며, 숫자로만은 이루어져있지 않고 10글자 이하인지 체크
