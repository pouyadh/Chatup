import React, { useEffect, useRef } from "react";

export default function CodeWrapper({ value, ...props }) {
  let safeValue = [""];
  if (
    value &&
    typeof value === "object" &&
    value.reduce(
      (prv, val) => prv && typeof val === "string" && val.length <= 1,
      true
    )
  ) {
    safeValue = value;
  }
  return <Code value={safeValue} {...props} />;
}
function Code({
  value,
  onChange,
  onComplete,
  inputsStyle,
  autoFocus,
  ...props
}) {
  const count = value.length;
  const refs = useRef(
    Array(count)
      .fill(null)
      .map(() => ({ current: undefined }))
  );
  const handleChange = (e, refIndex) => {
    const { value } = e.target;
    if (isNaN(value)) {
      e.preventDefault();
    }
    if (value && refIndex < count - 1) {
      refs.current[refIndex + 1].current.focus();
    } else {
      refs.current[refIndex].current.blur();
    }
    const isComplete = refs.current.reduce(
      (prv, ref) => prv && ref.current.value !== "",
      true
    );
    const event = {
      target: {
        value: refs.current.map((ref) => ref.current.value),
        isComplete,
      },
    };
    onChange(event);
  };

  useEffect(() => {
    if (value.reduce((prv, val) => prv && val !== "", true)) {
      const event = {
        target: {
          value: refs.current.map((ref) => ref.current.value),
          isComplete: true,
        },
      };
      onComplete(event);
    }
  }, [value, onComplete]);

  const handleKeyDownCapture = (e) => {
    if (
      isNaN(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Tab" &&
      e.key !== "Home" &&
      e.key !== "End"
    )
      e.preventDefault();
  };
  return (
    <div {...props}>
      {refs.current.map((ref, index) => (
        <input
          style={{
            fontFamily: "monospace",
            fontSize: 20,
            width: "2em",
            textAlign: "center",
            border: "none",
            borderBottom: "2px solid grey",
            marginLeft: 5,
            ...inputsStyle,
          }}
          type="text"
          maxLength={1}
          ref={ref}
          key={index}
          value={value[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDownCapture={handleKeyDownCapture}
          onPasteCapture={(e) => e.preventDefault()}
          autoFocus={index === 0 && autoFocus}
        />
      ))}
    </div>
  );
}
