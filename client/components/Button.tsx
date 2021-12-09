import React, { useState, useEffect } from "react";
import type { NextPage } from "next";

interface Props {
  onClick?: (e: any) => any;
  text: string;
}

const Button: NextPage<Props> = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
