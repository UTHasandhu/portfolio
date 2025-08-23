// skillTagUtils.js
export const tagColors = {
  specialty: "bg-primary",
  language: "bg-success",
  framework: "bg-warning text-dark",
  tool: "bg-info text-dark",
  database: "bg-secondary",
  cloud: "bg-dark",
  project: "bg-danger"
};

export const getTagColorFromType = (type) => {
  return tagColors[type] || "bg-light text-dark";
};

export const groupTagsByType = (tags = []) => {
  const tagFrequency = {};

  tags.forEach(({ name, type }) => {
    if (!tagFrequency[type]) tagFrequency[type] = {};
    if (!tagFrequency[type][name]) tagFrequency[type][name] = 0;
    tagFrequency[type][name]++;
  });

  const grouped = {};
  for (const type in tagFrequency) {
    grouped[type] = Object.entries(tagFrequency[type])
      .sort((a, b) => b[1] - a[1]) // by frequency descending
      .map(([name]) => name);      // keep tag names only
  }

  return grouped;
};
