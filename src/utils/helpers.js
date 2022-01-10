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

function getTrimmed(str, maxLength) {
  return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
}

export {getAllowedStatusTransitions, getTrimmed};
