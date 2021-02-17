import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { IItem } from "../common/types";
import { MyContext } from "../state/Context";
import { Button } from "../common/Button";
import {
  StepsDiv,
  StepsTitle,
  StepsList,
  AddStep,
  AddStepText,
  LineBreak,
  StepBlock,
  StepBlockText,
  AddStepModal,
  AddStepModalText,
  AddStepModalTextInput,
  AddStepModalButtonBorder,
} from "./Steps.styled";

const Steps = () => {
  const { dispatch, state } = useContext(MyContext);

  const [addStep, setAddStep] = useState(false);

  const [stepText, setStepText] = useState("");

  const [minutes, setMinutes] = useState<number>();

  const handleChange = (event: any) => {
    setStepText(event.target.value);
  };

  const handleTimeChange = (event: any) => {
    setMinutes(event.target.value);
  };

  const handleAddStep = (payload: IItem) => {
    if (
      !Number.isInteger(payload.time / 60) ||
      payload.time === 0 ||
      !payload.name
    ) {
      return;
    } else {
      dispatch({ type: "ADD_ITEM", payload });
      setAddStep(false);
    }
  };

  const handleRemove = (payload: string) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  return (
    <StepsDiv>
      <StepsTitle>Steps</StepsTitle>
      <LineBreak />

      <StepsList>
        {!addStep ? (
          <>
            <AddStep>
              <AddStepText onClick={() => setAddStep(true)}>
                Add Step
              </AddStepText>
            </AddStep>
            {state.items.map((item) => {
              return (
                <StepBlock key={item.id} onClick={() => handleRemove(item.id)}>
                  <StepBlockText>{item.name}</StepBlockText>
                  <StepBlockText>{item.time / 60} minutes</StepBlockText>
                </StepBlock>
              );
            })}
          </>
        ) : (
          <>
            <AddStepModal>
              <AddStepModalText>Step name</AddStepModalText>
              <AddStepModalTextInput
                type="text"
                value={stepText}
                placeholder="e.g. Chicken"
                onChange={handleChange}
                autoFocus
                key="step-name"
                opaque
              />
              <AddStepModalText>How long does this step take?</AddStepModalText>
              <AddStepModalTextInput
                type="text"
                value={minutes}
                placeholder="e.g. 10"
                onChange={handleTimeChange}
                key="step-time"
                opaque
              />
              <AddStepModalButtonBorder>
                <Button
                  onClick={() =>
                    handleAddStep({
                      id: nanoid(),
                      name: stepText,
                      time: (minutes ?? 0) * 60,
                      complete: false,
                    })
                  }
                  inverted
                  size="small"
                >
                  Add
                </Button>
                <Button onClick={() => setAddStep(false)} inverted size="small">
                  Cancel
                </Button>
              </AddStepModalButtonBorder>
            </AddStepModal>
          </>
        )}
      </StepsList>
    </StepsDiv>
  );
};

export default Steps;
