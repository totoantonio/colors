import React from "react";

function Features() {
  const gradientStyle = {
    background: "linear-gradient(45deg, #D4145A 30%, #FBB03B 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const highlightKeywords = (text) => {
    const keywords = ["coloring", "crayons", "colors", "color", "important"];
    const regex = new RegExp(`(${keywords.join("|")})`, "gi");
    const parts = text.split(regex);
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
        {highlightKeywords("Why Coloring Is So Important")}
      </h1>
      <br />
      <div className="join join-vertical w-full">
        {/* Mapping through the array to dynamically create feature sections */}
        {[
          {
            title: "Enhances Motor Skills",
            description:
              "The act of coloring involves gripping crayons, choosing colors, and applying the color to the desired area within the confines of a drawing. This helps in the development of the tiny muscles in the hands, fingers, and wrist, thus improving fine motor coordination. Over time, these skills can aid in other activities like typing, sports, and performing detailed tasks.",
          },
          {
            title: "Promotes Creativity",
            description:
              "Coloring encourages kids to experiment with color, patterns, and designs, fostering their creative thought processes. It allows them to express their individuality and imagination through the choices they make on the page, which can translate to enhanced creativity in other aspects of life.",
          },
          {
            title: "Facilitates Cognitive Development",
            description:
              "Through coloring, children learn the skill of patience and learn to focus on details as they concentrate on completing their picture. This attention to detail helps develop their cognitive skills by improving their ability to focus, make decisions, and apply logic to color selection and how it relates to the intended outcome of their artwork.",
          },
          {
            title: "Improves Hand-Eye Coordination",
            description:
              "Coloring requires children to color within specified areas, which improves hand-eye coordination. This skill is essential in developing good handwriting, as well as other activities where precision is important.",
          },
          {
            title: "Encourages Color Recognition and Use",
            description:
              "As children pick and apply color, they learn to recognize the names and shades of colors. Coloring is one of the initial exposures children have to colors and the concept of mixing colors to make new ones, laying a foundation for understanding color theory.",
          },
          {
            title: "Provides a Basis for Understanding Boundaries",
            description:
              "Coloring within the lines is a preliminary exercise in understanding boundaries and respecting limits. This seemingly simple skill can translate to respecting rules and guidelines in other areas of life.",
          },
          {
            title: "Stress Relief and Relaxation",
            description:
              "Coloring has a therapeutic effect on children. It enables them to relax and release any stress they may be experiencing. Through coloring, children can focus on the task at hand and momentarily put aside their worries.",
          },
          {
            title: "Encourages Self-Expression",
            description:
              "Coloring allows children to express their feelings and emotions through the medium of art. It provides a safe outlet for expressing thoughts and feelings that they might not otherwise be able to articulate, fostering emotional development.",
          },
          {
            title: "Prepares Them for School",
            description:
              "Coloring sheets often include a variety of shapes, letters, and numbers. Engaging with these elements through coloring can prepare children for formal education by familiarizing them with the shapes of letters and numbers, making the learning process more intuitive and less intimidating.",
          },
          {
            title: "Conclusion",
            description:
              "Coloring is more than just an activity to keep kids occupied; it’s a crucial part of their developmental process, contributing to their physical, psychological, and emotional well-being. By integrating coloring into daily playtime, we provide children with a fun and educational tool that sets the groundwork for a lifetime of learning.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="collapse collapse-arrow join-item border border-base-300"
          >
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              <h1 className="flex items-center font-bold gap-2">
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
                {feature.title}
              </h1>
            </div>
            <div className="collapse-content">
              <p className="mt-4 text-lg leading-none">
                {highlightKeywords(feature.description)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
