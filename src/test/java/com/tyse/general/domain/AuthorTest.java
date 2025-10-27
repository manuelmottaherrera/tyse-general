package com.tyse.general.domain;

import static com.tyse.general.domain.AuthorTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.tyse.general.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class AuthorTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Author.class);
        Author author1 = getAuthorSample1();
        Author author2 = new Author();
        assertThat(author1).isNotEqualTo(author2);

        author2.setId(author1.getId());
        assertThat(author1).isEqualTo(author2);

        author2 = getAuthorSample2();
        assertThat(author1).isNotEqualTo(author2);
    }
}
