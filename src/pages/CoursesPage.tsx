import { Courses } from "../components/Courses";
import { AIHealthCheck } from "../components/AIHealthCheck";

export function CoursesPage() {
  return (
    <>
      <div className="pt-24">
        <Courses />
        <AIHealthCheck />
      </div>
    </>
  );
}
