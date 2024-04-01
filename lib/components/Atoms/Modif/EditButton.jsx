import Link from "next/link"

function EditButton({ href }) {
  return (
    <div className="flex flex-col justify-center px-4 py-1.5 text-sm font-medium rounded-xl bg-green-400 max-md:px-5">
      <Link href={href} legacyBehavior>
        <button className="justify-center">Modifier</button>
      </Link>
    </div>
  )
}

export default EditButton
