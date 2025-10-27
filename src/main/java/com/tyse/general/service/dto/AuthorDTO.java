package com.tyse.general.service.dto;

import jakarta.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link com.tyse.general.domain.Author} entity.
 */
@SuppressWarnings("common-java:DuplicatedBlocks")
public class AuthorDTO implements Serializable {

    private Long id;

    @NotNull
    @Size(min = 3)
    private String name;

    private Integer age;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof AuthorDTO)) {
            return false;
        }

        AuthorDTO authorDTO = (AuthorDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, authorDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "AuthorDTO{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", age=" + getAge() +
            "}";
    }
}
