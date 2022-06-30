// @ts-check -> 타입스크립트로 js파일을 보호해줌
//  jsDoc => '/','*','*'을 입력해주면 자동완성 뜸, 이는 js파일도 타입스크립트처럼 체크해줌, but 에러는 발생x => 단순히 코멘트이기때문
/**
 * Initialize the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */
export function init2(config) {
  return true;
}

/**
 * Exit the program
 * @param {number} code
 * @returns {number}
 */
export function exit2(code) {
  return code + 1;
}

//js파일을 typescript처럼 보호받고 싶을때
//tsconfig.json에서 allowJS: true로 해주고
//js파일에서 상단에 //@ts-check
//그리고 위와 같이 적어주면됨
