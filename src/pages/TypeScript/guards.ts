function numberStrip(a: number | string) {
  if (typeof a === "number") {
    return a.toFixed(2);
  }
  return a.trim();
}

class TsResponse {
  header = "header response";
  result = "result response";
}

class TsError {
  header = "header error";
  result = "result error";
}

// check for instance of response
function tsHandle(result: TsResponse | TsError) {
  if (result instanceof TsResponse) {
    return {
      info: result.header + result.result,
    };
  } else {
    return {
      info: result.header + result.result,
    };
  }
}

//======

type TsAlertTypes = "success" | "danger" | "warning";

function SetTsAlerts(type: TsAlertTypes) {
  //......
}

SetTsAlerts("success");
SetTsAlerts("danger");
SetTsAlerts("warning");
