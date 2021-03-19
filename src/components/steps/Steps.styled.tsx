import styled from 'styled-components';

export const StepsDiv = styled.div`
    height: 48%;
`;

export const StepsTitle = styled.div`
    font-size: 24px;
    font-weight: 500;
`;

export const StepsList = styled.div`
    overflow: auto;
    height: 100%;
`;

export const AddStep = styled.div`
    height: 70px;
    background-color: #70380f;
    border-radius: 13px;
    border: 2px dashed #ffe3c8c7;
    :hover {
        cursor: pointer;
    }
`;

export const AddStepText = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 500;
`;

export const LineBreak = styled.hr`
    border: 2px solid #ffe3c8;
    background-color: #ffe3c8;
    border-radius: 17px;
    margin-top: 2%;
    margin-bottom: 2%;
`;

export const StepBlock = styled.div<{ selected: boolean }>`
    height: 70px;
    background-color: #ffc791;
    border-radius: 13px;
    margin-top: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    border-width: ${(props) => (props.selected ? '4px' : '0px')};
    border-style: solid;
    border-color: #2b1d0e;
    :hover {
        cursor: pointer;
    }
`;

export const StepBlockText = styled.div`
    display: flex;
    /* height: 100%; */
    /* align-items: center;
  justify-content: center; */
    font-size: 24px;
    font-weight: 500;
    color: #4e2c0b;
`;

export const AddStepModal = styled.div`
    height: 95%;
    background-color: #ffc791;
    border-radius: 13px;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 5%;
`;

export const AddStepModalText = styled.div<{ opaque?: boolean }>`
    font-size: 1.5em;
    color: ${(props) => (props.opaque ? '#3a3a3a' : '#4e2c0b')};
    font-weight: 500;
    margin-bottom: 6%;
    opacity: ${(props) => (props.opaque ? 0.7 : 1)};
`;

export const AddStepModalTextInput = styled.input<{ opaque?: boolean }>`
    font-size: 1.5em;
    color: ${(props) => (props.opaque ? '#3a3a3a' : '#4e2c0b')};
    font-weight: 500;
    margin-bottom: 6%;
    opacity: ${(props) => (props.opaque ? 0.8 : 1)};
`;

export const AddStepModalButtonBorder = styled.div`
    display: flex;
    min-width: 230px;
    width: 40%;
    justify-content: space-between;
    align-self: flex-end;
`;
