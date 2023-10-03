function EnterLinkForm({
  isLoading,
  hasError,
  userURL,
  setUserUrl,
  handleSubmit,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="form-bg -mt-16 flex flex-col gap-4 rounded-lg bg-dark-violet bg-right-top bg-no-repeat p-4 sm:flex-row sm:items-center sm:bg-cover sm:px-6 sm:py-10"
    >
      <div
        className={`relative sm:mb-0 sm:flex-1 ${hasError ? "mb-4" : "mb-0"}`}
      >
        <label
          htmlFor="user-url"
          id="user-url-label"
          className={`absolute left-4 top-1/2 -translate-y-1/2 font-medium text-grayish-violet ${
            hasError && "font-normal text-red"
          } ${userURL && "hidden"}`}
        >
          Shorten a link here...
        </label>
        <input
          type="text"
          name="user-url"
          id="user-url"
          value={userURL}
          onChange={(e) => setUserUrl(e.target.value)}
          className={`w-full rounded-lg py-2 pl-3 ${
            hasError && "border-2 border-red"
          }`}
        />
        <span
          className={`absolute -bottom-6 left-0 text-sm text-red ${
            !hasError ? "hidden" : "block"
          }`}
        >
          {hasError && hasError}
        </span>
      </div>
      <div>
        <button
          disabled={isLoading}
          className="btn btn-primary block w-full disabled:bg-slate-600"
        >
          {isLoading ? "Loading..." : "Shorten It!"}
        </button>
      </div>
    </form>
  );
}

export default EnterLinkForm;
