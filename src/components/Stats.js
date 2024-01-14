export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list 🙂</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const remainder = numItems - numPacked;
  console.log(remainder);
  return (
    <footer className="stats">
      <em>
        {remainder === 0
          ? 'You got everything! Ready to go ✈️'
          : `💼 You have ${numItems} items on your list, and you already packed
          ${numPacked}. You have ${remainder} item(s) left to pack.`}
      </em>
    </footer>
  );
}
