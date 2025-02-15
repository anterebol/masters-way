import {PlanForNextPeriod} from "src/model/businessModel/PlanForNextPeriod";
import {TimeUnit} from "src/model/businessModel/time/timeUnit/TimeUnit";
import {PlanForNextPeriodDTO} from "src/model/firebaseCollection/PlanForNextPeriodDTO";

/**
 * Convert {@link PLanForNextPeriodDTO} to P{@link LanForNextPeriod}
 * @param {PlanForNextPeriodDTO} planForNextPeriodDTO
 * @returns {PlanForNextPeriod} {@link PlanForNextPeriod}
 */
export const planForNextPeriodDTOToPlanForNextPeriodConverter =
  (planForNextPeriodDTO: PlanForNextPeriodDTO): PlanForNextPeriod => {
    return new PlanForNextPeriod({
      ...planForNextPeriodDTO,
      timeUnit: TimeUnit[planForNextPeriodDTO.timeUnit],
    });
  };

