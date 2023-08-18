/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
import React, { useRef, useState } from "react";
import * as S from "./Styles.js";
import { globalStyles } from "./globalStyles.js";

function Mypage(props) {
  const defaultProfileImgSrc = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg";
  const profileImgSrc = localStorage.getItem("profileImg")
    //프로필 이미지 설정: local에 파일이 있으면 그 파일을, 없으면 DefaultUser로 설정
  const [profileImg, setProfileImg] = useState(!!profileImgSrc ? profileImgSrc : defaultProfileImgSrc);
  //프로필파일가져오는것과 클릭이벤트를 연동
  const profileFileInput = useRef();

  //로컬스토리지로부터 user객체를 가져옴
  const localStorageUser =JSON.parse(localStorage.getItem("user")); 

  //유저객체의 데이터는 로컬스토리지의 값을 가져옴
  let user = {
    username: localStorageUser?.username && localStorageUser.username,
    name: localStorageUser?.name && localStorageUser.name,
    email: localStorageUser?.email && localStorageUser.email
  };

  //프로필사진 클릭시 Ref를 통해 연결된 profileFileInput을 '클릭'되도록 함
  const handleProfileImgChangeClick = () => {
    profileFileInput.current.click();
  };

  //이미지 업로드시 들고오고 업로드
  const handleProfileImgSelect = (e) => {
    const reader = new FileReader();
    reader.onload = (e) => { //onload이벤트 핸들러 : 파일 읽기가 완료되었을 때 실행
      setProfileImg(e.target.result);//데이터url을 업데이트해해서 이미지를 띄어줌
    };

    //선택한 파일을 읽어옴, 비동기적 Img read, 완료되면 onload 실행
    reader.readAsDataURL(e.target.files[0]);
  };

  //input창 변화를 읽어와서 user객체에 저장
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    user = {
        ...user,
        [name]: value
    }
    console.log(user);
  }
  
  let [ userList, setUserList ] = useState([]);
  const localStorageUserList =JSON.parse(localStorage.getItem("userList")); 
  
  const handleSaveClick = () => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("profileImg", profileImg);
    localStorage.setItem("userList", JSON.stringify(user));
    setUserList({
      ...userList,
      username: localStorageUserList?.user.username && localStorageUser.user.username,
      name: localStorageUserList?.user.name && localStorageUser.user.name,
      email: localStorageUserList?.user.email && localStorageUser.user.email
      
     //setUserList([...userList, user]);

  })
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
