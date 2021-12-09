import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";

const Help = () => {
  return (
    <div className="help-page">
      <div className="wrapper">
        <h1>Help & Support</h1>

        <div className="comm">
          <h2>What is Encryption</h2>
          <p>
            In cryptography, encryption is the process of encoding information.
            This process converts the original representation of the
            information, known as plaintext, into an alternative form known as
            ciphertext. Ideally, only authorized parties can decipher a
            ciphertext back to plaintext and access the original information.
            Encryption does not itself prevent interference but denies the
            intelligible content to a would-be interceptor.
            <a href="https://en.wikipedia.org/wiki/Encryption">Read More ...</a>
          </p>
        </div>

        <div className="comm">
          <h2>What is a cryptographic hash function?</h2>
          <p>
            A cryptographic hash function (CHF) is a mathematical algorithm that
            maps data of an arbitrary size (often called the "message") to a bit
            array of a fixed size (the "hash value", "hash", or "message
            digest"). It is a one-way function, that is, a function for which it
            is practically infeasible to invert or reverse the computation.
            Ideally, the only way to find a message that produces a given hash
            is to attempt a brute-force search of possible inputs to see if they
            produce a match, or use a rainbow table of matched hashes.
            Cryptographic hash functions are a basic tool of modern
            cryptography.
            <a href="https://en.wikipedia.org/wiki/Cryptographic_hash_function">
              Read More ...
            </a>
          </p>
        </div>
        <div className="comm">
          <h2>SHA-2 (SHA-256, SHA-512)</h2>
          <p>
            SHA-2 (Secure Hash Algorithm - 2) is a set of cryptographic hash
            functions designed by the United States National Security Agency
            (NSA) and first published in 2001. They are built using the
            Merkle-Damgard construction, from a one-way compression function
            itself built using the Davies-Mayer structure from a specialized
            black cipher{" "}
            <a href="https://en.wikipedia.org/wiki/SHA-2">Read More ...</a>
          </p>
        </div>
        <div className="comm">
          <h2>MD5</h2>
          <p>
            The MD5 message-digest algorithm is a cryptographically broken but
            still widely used hash function producing a 128-bit hash value.
            Although MD5 was initially designed to be used as a cryptographic
            hash function, it has been found to suffer from extensive
            vulnerabilities. It can still be used as a checksum to verify data
            integrity, but only against unintentional corruption. It remains
            suitable for other non-cryptographic purposes, for example for
            determining the partition for a particular key in a partitioned
            database, and may be preferred due to lower computational
            requirements than more recent Secure Hash Algorithms algorithms.
            <a href="https://en.wikipedia.org/wiki/MD5">Read More ...</a>
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Help;
