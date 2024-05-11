function Top() {
	return (
		<nav className="row-span-1 col-span-full flex justify-between items-center px-8 shadow-md  w-full bg-white h-[10vh] z-20">
			<div className="flex items-center gap-2">
				<img className="w-7 " src="/icons/logo.svg" alt="logo" />
				<h2 className="font-medium">studyIQ</h2>
			</div>
         <h1 className="font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">Quiz</h1>
         <span className="w-7 h-7 p-1 rounded-full flex justify-center items-center bg-gray-300 cursor-pointer">
            <img className="w-full block invert brightness-200" src="/icons/cancel.svg" />
				</span>
		</nav>
	);
}



function QuizBoard() {
  return (
    <div className="fixed z-50 top-0 left-0 w-full">
      <Top />

    </div>
  )
}
export default QuizBoard