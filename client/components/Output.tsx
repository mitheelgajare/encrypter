import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Button from "./Button";
import { handleCopy } from "./handleCopy";

interface Props {
  text: string;
}

const Output: NextPage<Props> = ({ text }) => {
  if (!text) {
    return null;
  }

  const [copied, setCopied] = useState<boolean>(false);

  return (
    <React.Fragment>
      <textarea className="output" value={text} readOnly></textarea> <br />
      <Button
        text="Copy"
        onClick={e => {
          handleCopy(e, text);
          setCopied(true);
        }}
      />
      {copied ? <p style={{ color: "red" }}>Copied</p> : null}
    </React.Fragment>
  );
};

export default Output;
