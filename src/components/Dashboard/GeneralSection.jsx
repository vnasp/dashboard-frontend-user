
export default function GeneralSection() {
  return (
    <>
      <section className="flex flex-col gap-6">
        <article className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white text-center">
          Selector
        </article>

        <article className="md:col-span-2 lg:col-span-1 h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white text-center">
          <h5 className="text-xl text-gray-700">Renderizado</h5>
        </article>
      </section>
    </>
  );
}
