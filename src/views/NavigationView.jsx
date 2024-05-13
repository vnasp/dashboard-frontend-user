import AvatarSection from "./../components/Navigation/AvatarSection"
import LogoSection from "./../components/Navigation/LogoSection";
import LogOutSection from "./../components/Navigation/LogOutSection";
import MenuSection from "./../components/Navigation/MenuSection";

export default function NavigationView() {
  return (
    <aside className="navigation">
      <LogoSection />
      <AvatarSection />
      <MenuSection />
      <LogOutSection />
    </aside>
  );
}
