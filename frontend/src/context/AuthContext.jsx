import { createContext, useMemo, useState } from "react";

const authContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const auth = useMemo(() => ({ user, setUser }), []);

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default authContext;
export { AuthProvider };
