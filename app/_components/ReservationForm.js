function ReservationForm({ cabin }) {
  // CHANGE
  const { maxCapacity } = cabin;
  return (
    <div className="scale-[1.01]">
      <div className="bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center">
        <p>Logged in as</p>

        {/* <div>
          <img
            // Important to display google profile images
            referrerPolicy="no-referrer"
            src={user.image}
            alt={user.name}
            className='h-8 rounded-full'
          />
          <p>{user.name}</p>
        </div> */}
      </div>

      <form className="bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col">
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            name="numGuests"
            id="numGuests"
            required
          >
            <option value="" key="">
              Select number of guests....
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">Anything we should know about your stay?</label>
          <textarea
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            name="observations"
            id="observations"
            placeholder="Any pets, allergies, special treatments, etc.?"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <p className="text-primary-300 text-base">Start by selecting dates</p>

          <button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            Reserve now
          </button>
        </div>
      </form>
    </div>
  );
}
export default ReservationForm;
