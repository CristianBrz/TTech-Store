
const Spinner = ({mensaje}) => {
  return (
    <section className="flex items-center justify-center min-h-screen" aria-busy="true">
      <div className="text-center">
        <div className="
          inline-block
          animate-spin
          rounded-full
          size-12
          border-4
          border-red-800
          border-t-transparent
        "></div>
        <p className="mt-4 text-gray-600">
          {mensaje}
        </p>
      </div>
    </section>
  )
}

export default Spinner
