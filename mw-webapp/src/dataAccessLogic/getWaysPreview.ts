import {wayDTOToWayPreviewConverter} from "src/dataAccessLogic/DTOToPreviewConverter/wayDTOToWayPreviewConverter";
import {getUsersPreview} from "src/dataAccessLogic/getUsersPreview";
import {UserPreview} from "src/model/businessModelPreview/UserPreview";
import {WayPreview} from "src/model/businessModelPreview/WayPreview";
import {WayService} from "src/service/WayService";

// TODO: get rid of this variable (check all files)
const FIRST_INDEX = 0;

/**
 * Ways preview
 * @returns {Promise<WayPreview[]>}
 */
export const getWaysPreview = async (): Promise<WayPreview[]> => {
  const waysDTO = await WayService.getWaysDTO();
  const usersPreview = await getUsersPreview();

  const firstWay = waysDTO[FIRST_INDEX];

  const owner: UserPreview = usersPreview
    .find((elem) => elem.uuid === firstWay.ownerUuid) ?? {} as UserPreview;

  const currentMentors = firstWay.currentMentors.map((currentMentorUuid) => {
    const currentMentor: UserPreview = usersPreview
      .find((elem) => elem.uuid === currentMentorUuid) ?? {} as UserPreview;
    return currentMentor;
  });

  const wayProps = {
    owner,
    currentMentors,
  };

  const ways: WayPreview[] = waysDTO.map((wayPreview) => wayDTOToWayPreviewConverter(wayPreview, wayProps));
  return ways;
};