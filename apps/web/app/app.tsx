// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { DesignSystem } from '@org/design-system';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="web" />
      <DesignSystem />
    </div>
  );
}

export default App;
