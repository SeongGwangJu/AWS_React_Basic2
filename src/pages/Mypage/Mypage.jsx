/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
import React, { useRef, useState } from "react";
import * as S from "./Styles.js";
import { globalStyles } from "./globalStyles.js";

function Mypage(props) {
    const defaultProfileImgSrc = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg";
    const profileImgSrc = localStorage.getItem("profileImg")
    //프로필 이미지 설정
  const [profileImg, setProfileImg] = useState(!!profileImgSrc ? profileImgSrc : defaultProfileImgSrc);
  //프로필파일가져오는것과 클릭이벤트를 연동
  const profileFileInput = useRef();

  const localStorageUser =JSON.parse(localStorage.getItem("user")); 

  let user = {
    username: localStorageUser?.username && localStorageUser.username,
    name: localStorageUser?.name && localStorageUser.name,
    email: localStorageUser?.email && localStorageUser.email
  };


  const handleProfileImgChangeClick = () => {
    profileFileInput.current.click();
  };
  //이미지 업로드시 들고오고 업로드
  const handleProfileImgSelect = (e) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setProfileImg(e.target.result);
    };
    
    reader.readAsDataURL(e.target.files[0]);
  };

  //user 저장관련
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name +" 입력창에 변화가 발생" +"\n변화내용 :" + value);
    user = {
        ...user,
        [name]: value
    }
//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };
  }
  
  const handleSaveClick = () => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("profileImg", profileImg);
  };

  return (
    <>
      <div css={S.SLayout}>
        <Global styles={globalStyles} />
        <div>
          <div css={S.SProfileImgBox} onClick={handleProfileImgChangeClick}>
            <img css={S.SProfileImg} src={profileImg} />
            <input
              css={S.SFileHidden}
              type="file"
              ref={profileFileInput}
              onChange={handleProfileImgSelect}
            />
          </div>
        </div>
        <div css={S.SContainer}>
          <div css={S.SInputArea}>
            <label htmlFor="username">사용자명 </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleInputChange}
              defaultValue={user.username}
            />
          </div>
          <div css={S.SInputArea}>
            <label htmlFor="name">이름 </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
              defaultValue={user.name}
            />
          </div>
          <div css={S.SInputArea}>
            <label htmlFor="email">이메일 </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleInputChange}
              defaultValue={user.email}
            />
          </div>
          <div>
            <button css={S.SBtn} onClick={handleSaveClick}>
              저장
            </button>

            <div>
              <input type="checkbox" /> 회원명단보기
            </div>
          </div>
        </div>
        <div css={S.Sinvisible}>
          <h1>회원명단</h1>
        </div>
      </div>
    </>
  );
}
export default Mypage;
