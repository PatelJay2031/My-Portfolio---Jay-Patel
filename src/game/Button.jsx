import "./App.css";

export default function Button({ incr, count }) {

  return (
    <div className="gamebutton">
      <button
        onClick={() => {
          incr(count);
        }}
      >
        click Me
      </button>
    </div>
  );
}
