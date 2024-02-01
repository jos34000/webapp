/*         <div className="mb-6">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Date
          </label>
          <select
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">Choisissez une date</option>
            {availableDates.map((dateObj) => (
              <option key={dateObj.date} value={dateObj.date}>
                {new Date(dateObj.date).toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </option>
            ))}
          </select>
        </div>{" "}
        <div className="mb-6">
          <label
            htmlFor="time"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Time
          </label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">Heure</option>
            <option value="9:00">9:00</option>
            <option value="9:30">9:30</option>
            <option value="10:00">10:00</option>
          </select>
        </div> */
