function FaqCard({ question, answer }:{question: string, answer: string}) {
	return (
		<article className="faq__card">
			<img
				src="/icons/faq.svg"
				alt=""
			/>
			<div>
				<h3>{question}</h3>
				<p>{answer}</p>
			</div>
		</article>
	);
}
export default FaqCard;