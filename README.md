# Typescript로 블록체인 만들기

** 강의 내용은 course 폴더에 있음 **   

## Why not Javascript?

**타입 안정성**  
Javascript는 매우 유연한 언어, 따라서 실행중 발생하는 런타임에러가 많음

</br>
예시1)

```javascript
const nico = { name: "nico" };
nico.hello();
```

<br/>
예시2)

```javascript
const divide = (a, b) => a / b;
divide(3);
```

위와 같은 코드는 javascript 에서 런타임 에러가 발생함  
typescript 에서는 실행 전에 미리 잘못 되었다고 알려줌

</br>
</br>

## ts-node

기존의 ts파일을 실행시키는 법 = npm build && npm start
npm build를 하여 tsc로 build/index.js파일을 만든 후  
npm start를 하여 node로 build/index.js을 실행함
</br>
**ts-node**를 사용하면 ts파일을 build없이 빠르게 새로고침 할때 사용된
</br>
</br>

## DefinitelyTyped

javascript로 된 package, lib를 typescript가 알게 하려면 .d.ts 파일이 필요  
이때 DefinitelyTyped github repository로 가서 .d.ts를 확인  
npm i -D @types/{package-name} 로 definition파일을 다운 받는다.
command를 누른상태로 package를 눌러서 잘 적용이 되었는지 확인
