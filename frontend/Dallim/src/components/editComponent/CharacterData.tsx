export type CharacterType = {
  character: any;
  background: any;
}

export const characterData: CharacterType[] = [
  {
    character: require('../../assets/character/토끼_선택.png'),
    background: require('../../assets/character/토끼_배경.png')
  },
  {
    character: require('../../assets/character/펭귄_선택.png'),
    background: require('../../assets/character/펭귄_배경.png')
  },
  {
    character: require('../../assets/character/팬더_선택.png'),
    background: require('../../assets/character/팬더_배경.png')
  },
  {
    character: require('../../assets/character/병아리_선택.png'),
    background: require('../../assets/character/병아리_배경.png')
  }
];