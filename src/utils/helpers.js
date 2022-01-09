function getAllowedStatusTransitions(baseStatus) {
  const allowedStatusTransitions = {
    ToDo: ["InProgress"],
    InProgress: ["Blocked", "InQA"],
    Blocked: ["ToDo"],
    InQA: ["ToDo", "Done"],
    Done: ["Deployed"],
    Deployed: [],
  };
  return allowedStatusTransitions[baseStatus] || [];
}

export {getAllowedStatusTransitions};
