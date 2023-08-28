import { Character } from './character.interface';

export interface CharacterContextType {
  characters: Character[];
  loader: boolean;
  messageError: boolean;
  detailsCharacterId: (characterId: string) => void;
  character?: Character;
  loadMoreCharacters: () => void;
  hasMore: boolean;
}
