import * as React from "react";
import {useParams} from "react-router-dom";

function Edit() {
  const {taskId} = useParams();

  return <div>{taskId}</div>
}

export default Edit;