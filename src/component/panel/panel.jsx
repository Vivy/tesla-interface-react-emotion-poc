export const Panel = ({ sectionTitle = 'default title', link, children }) => {
  return (
    <div>
      <h1>{sectionTitle}</h1>
      <p>
        Order online for
        <a href={link}>Touchless delivery</a>
      </p>
    </div>
  );
};
