const WelcomeText = ({ user }: any) => <h3>{user ? 'Online' : 'Offline'}</h3>;

export default WelcomeText;