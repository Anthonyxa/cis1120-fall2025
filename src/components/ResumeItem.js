export default function ResumeItem({
  name,
  dept,
  position,
  startDate,
  endDate,
  children
}) {
  return (
    <section className="resume-item">
      <h2>{name}</h2>
      <h3>{position}</h3>
      <p>{dept}</p>
      <p>{startDate} – {endDate}</p>
      <div>{children}</div>
    </section>
  );
}

