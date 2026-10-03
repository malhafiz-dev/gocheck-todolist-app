function Stats({ items }) {
  const totalItems = items.length;
  const doneItems = items.filter((item) => item.done).length;
  const percentage = Math.round((doneItems / totalItems) * 100);

  if (totalItems === 0) {
    return (
      <footer className="stats">
        <h3>📝 Yuk Mulai Bikin Catatan 📝</h3>
      </footer>
    );
  }

  return (
    <footer className="stats">
      <h3>
        {percentage === 100
          ? "kamu sudah menyelesaikan semuanya 😊✅"
          : `📋 Kamu punya ${totalItems} catatan dan baru ${doneItems} yang di checklist (${percentage}%)`}
      </h3>
    </footer>
  );
}

export default Stats;
