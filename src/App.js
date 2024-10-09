import withAuthentication from "./hocs/withAuthentication";
import Dashboard from "./components/Dashboard";

function App() {
  const AuthenticatedDashboard = withAuthentication(Dashboard);

  return (
    <div>
      <AuthenticatedDashboard />
    </div>
  );
}

export default App;
