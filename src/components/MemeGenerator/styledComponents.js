import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center
  align-items: center;
  width: 90%;
  @media screen and (min-width: 768px){
   width: 50%;
  }
`

export const MainHeading = styled.h1`
  color: #35469c;
  font-family: 'Roboto';
  font-size: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 576px) {
    font-size: 28px;
  }
`
export const MobileContainerView = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 576px) {
    width: 70%;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`

export const InputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`

export const InputLabel = styled.label`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 16px;
  margin-bottom: 10px;
`

export const Input = styled.input`
  width: 100%;
  border: 2px solid #d7dfe9;
  padding: 12px 10px 12px 10px;
  outline: none;
  font-family: 'Roboto';
  font-size: 16px;
  color: #5a7184;
  font-weight: 500;
  border-radius: 8px;
  @media screen and (min-width: 576px) {
    width: 70%;
  }
`

export const SelectContainer = styled.select`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  padding: 12px 10px 12px 10px;
  width: 100%;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 2px solid #d7dfe9;
  @media screen and (min-width: 576px) {
    width: 70%;
  }
`
export const Option = styled.option`
  font-size: 14px;
`

export const GenerateButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  font-family: 'Roboto';
  padding-top: 12px;
  padding-bottom: 12px;
  width: 50%;
  align-self: flex-start;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  @media screen and (min-width: 576px) {
    width: 30%;
    font-size: 18px;
    padding-top: 18px;
    padding-bottom: 18px;
    padding-left: 10px;
    padding-right: 10px;
  }
`
export const DesktopContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 500px;
    height: 300px;
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`

export const InputText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: ${props => props.fontValue}px;
  font-weight: 500;
`
