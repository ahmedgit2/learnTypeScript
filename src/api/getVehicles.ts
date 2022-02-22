import {axios} from '../utils';
import {mapAxiosError} from '../utils/mappedError';

interface Props {
  id: number;
}
export const getVehicles = async (props: Props) => {
  const {id} = props;

  try {
    const vehicles = await axios.get(
      `/providers/${id}/provider-vehicles?page=1&limit=20&ignoreLimit=true&verified=true`,
    );

    return vehicles.data;
  } catch (error) {
    throw mapAxiosError(error);
  }
};
