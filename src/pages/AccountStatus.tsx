import confirmedLogo from "@/assets/images/account-confirmed.svg";
import pendingLogo from "@/assets/images/account-pending.svg";
import rejectedLogo from "@/assets/images/account-rejected.svg";
import BackButton from "@/components/common/BackButton";
import CommonButton from "@/components/common/CommonButton";
import CommonParagraph from "@/components/common/CommonParagraph";
import CommonTitle from "@/components/common/CommonTitle";

const AccountStatus = () => {
  //   const status => "pending" || "rejected" || "confirmed";

  const status = "pending";

  return (
    <div className="px-14 py-10">
      <BackButton />

      {/* page content */}
      <div className="flex min-h-[80vh] flex-col items-center justify-center gap-14 p-10">
        {/* logo area */}
        <div className="h-[184px] max-w-[184px] min-w-[184px]">
          <img
            src={
              status === "pending"
                ? pendingLogo
                : status === "rejected"
                  ? rejectedLogo
                  : status === "confirmed"
                    ? confirmedLogo
                    : ""
            }
            alt="status_logo"
            className="h-full w-full object-cover"
          />
        </div>

        {/* text area */}
        <div className="flex max-w-[600px] flex-col gap-6 text-center">
          <CommonTitle>
            {status === "pending"
              ? `Validación de cuenta`
              : status === "rejected"
                ? `Cuenta en revisión`
                : status === "confirmed"
                  ? `Cuenta validada`
                  : ``}
          </CommonTitle>
          <CommonParagraph textGray>
            {status === "pending"
              ? `Nuestro equipo esta evaluando tus datos y en un lapso no mayor a 2
            horas te daremos respuesta`
              : status === "rejected"
                ? `Lamentablemente, debemos informarte que tu solicitud para validar tu cuenta ha sido denegada. No podrás acceder a los beneficios y servicios disponibles en este momento. Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nuestro equipo de soporte.`
                : status === "confirmed"
                  ? `Nos complace informarte que tu cuenta ha sido validada con éxito. Ahora puedes disfrutar de todos los beneficios y servicios disponibles.`
                  : ``}
          </CommonParagraph>
        </div>

        {/* button area */}
        {status === "pending" ? (
          <CommonButton text="Continuar" target="/" />
        ) : status === "rejected" ? (
          <CommonButton
            text="Escribir correo electronico"
            target="mailto:support@albitafit.com"
          />
        ) : status === "confirmed" ? (
          <CommonButton text="Selecionar un plan" target="/plans" />
        ) : (
          ``
        )}
      </div>
    </div>
  );
};

export default AccountStatus;
