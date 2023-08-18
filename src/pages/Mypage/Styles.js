import { Global, css } from "@emotion/react";

export const SLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 50px auto;
  border: 1px solid #dbdbdb;
  border-radius: 12px;
  padding: 20px;
  width: 500px;
  height: 600px;
  background-color: #99ccff;

`;

export const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin: 20px 0px;
`;

export const SProfileImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    overflow: hidden;
    cursor: pointer;
`;

export const SProfileImg = css`
    width: 100%;
`;
export const SFileHidden = css`
    display: none;
`;

export const SInputArea = css`
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;

export const SBtn = css`
    margin: 15px 10px 10px 0px;;
`;

export const Sinvisible = css`
    display: none;
`;
