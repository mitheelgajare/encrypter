import React, { useState, useEffect } from "react";
import Link from "next/link";
import type { NextPage } from "next";

const Error404: NextPage = () => {
  return (
    <div className="err404-page">
      <div className="wrapper">
        <h1>Sorry Wrong Page</h1>
        <p>
          Useful Links: <br />
          1. <Link href="/">Home</Link> <br />
          2. <Link href="/help">What am I doing here?</Link>
        </p>
      </div>
    </div>
  );
};

export default Error404;
