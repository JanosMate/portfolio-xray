export default function Home() {
  return (
    <main>
      <h1>Portfolio Simulator</h1>

      <form>
        <label>
          Equity %
          <input type="number" />
        </label>

        <br />

        <label>
          Gold %
          <input type="number" />
        </label>

        <br />

        <label>
          Fee %
          <input type="number" />
        </label>

        <br />

        <button>
          Simulate
        </button>
      </form>
    </main>
  );
}