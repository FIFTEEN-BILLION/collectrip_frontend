import NavBar from './NavBar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      }}
    >
      <div
        style={{
          paddingBottom: '64px',
          boxSizing: 'border-box',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </div>
      <NavBar />
    </div>
  );
};

export default MainLayout;
