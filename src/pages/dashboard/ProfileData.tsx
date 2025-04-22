const profileData = [
  { field: "Edad", value: "28 años" },
  { field: "Estatura", value: "1.75m" },
  { field: "Peso", value: "58kg" },
  { field: "Tipo de cuerpo", value: "tipo H" },
  { field: "Alergias", value: "" },
  { field: "Lesiones", value: "" },
  { field: "Objetivo", value: "Perder peso" },
  { field: "Cuántas veces comes", value: "" },
];

const ProfileData = () => {
  return (
    <div>
      <ul className="columns-2 gap-0">
        {profileData.map((item, index) => (
          <li className="flex border py-8" key={index}>
            <div className="mx-auto flex w-full max-w-[70%] items-center justify-between">
              <div className="flex items-center gap-1.5 text-[22px] leading-5 font-medium text-[#333]">
                <p> {item.field}: </p>
                <input
                  type="text"
                  defaultValue={item.value}
                  className="w-fit focus:outline-none"
                  readOnly
                />
              </div>

              <div className="h-6 w-6 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  className="h-full w-full"
                >
                  <g clip-path="url(#clip0_713_6512)">
                    <path
                      d="M21.9798 5.15348C21.971 5.85848 21.5747 6.83229 20.7739 7.63325C16.5481 11.8592 12.3196 16.0824 8.09444 20.3091C7.92966 20.4738 7.73968 20.5609 7.51838 20.6078C5.64312 21.0066 3.76854 21.4067 1.89396 21.8082C1.09932 21.9784 0.615865 21.4918 0.787457 20.6983C1.19737 18.8004 1.60525 16.9025 2.00971 15.0038C2.05193 14.8044 2.14386 14.6425 2.28617 14.5003C6.43095 10.3614 10.5778 6.22392 14.7157 2.07826C15.2584 1.53453 15.8427 1.07587 16.5787 0.83157C19.2684 -0.0619374 21.9832 1.89657 21.9798 5.15348ZM2.86972 19.8742C2.90308 19.8667 2.94394 19.8572 2.98548 19.8484C4.26289 19.5734 5.53894 19.2958 6.81771 19.027C6.97705 18.9937 7.09689 18.9215 7.20788 18.8099C10.3115 15.7068 13.4152 12.6037 16.5229 9.50533C16.6605 9.36786 16.6768 9.29029 16.5284 9.14398C15.4954 8.12458 14.4692 7.09769 13.4479 6.06604C13.313 5.92994 13.2409 5.93198 13.106 6.06672C10.0058 9.17324 6.90078 12.275 3.79509 15.3754C3.67661 15.4931 3.60035 15.6211 3.56562 15.7878C3.42263 16.4853 3.26874 17.1808 3.11894 17.8769C2.99229 18.4656 2.867 19.0542 2.74034 19.6429C2.71719 19.7545 2.67566 19.8715 2.86972 19.8742ZM20.285 4.70638C20.2782 4.57913 20.2741 4.45255 20.2646 4.3253C20.2612 4.27494 20.2489 4.22458 20.2373 4.17559C20.0222 3.29841 19.4972 2.68459 18.631 2.42736C17.7418 2.16332 16.9104 2.3212 16.2206 2.97313C15.6786 3.48555 15.1631 4.02656 14.6286 4.54714C14.5026 4.67032 14.4999 4.74789 14.6265 4.87379C15.6629 5.90068 16.6952 6.93096 17.7213 7.96738C17.8602 8.10756 17.9406 8.09191 18.0686 7.95989C18.565 7.44883 19.0716 6.94798 19.5741 6.44304C20.0521 5.96328 20.2993 5.38825 20.285 4.70638Z"
                      fill="#E77B9B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_713_6512">
                      <rect
                        width="21.2271"
                        height="21.2271"
                        fill="white"
                        transform="translate(0.75293 0.613281)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileData;
