import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "StarDentes — Clínica Odontológica" },
      { name: "description", content: "Agende sua consulta na StarDentes. Sorrisos brilhantes, cuidados excepcionais." },
    ],
  }),
});

function Index() {
  return (
    <iframe
      src="/stardentes.html"
      title="StarDentes"
      style={{ border: 0, width: "100vw", height: "100vh", display: "block" }}
    />
  );
}
