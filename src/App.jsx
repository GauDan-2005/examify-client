import RoleRoutes from "./rbac/RoleRoutes";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <RoleRoutes />
    </div>
  );
}

export default App;
