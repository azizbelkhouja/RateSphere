package com.ratesphere;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public List<Book> allBooks() {

        return bookRepository.findAll();
    }

    public Book singleMovie(ObjectId id) {

        return bookRepository.findById(id);
    }
}
