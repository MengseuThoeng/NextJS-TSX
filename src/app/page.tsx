import { Suspense } from "react";
import LoadingComponent from "./loading";
import { UserType } from "@/types/users";
import UserCard from "@/components/cards/UserCardComponent";


async function fetchUsers() {
  const users = await fetch("https://dummyjson.com/users", {
    cache: "no-store",
  });
  const res = await users.json();
  return res.users;
}

export default async function Home() {
  const users = await fetchUsers();

  return (
    <>
      <h1 className="font-bold text-large text-center font-">Here are the users</h1>
      <h1 className="font-kantumruy text-center">នេះជាអ្នកប្រើប្រាស់</h1>
      <div className="mt-10 grid grid-cols-3 gap-5 justify-center">
        <Suspense fallback={<LoadingComponent />}>
          {users?.map((user: UserType) => (
            <UserCard
              key={user.id}
              maidenName={user.maidenName}
              email={user.email}
              image={user.image}
            />
          ))}
        </Suspense>
      </div>
    </>
  );
}
