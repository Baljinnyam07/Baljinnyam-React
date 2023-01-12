export default function MenuOptions() {
  const menu = [
    "Resolutuibs",
    "Decision Making",
    "Psychology",
    "Self Improvement",
    "Science",
  ];

  return (
    <>
      <div className="d-flex">
        {menu.map((menus) => (
          <div id="menuOptions" className="p-1 fs-6 bg-secondary rounded-4">
            {menus}
          </div>
        ))}
      </div>
    </>
  );
}
