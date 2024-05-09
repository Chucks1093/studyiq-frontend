import faqData from "./faq.data";
import FaqCard from "./FaqCard";
import "./style.scss";

function FAQ() {
	return (
		<section className="faq__section">
			<img className="section__icon" src="/icons/faq-icon.svg" width={100} height={100} alt="faq-icon" />

			<h3>Got Any Question?</h3>
			<p className="sub__text">
			From Ingredient Stories to Cooking Techniques, We&apos;ve Got the Perfect Answers to Elevate Your Culinary Experience.
			</p>
			<div className="faq__card__container">
				{faqData.map((item, i) => (
					<FaqCard
                  key={i}
						question={item.question}
						answer={item.answer}
					/>
				))}
			</div>
		</section>
	);
}
export default FAQ;