import { actorsState } from '../../model/initialStates';

const initialStates = {
  actors: actorsState,
};

export default function actorsReducer(
  state = initialStates,
  { type, payload }
) {
  switch (type) {
    default:
      return state;
  }
}
