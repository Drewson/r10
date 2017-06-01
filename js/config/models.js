import Realm from 'realm';

const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date',
  }
};
const Realm = new Realm({schema: [Fave]});

//WHAT ABOUT THAT CRUD
export const queryFaves = () => {
  let faveIds = realm.objects('Fave').map(f => f.id);
  return favesIds;
}

export const createFaves = (faveId) => {
  realm.write(() => {
    realm.create('Fave', { id: faveId, faved_on: new Date });
  });
}

export const deleteFave = (faveId) => {
  realm.write(() => {
    let faveToDelete = realm.objects('Fave').filter('id == $0', faveId)
    realm.delete(faveToDelete)
  })
}

export default Realm;