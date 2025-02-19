"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

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
    <Navbar />
    <div className="container">

      <h1>Welcome to the home page</h1>
      <p>You clicked {count} times</p>
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
