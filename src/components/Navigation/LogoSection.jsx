export default function LogoSection() {
  return (
    <>
      <section className="navigation__logo">
        <a href="/" title="Logo">
          <img
            src="./logo.webp"
            className="w-36"
            alt="Logo"
            width={100}
            height={100}
          />
        </a>
      </section>
    </>
  );
}
