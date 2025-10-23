import ResumeItem from "../components/ResumeItem";

export default function Resume() {
  return (
    <>
      <h1>My Resume</h1>
      <ResumeItem
        name="Alvaro Montoro"
        dept="Software Engineering"
        position="Senior Software Engineer"
        startDate="2017"
        endDate="2025"
      >
        Developed high-quality web apps using React and Node.js.
      </ResumeItem>
    </>
  );
}


