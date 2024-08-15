import styled from 'styled-components'

export const ConfirmOrderDialogOverlay = styled.div`
  background: rgba(0 0 0 / 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
  z-index: 1;
`

export const ConfirmOrderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  padding: 18px;
  margin: 0 8px;
`

export const ConfirmOrderForm = styled.form`
  width: 100%;
`

export const ConfirmOrderDescription = styled.span`
  font-size: 14px;
  text-align: right;
  width: 100%;
`
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
`
export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
`
export const ProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-right: 8px;

  & span {
    font-size: 10px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.textSecondary};
  }

  & img {
    width: 60px;
    height: 60px;
    overflow: hidden;
    border-radius: 50%;
    line-height: 0px;
    object-fit: contain;
  }
`
export const ProfileChangeImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  gap: 4px;

  & button {
    padding: 2px 12px;
    border-radius: 4px;
    font-size: 10px;
    cursor: pointer;
  }
`
export const ChangeImageButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
`
export const DeleteImageButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.placeholder};
  color: ${(props) => props.theme.colors.red};
  font-weight: bold;
`

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ProfileInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;

  & label {
    font-size: 10px;
    font-weight: 600;

    &.required {
      color: ${(props) => props.theme.colors.danger};
      font-weight: bold;
    }
  }

  & input {
    padding: 4px 8px;
    outline: 1px solid ${(props) => props.theme.colors.border};
    border: none;
    border-radius: 4px;
    flex-grow: 1;
  }

  & .SwitchRoot {
    width: 42px;
    height: 25px;
    background-color: ${(props) => props.theme.colors.border};
    border-radius: 9999px;
    position: relative;
    border: none;

    &.SwitchRoot:focus {
      box-shadow: 0 0 0 2px transparent;
    }

    &.SwitchRoot[data-state='checked'] {
      background-color: ${(props) => props.theme.colors.primary};
    }

    & .SwitchThumb {
      display: block;
      width: 21px;
      height: 21px;
      background-color: ${(props) => props.theme.colors.white};
      border-radius: 9999px;
      box-shadow: 0px 0px 2px ${(props) => props.theme.colors.black};
      transition: transform 100ms;
      transform: translateX(2px);
      will-change: transform;
    }
    & .SwitchThumb[data-state='checked'] {
      transform: translateX(19px);
    }
  }
`
export const ProfileInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 4px 0;
  width: 100%;
`

export const InputNumber = styled.input`
  width: 50px;
`
export const ConfirmOrderAction = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 8px;
  gap: 4px;

  & button {
    padding: 4px 8px;
    border: none;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
    background-color: transparent;
  }

  & button:nth-child(2) {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
`
