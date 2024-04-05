import React from "react";

function Features() {
  const gradientStyle = {
    background: "linear-gradient(45deg, #D4145A 30%, #FBB03B 90%)", // Vibrant pink to orange gradient
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const highlightKeywords = (text) => {
    const keywords = ["coloring", "crayons", "colors", "color"];
    const parts = text.split(new RegExp(`(${keywords.join("|")})`, "gi"));
    return parts.map((part, i) =>
      keywords.includes(part.toLowerCase()) ? (
        <span key={i} style={gradientStyle}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="container mx-auto p-5 flex flex-col">
      <h1 className="text-2xl font-bold text-left pt-10">
        Here’s why coloring is so important for kids
      </h1>
      <br />
      <h1 className="text-2xl font-bold text-left">Enhances Motor Skills</h1>
      <p className="mt-4 text-lg leading-none">
        {highlightKeywords(
          "The act of coloring involves gripping crayons, choosing colors, and applying the color to the desired area within the confines of a drawing. This helps in the development of the tiny muscles in the hands, fingers, and wrist, thus improving fine motor coordination. Over time, these skills can aid in other activities like typing, sports, and performing detailed tasks."
        )}
      </p>
      <br />
      <h1 className="text-2xl font-bold">Promotes Creativity</h1>
      <p className="mt-4 text-lg leading-none">
        {highlightKeywords(
          "Coloring encourages kids to experiment with color, patterns, and designs, fostering their creative thought processes. It allows them to express their individuality and imagination through the choices they make on the page, which can translate to enhanced creativity in other aspects of life."
        )}
      </p>
      <br />
      <h1 className="text-2xl font-bold">Facilitates Cognitive Development</h1>
      <p className="mt-4 text-lg leading-none">
        {highlightKeywords(
          "Through coloring, children learn the skill of patience and learn to focus on details as they concentrate on completing their picture. This attention to detail helps develop their cognitive skills by improving their ability to focus, make decisions, and apply logic to color selection and how it relates to the intended outcome of their artwork."
        )}
      </p>
      <br />
      <h1 className="text-2xl font-bold">Improves Hand-Eye Coordination</h1>
      <p className="mt-4 text-lg leading-none">
        {highlightKeywords(
          "Coloring requires children to color within specified areas, which improves hand-eye coordination. This skill is essential in developing good handwriting, as well as other activities where precision is important."
        )}
      </p>
      <br />
      <h1 className="text-2xl font-bold">
        Encourages Color Recognition and Use
      </h1>
      <p className="mt-4 text-lg leading-none">
        {highlightKeywords(
          "As children pick and apply color, they learn to recognize the names and shades of colors. Coloring is one of the initial exposures children have to colors and the concept of mixing colors to make new ones, laying a foundation for understanding color theory."
        )}
      </p>
      <br />
      <h1 className="text-2xl font-bold">
        Provides a Basis for Understanding Boundaries
      </h1>
      <p className="mt-4 text-lg leading-none">
        {highlightKeywords(
          "Coloring within the lines is a preliminary exercise in understanding boundaries and respecting limits. This seemingly simple skill can translate to respecting rules and guidelines in other areas of life."
        )}
      </p>
      <br />
      <h1 className="text-2xl font-bold">Stress Relief and Relaxation</h1>
      <p className="mt-4 text-lg leading-none">
        {highlightKeywords(
          "Coloring has a therapeutic effect on children. It enables them to relax and release any stress they may be experiencing. Through coloring, children can focus on the task at hand and momentarily put aside their worries."
        )}
      </p>
      <br />
      <h1 className="text-2xl font-bold">Encourages Self-Expression</h1>
      <p className="mt-4 text-lg leading-none">
        {highlightKeywords(
          "Coloring allows children to express their feelings and emotions through the medium of art. It provides a safe outlet for expressing thoughts and feelings that they might not otherwise be able to articulate, fostering emotional development."
        )}
      </p>
      <br />
      <h1 className="text-2xl font-bold">Prepares Them for School</h1>
      <p className="mt-4 text-lg leading-none">
        {highlightKeywords(
          "Coloring sheets often include a variety of shapes, letters, and numbers. Engaging with these elements through coloring can prepare children for formal education by familiarizing them with the shapes of letters and numbers, making the learning process more intuitive and less intimidating."
        )}
      </p>
      <br />
      <h1 className="text-2xl font-bold">Conclusion</h1>
      <p className="mt-4 text-lg leading-none">
        {highlightKeywords(
          "Coloring is more than just an activity to keep kids occupied; it’s a crucial part of their developmental process, contributing to their physical, psychological, and emotional well-being. By integrating coloring into daily playtime, we provide children with a fun and educational tool that sets the groundwork for a lifetime of learning."
        )}
      </p>

      <br />

      <div role="alert" className="alert mt-4 text-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-current shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span className="mt-4 text-sm leading-none">
          Articles in Early Childhood Education Journal & Journal of
          Occupational Therapy, Schools, & Early Intervention discuss how
          coloring activities positively impact fine motor skill development in
          children. Mihaly Csikszentmihalyi's works on creativity promote the
          benefits of coloring in fostering creativity. The theories of Jean
          Piaget and Lev Vygotsky offer insights into how coloring activities
          contribute to cognitive development through enhancing focus and
          decision-making skills. Studies in the American Journal of
          Occupational Therapy demonstrate how coloring activities improve
          hand-eye coordination. Research in Early Childhood Research Quarterly
          emphasizes the importance of coloring activities in early childhood
          development. Developmental psychology literature highlights how
          structured activities like coloring help children learn about
          boundaries, rules, and the importance of following guidelines. Art
          therapy journals, such as Art Therapy: Journal of the American Art
          Therapy Association, discuss the therapeutic effects of coloring on
          stress relief and relaxation in children. The American Art Therapy
          Association encourages self-expression through coloring activities.
          Research published in the Journal of Early Childhood Literacy
          emphasizes the role of coloring in preparing children for school by
          developing pre-writing skills and letter and number recognition.
        </span>
      </div>
    </div>
  );
}

export default Features;
