import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  padding: 10px;
  width: 100%;
  border: 1px solid #eee;
  max-width: 700px;
  background: #fff;
  margin: 20px;
  border-radius: 3px;

  @media only screen and (max-width: 500px) {
    margin: 10px;
  }
`;

export const List = styled.div``;

export const Spent = styled.div`
  display: flex;
  min-height: 45px;
  border-bottom 1px solid #eee;
  align-items: center;
  padding: 0px 10px;

  @media only screen and (max-width: 500px) {
    padding: 5px;
    align-items: flex-start;
    flex-direction: column;

    div {
      margin: 5px 0px;
    }
  } 
`;

export const AddForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Select = styled.select`
  padding: 5px;
  height: 33px;
  border-radius: 5px;
  margin-top: 4px;
  border: 1px solid #eee;
  background: #fff;
`;

export const Input = styled.input`
  height: 28px;
  margin-top: 4px;
  border-radius: 5px;
  border: 1px solid #eee;
`;
export const Button = styled.button`
  margin: 5px 0px;
  background: #1a73e8;
  max-width: 100px;
  height: 30px;
  color: #fff;
  border-radius: 5px;
  border: none;
  max-width: 104px;
  min-width: 72px;
  cursor: pointer;
`;

export const Title = styled.div`
  display: flex;
  font-size: 16px;
  color: #444;
  padding: 10px;
  border-radius 2px;
  background #EEE;
  margin: 10px 0px;
`;

export const TitleText = styled.div`
  flex: 1;
`;

export const ListContainer = styled.div`
  padding: 10px;
`;

export const SpentName = styled.div`
  flex: 1;
`;

export const SpentValue = styled.div`
  flex: 1;
`;

export const SpentButtons = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  button {
    margin: 0px 5px;
  }
`;