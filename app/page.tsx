import Close from "../components/icons/close.svg";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId?: number;
}

async function getData(): Promise<Todo[]> {
  const response = await fetch("https://dummyjson.com/todos");
  const { todos } = await response.json();
  return todos;
}

export default async function Home() {
  const data = await getData();
  console.log("🚀 ~ file: page.tsx:12 ~ Home ~ data:", data);

  return (
    <main className="container mx-auto p-16">
      Hello world <Close />
    </main>
  );
}
