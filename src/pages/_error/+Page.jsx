export { Page };

import "./Page.css";
import errorVector from '../../assets/vectors/error.svg';
import { usePageContext } from 'vike-react/usePageContext';

function Page() {
  const pageContext = usePageContext();
  const { abortReason, abortStatusCode } = pageContext;

  let code = "Error";
  let msg; 

  if (abortReason?.notAdmin) {
    msg = "You cannot access this page because you aren't an administrator.";
  } else if (typeof abortReason === 'string') {
    msg = abortReason;
  } else if (abortStatusCode === 403) {
    code = "403 error";
    msg = "You cannot access this page because you don't have enough privileges.";
  } else if (abortStatusCode === 401) {
    code = "401 error";
    msg = "You cannot access this page because you aren't logged in. Please log in.";
  } else {
    // Fallback error message
    code = "404 error";
    msg = pageContext.is404 ?
      "This page doesn't exist." :
      "Something went wrong. Sincere apologies. Try again (later).";
  }

  return (
    <div className="error-container">
      <img src={errorVector} className="error-vector" draggable="false" />
      <h1 className="error-code">{code}</h1>
      <p className="error-message">{msg}</p>  
    </div>
  )
}
