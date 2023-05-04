import Statistics from './Statistics/Statistics';

export const App = () => {
  return (
    <div>
      <Statistics
        initialValueGood={0}
        initialValueNeutral={0}
        initialValueBad={0}
      />
    </div>
  );
};
