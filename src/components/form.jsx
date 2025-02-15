import { useState } from "react";
import { useTranslation } from "react-i18next";

function FormContact() {
  const { t } = useTranslation();
  const [successMessage, setSuccessMessage] = useState(""); // Estado para mensagem

  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    const form = event.target;

    // Envia os dados para FormSubmit
    fetch("https://formsubmit.co/victor.manso@outlook.com.br", {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage("✅ " + t("translation.contact.form.sucs-msg"));
          form.reset(); // Reseta os campos do formulário

          // Oculta a mensagem após 3 segundos
          setTimeout(() => setSuccessMessage(""), 3000);
        } else {
          setSuccessMessage("❌ " + t("translation.contact.form.err-msg"));
        }
      })
      .catch(() =>
        setSuccessMessage("❌ " + t("translation.contact.form.err-msg"))
      );
  };

  return (
    <div className="w-full content-center place-items-center flex flex-col justify-center">
      <div className="text-center font-bold text-2xl m-4 p-2">
        <h1>{t("translation.contact.title")}</h1>
        <p className="font-medium text-sm">
          {t("translation.contact.subtitle")}
        </p>
      </div>
      <div className="w-full flex justify-center">
        <form
          onSubmit={handleSubmit} // Captura o envio do formulário
          className="w-3/4 sm:w-1/2 flex flex-col shadow-sm shadow-blue-300 transition-all duration-500 focus-within:shadow-blue-400 focus-within:shadow-xl bg-slate-900 p-4 gap-4 rounded-md"
        >
          <input
            type="text"
            name="name"
            placeholder={t("translation.contact.form.name")}
            className="bg-slate-800 p-2 rounded-md focus:outline-2 focus:outline-slate-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("translation.contact.form.email")}
            className="bg-slate-800 p-2 rounded-md focus:outline-2 focus:outline-slate-400"
            required
          />
          <textarea
            name="message"
            placeholder={t("translation.contact.form.message")}
            className="bg-slate-800 p-2 rounded-md focus:outline-2 focus:outline-slate-400"
            required
          ></textarea>

          <input type="hidden" name="_captcha" value="false" />

          <button
            type="submit"
            className="hover:bg-slate-600 text-sm transition border-amber-50 border-1 rounded-md w-1/4"
          >
            {t("translation.contact.form.send")}
          </button>
        </form>
      </div>

      {successMessage && (
        <div className="mt-4 p-2 bg-green-500 text-white rounded-md transition-opacity duration-500">
          {successMessage}
        </div>
      )}
    </div>
  );
}

export default FormContact;
