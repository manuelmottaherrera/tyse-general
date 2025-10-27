package com.tyse.general.service;

import com.tyse.general.service.dto.AuthorDTO;
import java.util.Optional;

/**
 * Service Interface for managing {@link com.tyse.general.domain.Author}.
 */
public interface AuthorService {
    /**
     * Save a author.
     *
     * @param authorDTO the entity to save.
     * @return the persisted entity.
     */
    AuthorDTO save(AuthorDTO authorDTO);

    /**
     * Updates a author.
     *
     * @param authorDTO the entity to update.
     * @return the persisted entity.
     */
    AuthorDTO update(AuthorDTO authorDTO);

    /**
     * Partially updates a author.
     *
     * @param authorDTO the entity to update partially.
     * @return the persisted entity.
     */
    Optional<AuthorDTO> partialUpdate(AuthorDTO authorDTO);

    /**
     * Get the "id" author.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<AuthorDTO> findOne(Long id);

    /**
     * Delete the "id" author.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
