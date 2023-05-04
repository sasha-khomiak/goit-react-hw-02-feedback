import Feedback from './Feedback/Feedback';

export const App = () => {
  return (
    <div>
      <Feedback
        initialValueGood={0}
        initialValueNeutral={0}
        initialValueBad={0}
      />
    </div>
  );
};
