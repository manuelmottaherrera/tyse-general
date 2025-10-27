package com.tyse.general.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;

public class AuthorTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));
    private static final AtomicInteger intCount = new AtomicInteger(random.nextInt() + (2 * Short.MAX_VALUE));

    public static Author getAuthorSample1() {
        return new Author().id(1L).name("name1").age(1);
    }

    public static Author getAuthorSample2() {
        return new Author().id(2L).name("name2").age(2);
    }

    public static Author getAuthorRandomSampleGenerator() {
        return new Author().id(longCount.incrementAndGet()).name(UUID.randomUUID().toString()).age(intCount.incrementAndGet());
    }
}
