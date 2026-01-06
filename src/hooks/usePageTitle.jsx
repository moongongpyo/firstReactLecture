import React, {useEffect} from 'react';

const usePageTitle = (title) => {
  useEffect(()=>{
    const $titleTag = document.getElementsByTagName("title")[0];
    if ($titleTag) {
      $titleTag.innerText = title;
    }
  },[title]);

};

export default usePageTitle;