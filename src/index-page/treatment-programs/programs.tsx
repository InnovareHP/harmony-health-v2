import InpatientPrograms from "@/src/components/treatment-programs/inpatient-programs";
import InterdisciplinaryTeam from "@/src/components/treatment-programs/interdisciplinary-team";
import OutpatientPrograms from "@/src/components/treatment-programs/outpatient-programs";

type Props = {
  program: string;
};

const Programs = ({ program }: Props) => {
  if (program === "inpatient-program") {
    return <InpatientPrograms />;
  }

  if (program === "outpatient-program") {
    return <OutpatientPrograms />;
  }

  if (program === "interdisciplinary-team") {
    return <InterdisciplinaryTeam />;
  }
};

export default Programs;
