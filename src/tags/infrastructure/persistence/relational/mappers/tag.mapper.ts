import { Tag } from '../../../../domain/tag';
import { TagEntity } from '../entities/tag.entity';

export class TagMapper {
  static toDomain(raw: TagEntity): Tag {
    const domainEntity = new Tag();
    domainEntity.id = raw.id;
    domainEntity.created_at = raw.created_at;
    domainEntity.updated_at = raw.updated_at;

    return domainEntity;
  }

  static toPersistence(domainEntity: Tag): TagEntity {
    const persistenceEntity = new TagEntity();
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.created_at = domainEntity.created_at;
    persistenceEntity.updated_at = domainEntity.updated_at;

    return persistenceEntity;
  }
}
