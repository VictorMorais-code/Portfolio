function FormContact() {
  return (
    <div className="w-full content-center place-items-center felx flex-col justify-center">
      <div className="text-center  font-bold text-2xl m-4 p-2">
        <h1>Contato</h1>
        <p className="font-medium text-sm">
          Sinta-se à vontade para entrar em contato, responderei com prazer.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <form className="w-3/4 sm:w-1/2 flex flex-col shadow-lg bg-slate-900 p-4 gap-4 rounded-md">
          <input
            type="text"
            placeholder="Name"
            className="bg-slate-800 p-2 rounded-md focus:outline-2 focus:outline-slate-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-slate-800 p-2 rounded-md focus:outline-2 focus:outline-slate-400"
          />
          <textarea
            placeholder="Message"
            className="bg-slate-800 p-2 rounded-md focus:outline-2 focus:outline-slate-400"
          ></textarea>
          <button
            type="submit"
            className="hover:bg-slate-600 transition border-amber-50 border-1 rounded-md w-1/4"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormContact;
