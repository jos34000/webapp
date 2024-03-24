export default function EnterComment({ onCommentChange, comment }) {
  const handleCommentChange = (e) => {
    if (onCommentChange) {
      const motifText = e.target.value
      onCommentChange(motifText)
    }
  }
  return (
    <div className="mt-6">
      <label htmlFor="commentaires" className="mt-6 max-md:max-w-full">
        Commentaires supplémentaires
      </label>
      <input
        value={comment}
        placeholder="Commentaires"
        onChange={handleCommentChange}
        className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>
  )
}
