export default function AvatarSection() {
  return (
    <>
      <section className="navigation__user">
        <img
          src="./avatar.webp"
          alt="Valentina Muñoz"
          className="navigation__user--img"
        />
          <h5 className="navigation__user--name">Valentina Muñoz</h5>
          <p className="navigation__user--role">Usuario</p>
      </section>
    </>
  );
}
