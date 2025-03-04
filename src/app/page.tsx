"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";


import photo from '../../public/lazar.png'
import Head from "next/head";

interface User {
  name: string;
  age: number;
}

interface UserDictionary {
  [key: number]: User;
}


export default function Home() {
  const [count, setCount] = useState(5);
  const [users, setUsers] = useState<UserDictionary>({});

  useEffect(() => {
    async function fetchUserData() {
      // Simple dummy data - this will be from the API - backend
      const dummyUsers: UserDictionary = {
        1: { name: "Alice", age: 25 },
        2: { name: "Bob", age: 30 },
        3: { name: "Carol", age: 22 },
        4: { name: "Jordan", age: 25 }
      };

      setUsers(dummyUsers);
    }

    fetchUserData();
  }, []);

  return (
    <>
    <Head>
      <title>Home Page</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="descriptin" content="An lms course on how to build a school management system" key="title"/>
    </Head>
    <Navbar />
    <div className="container">
      <Image
       src={'/lazar.png'}
       height={150}
       width={150}
       alt="logo"
       
       />



      <h1>Welcome to the home page</h1>
      <Image src={photo} alt="logo"/>
      <p>You clicked {count} times</p>
      <img src="/lazar.png" alt="logo" />
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <div>
        {Object.values(users).map((user, index) => (
          <p key={index}>Name: {user.name}, Age: {user.age}</p>
        ))}
      </div>
    </div>
    </>
  );
}
