const CampaignCard = () => {
  return (
    <div className="flex flex-row justify-center items-center w-full flex-wrap mx-auto">
      <div className="p-6 max-w-3xl text-center">
        <h2 className="text-3xl text-red [text-shadow:_0px_0px_3px_white_,_0px_0px_3px_white_] font-extrabold mb-4">
          WORKING FOR YOU
        </h2>
        <div className="flex flex-col space-y-4 text-left">
          <li className="text-blue text-xl font-bold">
            Member of the Warren County Board for 15 years
          </li>
          <li className="text-blue text-xl font-bold">
            Chairman of the Buildings & Grounds Committee for nearly 12 years
            Past
          </li>
          <li className="text-blue text-xl font-bold">
            Citizen of the Year Active member of the Monmouth Rotary Club and
          </li>
          <li className="text-blue text-xl font-bold">
            Kiwanis Club Serves on numerous other boards and committees Active
            volunteer in Monmouth
          </li>
        </div>
        <h3 className="text-2xl font-bold text-white mt-4">
          Vote Tuesday, April 1st
        </h3>
      </div>
    </div>
  );
};

export default CampaignCard;
