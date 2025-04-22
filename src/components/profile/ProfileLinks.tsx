import { Link } from "react-router-dom";

const links = [
  {
    text: "Habla con el Team Albitafit ",
    link: "/",
  },
  {
    text: "Tutoriales",
    link: "/profile/tutorials",
  },
  {
    text: "Datos",
    link: "/profile/data",
  },
  {
    text: "Suscripción",
    link: "/plans",
  },

  {
    text: "Cerra sesión",
    link: "/",
  },
];
const linksExtra = [
  {
    text: "Contraseña",
    link: "/reset-password",
  },
  {
    text: "Cambiar foto",
    link: "/",
  },
  {
    text: "Historial",
    link: "/",
  },
];

const linkStyle = `py-6 text-lg font-medium text-[#333] flex items-center justify-between max-w-[70%] link_arrow_holder cursor-pointer`;
const linkArrowStyles = `ease-in-out duration-300  `;

const ProfileLinks = () => {
  return (
    <div>
      <div className="flex w-full items-start">
        <div className="grid flex-1 border-t border-r">
          {links.map((item, index) => (
            <div className="border-b">
              <Link to={item.link} key={index} className={linkStyle + " " + ``}>
                <p className="ml-[40%] w-fit">{item.text} </p>
                <div className={linkArrowStyles}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                  >
                    <path
                      d="M1 1L6 6L0.999999 11"
                      stroke="#E77B9B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="grid h-fit flex-1 border-t">
          {linksExtra.map((item, index) => (
            <div className="border-b">
              <Link
                to={item.link}
                key={index}
                className={linkStyle + " " + `!max-w-[50%] pl-10`}
              >
                <p>{item.text}</p>
                <div className={linkArrowStyles}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                  >
                    <path
                      d="M1 1L6 6L0.999999 11"
                      stroke="#E77B9B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileLinks;
