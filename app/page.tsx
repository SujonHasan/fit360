import HomePage from "@/src/containers/home";
import Protected from "@/src/containers/layout/protected";

export default function Home() {
  return (
    <Protected>
      <HomePage />
    </Protected>
  );
}
