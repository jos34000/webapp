import SpecialiteSelect from "@/lib/components/Atoms/Rdv/SpecialiteSelect"
import DoctorSelect from "@/lib/components/Atoms/Rdv/DoctorSelect"
import DatePicker from "@/lib/components/Atoms/Rdv/DatePicker.jsx"
import TimeSelect from "@/lib/components/Atoms/Rdv/TimeSelect.jsx"
import SubmitButton from "@/lib/components/Atoms/Rdv/SubmitButton.jsx"
import EnterMotif from "@/lib/components/Atoms/Rdv/EnterMotif.jsx"
import useRdvForm from "@/lib/Hooks/useRdvForm"

export default function RdvForm() {
  const {
    specialite,
    doctor,
    date,
    time,
    motif,
    handleSpecialiteChange,
    handleDoctorChange,
    handleDateChange,
    handleTimeChange,
    handleMotifChange,
    handleSubmit,
  } = useRdvForm()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold text-center mb-10">
        Réservez un créneau
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-xl">
        <SpecialiteSelect
          onSpecialiteChange={handleSpecialiteChange}
          selectedSpecialite={specialite}
        />
        <DoctorSelect
          specialiteId={specialite}
          onDoctorChange={handleDoctorChange}
          doctor={doctor}
        />
        <DatePicker onDateChange={handleDateChange} date={date} />
        <TimeSelect
          doctorId={doctor}
          date={date}
          onTimeChange={handleTimeChange}
          time={time}
        />
        <EnterMotif onMotifChange={handleMotifChange} motif={motif} />
        <SubmitButton />
      </form>
    </div>
  )
}
