import { Button } from "~/components/ui/button";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
const About = () => {
  return (
    <div>About
      <Button>Click me</Button>
    </div>
  )
}

export default About