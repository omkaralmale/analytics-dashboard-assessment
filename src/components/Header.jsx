import logo from "../assets/mapuu.png";
const Header = () => {
  return (
    <header className="bg-transparent top-0 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-6 w-auto" />
      </div>

      <div className="flex gap-2 text-sm text-gray-600 items-center">
        admin@mapup.com
        <img
          src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
          alt="User Avatar"
          className="h-6 w-6 rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
