import React, { useState, useEffect } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import Button from "../components/Button";
import { handleEncrypt } from "../components/handleEncrypt";
import Output from "../components/Output";
import Link from "next/link";

const Index: NextPage = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [algorithm, setAlgorithm] = useState<string>("sha256");

  return (
    <div className="index-page">
      <Head>
        <title>Encrypter - Home</title>
      </Head>
      <div className="wrapper">
        <h1>Encrypter</h1>
        <p>
          Type something in the input box to encrypt/hash <br />
          <Link href="/help">I'm new to hashing and hashing algorithms </Link>
        </p>
        <form action="">
          <input
            type="text"
            required
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Input"
          />
          <select
            name=""
            id=""
            value={algorithm}
            onChange={e => setAlgorithm(e.target.value)}
          >
            <option value="sha256">SHA-256</option>
            <option value="sha512">SHA-512</option>
            <option value="md5">MD5</option>
            <option value="sha224">SHA-224</option>
          </select>

          <br />
          <Button
            onClick={(e: React.ChangeEvent<HTMLInputElement>) => {
              let out = handleEncrypt(e, input, algorithm);
              setOutput(out);
            }}
            text="Encrypt"
          />
        </form>

        <Output text={output} />
      </div>
    </div>
  );
};

export default Index;
