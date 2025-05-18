"use client";

import { useUserStore } from "@/stores/user";

export default function HomePage() {
  const username = useUserStore((state) => state.username);
  const setUsername = useUserStore((state) => state.setUsername);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Hello, {username || "Guest"}!</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setUsername("다경")}
      >
        이름 설정하기
      </button>
    </main>
  );
}
