import {Time} from "src/model/report/time/Time";

interface WorkDoneParams {
  id: string,
  todoItem: string,
  time: Time,
}


/**
 * What was done
 */
export class WorkDone {

  /**
   * Work's ID
   */
  public id: string;

  /**
   * What was done
   */
  public todoItem: string;

  /**
   * How long was the job done in minutes
   */
  public time: Time;

  constructor(params: WorkDoneParams) {
    this.id = params.id;
    this.todoItem = params.todoItem;
    this.time = params.time;
  }

  /**
   * Get formatted work
   */
  public getFullWork() {
    return `${this.todoItem} (${this.time.amount} ${this.time.unit})`;
  }

}
