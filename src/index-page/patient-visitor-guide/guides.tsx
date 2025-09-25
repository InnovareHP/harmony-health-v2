import DischargeAndFollowUp from "@/src/components/patient-visitor-page/discharge-and-follow-up";
import DuringYourStay from "@/src/components/patient-visitor-page/during-your-stay";
import PreparingYourStay from "@/src/components/patient-visitor-page/preparing-your-stay";
import Visitation from "@/src/components/patient-visitor-page/visitation";

type Props = {
  guide: string;
};

const Guides = ({ guide }: Props) => {
  if (guide === "preparing-your-stay") {
    return <PreparingYourStay />;
  }

  if (guide === "during-your-stay") {
    return <DuringYourStay />;
  }

  if (guide === "visitation") {
    return <Visitation />;
  }

  if (guide === "discharge-follow-up") {
    return <DischargeAndFollowUp />;
  }
};

export default Guides;
