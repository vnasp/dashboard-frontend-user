export default function AvatarSection() {
  return (
    <>
      <section className="navigation__user">
        <img
          src="./avatar.webp"
          alt="María Pérez"
          className="navigation__user--img"
        />
        <h5 className="navigation__user--name">
          Valentina Muñoz
        </h5>
        <span>Usuario</span>
      </section>
    </>
  );
}
