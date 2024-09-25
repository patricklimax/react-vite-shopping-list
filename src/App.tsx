import { TitleApp } from "./components/title-app";

function App() {
  return (
    <section className="flex-1 border px-2">
      <div className="mt-4 bg-muted">
        <TitleApp title={"Lista de"} subtitle={"Compras"} />
      </div>
    </section>
  );
}

export default App;
