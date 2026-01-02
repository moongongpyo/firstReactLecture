/*asset 폴더에 있는 리소스는 자동으로 캐싱돼서 최적화됨
* 단, 이미지 자원이 너무 많은 경우에는 오히려 브라우저 메모리에 보관하고 캐싱하는게 비 효율 적일 수 있음, 상황에 따라 선택
* */
import emotion1 from "./../assets/emotion1.png";
import emotion2 from "./../assets/emotion2.png";
import emotion3 from "./../assets/emotion3.png";
import emotion4 from "./../assets/emotion4.png";
import emotion5 from "./../assets/emotion5.png";

export function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 1:
      return emotion1;
    case 2:
      return emotion2;
    case 3:
      return emotion3;
    case 4:
      return emotion4;
    case 5:
      return emotion5;
    default:
      return null;
  }

}