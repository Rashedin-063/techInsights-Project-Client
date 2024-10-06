import TechPoll from '../../components/TechPoll';
import PageTitle from '../../components/PageTitle';
import TechDemandPoll from '../../components/TechDemandPoll';
import LanguageQuiz from '../../components/LanguageQuiz';

const Poll = () => {
  return (
    <div className='mt-8'>
      <PageTitle title='Participate in Tech Quiz' />
      <div className='flex flex-col md:flex-row gap-6 -mt-4'>
        {/* <TechPoll /> */}
        <LanguageQuiz/>
        <TechDemandPoll />
      </div>
    </div>
  );
};
export default Poll;
