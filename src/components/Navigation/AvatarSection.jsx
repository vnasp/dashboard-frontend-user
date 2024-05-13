export default function AvatarSection() {
  return (
    <>
      <div className="mt-8 text-center text-white">
        <img
          src="./avatar.webp"
          alt="María Pérez"
          className="w-10 h-10 m-auto rounded-full object-cover lg:w-32 lg:h-32"
        />
        <h5 className="hidden mt-4 text-xl font-semibold lg:block">
          María Pérez
        </h5>
        <span className="hidden lg:block">Usuario</span>
      </div>
    </>
  );
}
