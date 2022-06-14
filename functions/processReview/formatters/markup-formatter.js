export default {
  toFilename(review) {
    return `/performancereviews/${moment().format("YYYYMMDD")}_${
      review.firstName
    }_${review.lastName}.wiki`;
  },

  toContent(review) {
    let content = "";
    content += `= Performance Review ${review.firstName} ${review.lastName} =\n`;
    content += `\n`;
    content += `*Date:* ${moment().format("YYYY-MM-DD")}\n`;
    content += `*Seniority:* ${review.seniority}\n`;
    content += "\n";
    content += "\n";
    content += "== Work Achievements ==\n";
    content += "\n";
    review.achievements.forEach(
      (achievement) => (content += `  * ${achievement}\n`)
    );
    content += "\n";
    content += "\n";
    content += "== Behaviour ==\n";
    content += "\n";
    (content += `  * Communication: ${review.behaviour.communication}\n`),
      (content += `  * Execution: ${review.behaviour.execution}\n`),
      (content += `  * Implementation: ${review.behaviour.implementation}\n`),
      (content += `  * Teamwork: ${review.behaviour.teamwork}\n`),
      (content += `  * Innovation: ${review.behaviour.innovation}\n`),
      (content += "\n");
    content += "\n";
    content += "== Strengths ==\n";
    content += "\n";
    review.strengths.forEach((strength) => (content += `  * ${strength}\n`));
    content += "\n";
    content += "\n";
    content += "== Opportunities ==\n";
    content += "\n";
    review.opportunities.forEach(
      (opportunity) => (content += `  * ${opportunity}\n`)
    );

    return content;
  },
};
