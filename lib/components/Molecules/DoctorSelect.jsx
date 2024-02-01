export default function DoctorSelect({ doctors, doctor, setDoctor }) {
  return (
    <div className="mb-6">
      <label
        htmlFor="doctor"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Docteur
      </label>
      <select
        value={doctor}
        onChange={(e) => setDoctor(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="">Médecin</option>
        {doctors.map((doctor, index) => (
          <option key={index} value={doctor.doctorId}>
            Dr. {doctor.lastname}
          </option>
        ))}
      </select>
    </div>
  )
}
