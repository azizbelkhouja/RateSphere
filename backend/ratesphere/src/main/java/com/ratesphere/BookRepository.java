package com.ratesphere;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BookRepository extends MongoRepository<Book, ObjectId> {

    Optional<Book> findBookByImdbId(String imdbId);
}
