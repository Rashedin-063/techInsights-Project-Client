import TechPoll from "../../assets/TechPoll"
import PageTitle from "../../components/PageTitle"
import TechDemandPoll from "../../components/TechDemandPoll"


const Poll = () => {
  return (
    <div className="mt-6">
      <PageTitle title='Interactive Tech Quiz' />
      <div className='flex flex-col md:flex-row gap-6 '>
        <TechPoll />
        <TechDemandPoll />
      </div>
    </div>
  );
}
export default Poll